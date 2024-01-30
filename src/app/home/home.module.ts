import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { SharedModule } from '../shared/shared.module';
import { IndexComponent } from './index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
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



@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    CourseDetailsComponent,
    IndexComponent,
    LoginComponent,
    NewadmissionComponent,
    RegisterstudentsComponent,
    TeachersComponent,
   
    AddcourseComponent,
         ClassroomComponent,
         AddUserComponent,
         AllocateroomComponent,
         StudentdashboardComponent,
         AddattendanceComponent,
         AddGradeComponent,
         UpgradStudentsComponent,
         AllstudentsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule,
    CommonModule
  ]
})
export class HomeModule { }
