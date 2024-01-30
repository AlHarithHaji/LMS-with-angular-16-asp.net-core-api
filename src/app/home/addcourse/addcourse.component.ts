import { Component,HostListener, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LmshttpService } from 'src/app/services/lmshttp.service';


@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit{

  userList: any=[];
  courseList: any=[];
  formModel:any={};
  servername:any;
  responseMessage: any;
  showMessage: boolean=false;
  isSending: boolean=false;
  departmentList: any=[];
  constructor(private renderer: Renderer2,public router:Router, private httpService:LmshttpService, private formBuilder: FormBuilder) {
    this.servername=this.httpService.serverUrl;

  }
  ngOnInit(): void {
    this.GetAllCourse();
    this.getDeparments();
  
  }
  GetAllCourse() {
    this.courseList=[];
    this.httpService.GetAllCourse().subscribe(data=>{       
      this.courseList=data;  
    },error=>{ })
  }

  SaveCourse()
  {
    debugger;
    if(this.formModel.courseName && this.formModel.deparmentId)
    {
      this.formModel.courseId=0;
      this.formModel.isDeleted=false;    
      this.httpService.SaveCourse(this.formModel).subscribe(data=>{       
       this.GetAllCourse(); 
       this.formModel={};
       this.formModel.deparmentId=null;
      },error=>{ })
    }
  }
  updateCourse()
  {
    debugger;
    if(this.formModel.courseName && this.formModel.deparmentId)
    {
      this.formModel.isDeleted=false;
      this.userList=[];
      this.httpService.SaveCourse(this.formModel).subscribe(data=>{       
       this.GetAllCourse(); 
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
  getDeparments() {
    this.departmentList=[];
    this.httpService.GetDepartmetns().subscribe(data=>{       
      this.departmentList=data;  
    },error=>{ })
  }
 
}
