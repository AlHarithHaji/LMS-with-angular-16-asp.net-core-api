import { Component,HostListener, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LmshttpService } from 'src/app/services/lmshttp.service';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent {

  userList: any=[];
  studentInfo: any={};
  formModel:any={};
  servername:any;
  gradeList:any=[];
  responseMessage: any;
  showMessage: boolean=false;
  isSending: boolean=false;
  attendanceList: any=[];
  loginId: any;
  constructor(private route: ActivatedRoute,private renderer: Renderer2,public router:Router, private httpService:LmshttpService, private formBuilder: FormBuilder) {
    this.servername=this.httpService.serverUrl;

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.loginId=params['id']; // Assuming loginId is a number, adjust accordingly
    });
    if( this.loginId==0)
    {
      this.loginId=localStorage.getItem('loginId');
    }
    this.GetStudentCurrentCourse();
    this.GetStudentGrads();
    this.GetStudentAttedance();
  
  }
  GetStudentCurrentCourse() {
    debugger;
   
    this.studentInfo={};
    this.httpService.GetStudentCurrentCourse(parseInt( this.loginId)).subscribe(data=>{       
      this.studentInfo=data;  
      console.log(this.studentInfo);
    },error=>{ })
  }
  GetStudentGrads() {
    this.gradeList={};
    this.httpService.GetStudentGrads(this.loginId).subscribe(data=>{       
      this.gradeList=data;  
      console.log(this.studentInfo);
    },error=>{ })
  }
  GetStudentAttedance() {
    this.attendanceList={};
    this.httpService.GetStudentAttendance(this.loginId).subscribe(data=>{       
      this.attendanceList=data;  
      console.log(this.studentInfo);
    },error=>{ })
  }

}
