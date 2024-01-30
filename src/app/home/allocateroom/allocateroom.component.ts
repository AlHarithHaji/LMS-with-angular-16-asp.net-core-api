import { Component,HostListener, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LmshttpService } from 'src/app/services/lmshttp.service';

@Component({
  selector: 'app-allocateroom',
  templateUrl: './allocateroom.component.html',
  styleUrls: ['./allocateroom.component.css']
})
export class AllocateroomComponent {

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
  constructor(private renderer: Renderer2,public router:Router, private httpService:LmshttpService, private formBuilder: FormBuilder) {
    this.servername=this.httpService.serverUrl;

  }
  ngOnInit(): void {
    this.GetAllCourse();
    this.getAllTeachers();
    this.getAllClassRooms();
    this.getAllocation();
  }
  getAllocation() {
    this.allocationList=[];
    this.httpService.GetRoomAndTeacherAllocation().subscribe(data=>{       
      this.allocationList=data;  
    },error=>{ })
  }
  GetAllCourse() {
    this.courseList=[];
    this.httpService.GetAllCourse().subscribe(data=>{       
      this.courseList=data;  
    },error=>{ })
  }

  SaveAllocation()
  {
    debugger;
    if(this.formModel.classRoomId && this.formModel.teacherId && this.formModel.courseId)
    {

      this.httpService.RoomAndTeacherAllocation(this.formModel).subscribe(data=>{       
       this.getAllocation(); 
       this.showMessage=true;
       this.responseMessage=data;
       if(this.responseMessage=="Save Sucessfully")
       {
        this.formModel={};
       }
      
    
      },error=>{ })
    }
  }

  edit(val:any)
  {
    this.formModel=val;
  }
  delete(val:any)
  {
    
    if(confirm("Are you sure to delete"))
    {
      this.httpService.DeleteRoomAndTeacherAllocation(val.allocationTeacherId).subscribe(data=>{       
        this.getAllocation(); 
        console.log(this.classRoomList);
      },error=>{ })
   
    }
  }
  reset()
  {
    this.formModel.reset();
  }
  getAllTeachers() {
    this.teachersList=[];
    this.httpService.getAllTeachers().subscribe(data=>{       
      this.teachersList=data;  
    },error=>{ })
  }
  getAllClassRooms() {
    this.classRoomList=[];
    this.httpService.GetAllClassRoom().subscribe(data=>{       
      this.classRoomList=data;  
      console.log(this.classRoomList);
    },error=>{ })
  }
  
 
}
