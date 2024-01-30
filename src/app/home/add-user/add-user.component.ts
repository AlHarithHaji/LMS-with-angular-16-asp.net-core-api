import { Component,HostListener, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LmshttpService } from 'src/app/services/lmshttp.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
 
  userList: any=[];
  departmentList: any=[];
  itemForm!: FormGroup;
  formModel:any={};
  showError:boolean=false;
  errorMessage:any;
  response:any={};
  sessionList: any=[];
  responseMessage: string="";
  showMessage: boolean=false;
  constructor(private renderer: Renderer2,public router:Router, private httpService:LmshttpService, private formBuilder: FormBuilder) {
   
    this.itemForm = this.formBuilder.group({
      firstName: [this.formModel.firstName,[ Validators.required]],
      lastName: [this.formModel.lastName,[ Validators.required]],
      email: [this.formModel.email,[ Validators.required]],
      mobile: [this.formModel.mobile,[ Validators.required]],
      address: [this.formModel.address,[ Validators.required]],  
      password: [this.formModel.password],     
      sessionId: [this.formModel.sessionId],
      departmentId: [this.formModel.departmentId],
      isActive: [this.formModel.isActive],
      loginId: [this.formModel.loginId],
      userType:[this.formModel.userType,[ Validators.required]]
     
  });
  }
  ngOnInit(): void {
    this.formModel.userType=null;
    this.getAdminUsers();
  
  }
  getAdminUsers() {
    this.userList=[];
    this.httpService.getAdminAndTeacher().subscribe(data=>{       
      this.userList=data;  
    },error=>{ })
  }

  onRegister()
  {
    if(this.itemForm.valid)
    {
      this.showError=false;
      this.showMessage=false;
      this.itemForm.controls["departmentId"].setValue(0);
      this.itemForm.controls["sessionId"].setValue(0); 
      this.itemForm.controls["isActive"].setValue(true);
      this.itemForm.controls["password"].setValue("12345");
        this.httpService.Register(this.itemForm.value).subscribe(data=>{    
          this. response=data;
          debugger;
          console.log(data);
          this.getAdminUsers();
          this.itemForm.reset();
          this.showMessage=true;
          if(this.response=="Save Successfully")
          {
            var result = this.response + "Default Password is 12345";
            this.responseMessage=result;

          }
          else{
            this.responseMessage=this.response;
          }
         
        },error=>{ })
    }
    else{
      this.itemForm.markAllAsTouched();
    }
   
  }
  edit(val:any)
  {
    this.formModel=val;
  }
  delete(val:any)
  {

  }
  reset()
  {
    this.formModel.reset();
  }
 
}
