import { Component,HostListener, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LmshttpService } from 'src/app/services/lmshttp.service';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent {
  userList: any=[];
  sessionList: any=[];
  formModel:any={};
  departmentList: any=[];
  servername:any;
  responseMessage: any;
  showMessage: boolean=false;
  isSending: boolean=false;
  constructor(private renderer: Renderer2,public router:Router, private httpService:LmshttpService, private formBuilder: FormBuilder) {
    this.servername=this.httpService.serverUrl;

  }
  ngOnInit(): void {
    this.getDeparments();
  
  
  }
  GetNewRegisterUser() {
    this.userList=[];
    this.httpService.GetAllStudent(this.formModel.departmentId).subscribe(data=>{       
      this.userList=data;  
    },error=>{ })
  }
  getDeparments() {
    this.departmentList=[];
    this.httpService.GetDepartmetns().subscribe(data=>{       
      this.departmentList=data;  
    },error=>{ })
  }
 
  getStudents()
  {
    debugger;
    if(this.formModel.departmentId)
    {
      this.userList=[];
      this.httpService.GetAllStudent(this.formModel.departmentId).subscribe(data=>{       
        this.userList=data;  
      },error=>{ })
    }
  }

}
