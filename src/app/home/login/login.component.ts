import { Component,HostListener, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LmshttpService } from 'src/app/services/lmshttp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  itemForm: FormGroup;
  formModel:any={};
  showError:boolean=false;
  errorMessage:any;
  constructor(public router:Router, public httpService:LmshttpService, private formBuilder: FormBuilder) 
    {
      this.itemForm = this.formBuilder.group({
        Email: [this.formModel.Email,[ Validators.required]],
        Password: [this.formModel.Password,[ Validators.required]],
       
    });
  }

  ngOnInit(): void {
  }
  onLogin()
  {
    if(this.itemForm.valid)
    {
      this.showError=false;
      this.httpService.Login(this.itemForm.value).subscribe(data=>{    
        
        if(data!=null)
        {
          debugger;
          localStorage.setItem('loginId',data.loginId)
          localStorage.setItem('role',data.userType)
          this.router.navigateByUrl('/index');
          setTimeout(() =>{ 
            window.location.reload();
          },1000);
        }
        else{
          this.showError=true;
          this.errorMessage="Wrong User or Password";
        }
      },error=>{ })
    }
    else{
      this.itemForm.markAllAsTouched();
    }
  }
  signUp()
  {
    this.router.navigateByUrl('/sign-up');
  }
}
