import { Component,HostListener, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LmshttpService } from 'src/app/services/lmshttp.service';

@Component({
  selector: 'app-upgrad-students',
  templateUrl: './upgrad-students.component.html',
  styleUrls: ['./upgrad-students.component.css']
})
export class UpgradStudentsComponent {
  userList: any=[];
  courseList: any=[];
  formModel:any={};
  servername:any;
  responseMessage: any;
  showMessage: boolean=false;
  isSending: boolean=false;
  departmentList: any=[];
  teachersList: any=[];
  classRoomList: any=[];
  allocationList:any=[];
  studentList: any=[];
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
  GetStudents() {
    debugger;
    if(this.formModel.courseId && this.formModel.deparmentId)
    {
      this.studentList=[];
      this.httpService.GetStudentToBeUpgrade(this.formModel.courseId,this.formModel.deparmentId).subscribe(data=>{       
        this.studentList=data;  
        if(this.studentList.length==0)
        {
          this.showMessage=true;
          this.responseMessage="No Record has been found."
        }
      },error=>{ });
    }
    
  }
  getDeparments() {
    this.departmentList=[];
    this.httpService.GetDepartmetns().subscribe(data=>{       
      this.departmentList=data;  
    },error=>{ })
  }
  onChange(event:any,index:any)
  {
    
    this.studentList[index].ObtainMarks=event.target.value;
   
  }
  upGrade(){
    if(this.studentList.length>0)
    {
      
      this.isSending=true;
      this.httpService.UpgradStudentToNextCourse(this.studentList).subscribe(data=>{       
        this.isSending=false; 
        this.showMessage=true;
        console.log(data);
        this.responseMessage=data;
        this.formModel={};
        this.studentList=[];
       
      },error=>{ })
    }
  }

 
}
