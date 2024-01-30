import { Component,HostListener, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LmshttpService } from 'src/app/services/lmshttp.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent {
  userList: any=[];
  classRoomList: any=[];
  formModel:any={};
  servername:any;
  responseMessage: any;
  showMessage: boolean=false;
  isSending: boolean=false;
  constructor(private renderer: Renderer2,public router:Router, private httpService:LmshttpService, private formBuilder: FormBuilder) {
    this.servername=this.httpService.serverUrl;

  }
  ngOnInit(): void {
    this.getAllClassRooms();
  
  }
  getAllClassRooms() {
    this.classRoomList=[];
    this.httpService.GetAllClassRoom().subscribe(data=>{       
      this.classRoomList=data;  
      console.log(this.classRoomList);
    },error=>{ })
  }

  saveClassRoome()
  {
    debugger;
    if(this.formModel.classRoom)
    {
      this.formModel.classRoomId=0;
      this.formModel.isDeleted=false;    
      this.httpService.SaveClassRoom(this.formModel).subscribe(data=>{       
       this.getAllClassRooms(); 
       this.formModel={};
      },error=>{ })
    }
  }
  updateClassRoom()
  {
    debugger;
    if(this.formModel.classRoom)
    {
      this.formModel.isDeleted=false;
      this.formModel.classRoomId=parseInt(this.formModel.classRoomId)
      this.httpService.SaveClassRoom(this.formModel).subscribe(data=>{       
       this.getAllClassRooms(); 
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
    if(confirm('Are you sure to delete'))
    {
      this.httpService.DeleteClassRoom(val.classRoomId).subscribe(data=>{       
      this.getAllClassRooms();
      },error=>{ })
    }
  }
  reset()
  {
    this.formModel.reset();
  }
 
}
