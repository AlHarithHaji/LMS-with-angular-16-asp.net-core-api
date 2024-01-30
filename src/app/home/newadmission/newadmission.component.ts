import { Component,HostListener, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LmshttpService } from 'src/app/services/lmshttp.service';


@Component({
  selector: 'app-newadmission',
  templateUrl: './newadmission.component.html',
  styleUrls: ['./newadmission.component.css']
})
export class NewadmissionComponent implements OnInit {
  userList: any=[];
  sessionList: any=[];
  formModel:any={};
  constructor(private renderer: Renderer2,public router:Router, private httpService:LmshttpService, private formBuilder: FormBuilder) {
  

  }
  ngOnInit(): void {
    this.GetNewRegisterUser();
  
  }
  GetNewRegisterUser() {
    this.userList=[];
    this.httpService.GetNewRegisterUser().subscribe(data=>{       
      this.userList=data;  
    },error=>{ })
  }

  viewAdmission()
  {
    if(this.formModel.departmentId && this.formModel.sessionId)
    {
      
    }
  }
  activeUser(val:any)
  {
    if(confirm("Are you sure to Approved"))
    {
    
      this.httpService.ActivateUser(val.loginId).subscribe(data=>{       
        this.GetNewRegisterUser(); 
      },error=>{ })
    }
  }
  deActiveUser(val:any)
  {
    if(confirm("Are you sure to Disapproved"))
    {
    
      this.httpService.DeActiveUser(val.loginId).subscribe(data=>{       
        this.GetNewRegisterUser(); 
      },error=>{ })
    }
  }

}
