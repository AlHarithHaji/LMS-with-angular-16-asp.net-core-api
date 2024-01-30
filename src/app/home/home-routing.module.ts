import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { NewadmissionComponent } from './newadmission/newadmission.component';
import { RegisterstudentsComponent } from './registerstudents/registerstudents.component';
import { TeachersComponent } from './teachers/teachers.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AllocateroomComponent } from './allocateroom/allocateroom.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { AddattendanceComponent } from './addattendance/addattendance.component';
import { AddGradeComponent } from './add-grade/add-grade.component';
import { UpgradStudentsComponent } from './upgrad-students/upgrad-students.component';
import { AllstudentsComponent } from './allstudents/allstudents.component';

const routes: Routes = [
  {
    path:"",
    component:IndexComponent

  },
  {
    path:"About",
    component:AboutComponent

  },
  {
    path:"Contact",
    component:ContactComponent

  },
  {
    path:"Course_Details",
    component:CourseDetailsComponent

  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"index",
    component:IndexComponent
  }
  ,
  {
    path:"Newadmission",
    component:NewadmissionComponent
  }
  ,
  {
    path:"Registerstudents",
    component:RegisterstudentsComponent
  }
  ,
  {
    path:"Teachers",
    component:TeachersComponent
  }
  ,
  {
    path:"addcourse",
    component:AddcourseComponent
  }
  ,
  {
    path:"classroom",
    component:ClassroomComponent
  }
  ,
  {
    path:"add-user",
    component:AddUserComponent
  }
  ,
  {
    path:"Allocateroom",
    component:AllocateroomComponent
  },
  {
    path:"studentdashboard/:id",
    component:StudentdashboardComponent
  },
  
  {
    path:"Addattendance",
    component:AddattendanceComponent
  },
  {
    path:"add-grade",
    component:AddGradeComponent
  },
  {
    path:"upgrad-students",
    component:UpgradStudentsComponent
  }
  ,
  {
    path:"allstudents",
    component:AllstudentsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
