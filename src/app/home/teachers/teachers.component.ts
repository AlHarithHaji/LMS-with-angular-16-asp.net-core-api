import { Component,HostListener, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LmshttpService } from 'src/app/services/lmshttp.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent {
  userList: any=[];
  teachersList: any=[];
  formModel:any={};
  servername:any;
  responseMessage: any;
  showMessage: boolean=false;
  isSending: boolean=false;
  constructor(private renderer: Renderer2,public router:Router, private httpService:LmshttpService, private formBuilder: FormBuilder) {
    this.servername=this.httpService.serverUrl;

  }
  ngOnInit(): void {
    this.getAllTeachers();
  
  }
  getAllTeachers() {
    this.teachersList=[];
    this.httpService.getAllTeachers().subscribe(data=>{       
      this.teachersList=data;  
    },error=>{ })
  }

  saveTeacher()
  {
    debugger;
    if(this.formModel.teacherName)
    {
      this.formModel.teacherId=0;
      this.formModel.isDeleted=false;
      this.userList=[];
      this.httpService.SaveTeacher(this.formModel).subscribe(data=>{       
       this.getAllTeachers(); 
       this.formModel={};
      },error=>{ })
    }
  }
  updateTeacher()
  {
    debugger;
    if(this.formModel.teacherName)
    {
      this.formModel.isDeleted=false;
      this.userList=[];
      this.httpService.SaveTeacher(this.formModel).subscribe(data=>{       
       this.getAllTeachers(); 
       this.formModel={};
      },error=>{ })
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
