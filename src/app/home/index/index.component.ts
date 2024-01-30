import { Component,HostListener, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LmshttpService } from 'src/app/services/lmshttp.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  departmentList: any=[];
  itemForm!: FormGroup;
  formModel:any={};
  showError:boolean=false;
  errorMessage:any;
  response:any={};
  sessionList: any=[];
  responseMessage: string="";
  showMessage: boolean=false;
  courseList: any=[];
  isSubmit: boolean=false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Change the background color when scrolling beyond a certain threshold
    const headerElement = document.querySelector('header');
    if (scrollPosition > 1) {
      this.renderer.setStyle(headerElement, 'background-color', '#ffffff'); // Set background color to 
    } else {
      this.renderer.removeStyle(headerElement, 'background-color'); // Remove inline style
    }
  }
  constructor(private renderer: Renderer2,public router:Router, private httpService:LmshttpService, private formBuilder: FormBuilder) {
    this.itemForm = this.formBuilder.group({
      firstName: [this.formModel.firstName,[ Validators.required]],
      lastName: [this.formModel.lastName,[ Validators.required]],
      email: [this.formModel.email,[ Validators.required]],
      mobile: [this.formModel.mobile,[ Validators.required]],
      address: [this.formModel.address,[ Validators.required]],
      departmentId: [this.formModel.departmentId,[ Validators.required]],
      password: [this.formModel.password,[ Validators.required]],
      sessionId: [this.formModel.sessionId],
      courseId: [this.formModel.courseId],
      userType:[this.formModel.userType]
     
  });
  }


  ngOnInit(): void {
    this.getDeparments();
    // this.getSessions();
    this.GetAllCourse();
  }
  GetAllCourse() {
    this.courseList=[];
    this.httpService.GetAllCourse().subscribe(data=>{       
      this.courseList=data;  
    },error=>{ })
  }
  onLogin()
  {
    if(this.itemForm.valid)
    {
      this.showError=false;
      this.httpService.Login(this.itemForm.value).subscribe(data=>{    
        this. response=data;
        console.log(data);
        if(this.response.userId!=0)
        {
          localStorage.setItem('token',"Bearer "+this.response.token);
          localStorage.setItem('loginid',this.response.loginId)
          this.router.navigateByUrl('/home');
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
  getDeparments() {
    this.departmentList=[];
    this.httpService.GetDepartmetns().subscribe(data=>{       
      this.departmentList=data;  
    },error=>{ })
  }
  getSessions() {
    this.sessionList=[];
    this.httpService.getActiveSession().subscribe(data=>{       
      this.sessionList=data;  
    },error=>{ })
  }
  onRegister()
  {
    debugger;
    if(this.itemForm.valid)
    {
      this.showError=false;
      this.showMessage=false;
      this.isSubmit=true;
      this.itemForm.controls["sessionId"].setValue(0);
      this.itemForm.controls["userType"].setValue("User");
      this.itemForm.controls["courseId"].setValue(0);
      
        this.httpService.Register(this.itemForm.value).subscribe(data=>{    
          this. response=data;
          this.isSubmit=false;
          if(this.response!="Email already Register")
          {
            this.itemForm.reset();
          }
          console.log(data);
          this.showMessage=true;
          this.responseMessage=this.response;
        },error=>{ })
    }
    else{
      this.itemForm.markAllAsTouched();
    }
   
  }
}
