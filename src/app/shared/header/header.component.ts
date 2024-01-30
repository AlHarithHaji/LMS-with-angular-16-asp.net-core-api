import { Component ,HostListener, OnInit, Renderer2 } from '@angular/core';
import { audit } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

   
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoginIn:boolean=false;
  IsAdmin: boolean=false;
  IsTeacher: boolean=false;
  IsUser: boolean=false;
  constructor(private renderer: Renderer2, private auth:AuthService) {}
  ngOnInit(): void {
    this.isLoginIn=this.auth.isLogin();
    console.log(this.isLoginIn);
    this.getUserType();
  }
  getUserType() {
    var userType=this.auth.getUserType();
    if(userType=="Admin")
    {
      this.IsAdmin=true;
    }
    if(userType=="User")
    {
      this.IsUser=true;
    }
    if(userType=="Teacher")
    {
      this.IsTeacher=true;
    }
  }
  logout()
  {
    this.auth.logout();
    setTimeout(() =>{ 
      window.location.reload();
    },1000);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Change the background color when scrolling beyond a certain threshold
    const headerElement = document.querySelector('header');
    if (scrollPosition > 1) {
      this.renderer.setStyle(headerElement, 'background-color', '#002347'); // Set background color to 
    } else {
      this.renderer.removeStyle(headerElement, 'background-color'); // Remove inline style
    }
  }
}

