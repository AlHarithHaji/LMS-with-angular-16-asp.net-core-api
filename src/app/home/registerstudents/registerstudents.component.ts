import { Component,HostListener, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LmshttpService } from 'src/app/services/lmshttp.service';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-registerstudents',
  templateUrl: './registerstudents.component.html',
  styleUrls: ['./registerstudents.component.css']
})
export class RegisterstudentsComponent implements OnInit {
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
    this.httpService.getRegisterStudent(this.formModel.departmentId).subscribe(data=>{       
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
      this.httpService.getRegisterStudent(this.formModel.departmentId).subscribe(data=>{       
        this.userList=data;  
      },error=>{ })
    }
  }
  downloadExcel() {
    // Adjust the URL based on your server configuration
    const excelExportUrl = this.servername+"Admin/GetExcelOfRegisterStudent?Sesstion="+this.formModel.sesstionId+"&DeparmentId="+this.formModel.departmentId;
  
    // Using saveAs from file-saver library
    saveAs(excelExportUrl, 'Students.xlsx');
  }
  sendEmail()
  {
    if(confirm("Are you sure to Register these Students"))
    {
      if(this.formModel.departmentId)
      {
          this.showMessage=false;
          this.isSending=true;
        this.httpService.sendEmailToRegisterStudents(this.formModel.departmentId).subscribe(data=>{
          this.showMessage=true;       
         this.responseMessage=data;    
         this.isSending=false; 
  
        },error=>{ })
      }
      
    }
   
  }
}
