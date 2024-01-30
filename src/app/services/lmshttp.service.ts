import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Correct import statement
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class LmshttpService {
  serverUrl: any = 'http://localhost:5170/api/';
  constructor(private http: HttpClient) {}

  Login(details: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(this.serverUrl + 'Account/LoginUser', details, {
      headers: headers,
    });
  }
  //Pos Register Student
  Register(details: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(this.serverUrl + 'Account/RegisterUser', details, {
      headers: headers,
    });
  }
  //Get Active Session
  getActiveSession(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get(this.serverUrl + 'Account/GetActiveSession', {
      headers: headers,
    });
  }
  //Get Active Session
  GetDepartmetns(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get(this.serverUrl + 'Account/GetAllDepartments', {
      headers: headers,
    });
  }
  //Get Admissions
  GetNewRegisterUser(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get(this.serverUrl + 'Admin/GetNewRegisterUser', {
      headers: headers,
    });
  }
  ActivateUser(id: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get(this.serverUrl + 'Admin/ActivateUser/' + id, {
      headers: headers,
    });
  }
  DeActiveUser(id: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get(this.serverUrl + 'Admin/DeActiveUser/' + id, {
      headers: headers,
    });
  }
  //get Register Users
  getRegisterStudent(DeparmentId:any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get(this.serverUrl + 'Admin/GetRegisterStudent?DeparmentId='+DeparmentId, {
      headers: headers,
    });
  }
  GetAllStudent(DeparmentId:any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get(this.serverUrl + 'Admin/GetAllStudent?DeparmentId='+DeparmentId, {
      headers: headers,
    });
  }
  
  //Send email to users
  sendEmailToRegisterStudents(DeparmentId:any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get(this.serverUrl + 'Admin/SendEmailToRegisterStudents?DeparmentId='+DeparmentId, {
      headers: headers,
    });
  }
  getAllTeachers(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get(this.serverUrl + 'Admin/GetAllTeachers', {
      headers: headers,
    });
  }
  SaveTeacher(details: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(this.serverUrl + 'Admin/SaveTeacher',details, {
      headers: headers,
    });
  }
  GetAllCourse(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get(this.serverUrl + 'Admin/GetAllCourse', {
      headers: headers,
    });
  }
  SaveCourse(details: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(this.serverUrl + 'Admin/SaveCourse',details, {
      headers: headers,
    });
  }
  GetAllClassRoom(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get(this.serverUrl + 'Admin/GetAllClassRoom', {
      headers: headers,
    });
    
  }
  SaveClassRoom(details: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(this.serverUrl + 'Admin/SaveClassRoom',details, {
      headers: headers,
    });
  }
  DeleteClassRoom(id:any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get(this.serverUrl + 'Admin/DeleteClassRoom/'+id, {
      headers: headers,
    });
  }
  getAdminAndTeacher(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get(this.serverUrl + 'Account/GetAdminAndTeacher', {
      headers: headers,
    });
  }
  
  RoomAndTeacherAllocation(details: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(this.serverUrl + 'Admin/RoomAndTeacherAllocation',details, {
      headers: headers,
    });
  }
  GetRoomAndTeacherAllocation(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get(this.serverUrl + 'Admin/GetRoomAndTeacherAllocation', {
      headers: headers,
    });
  }
  DeleteRoomAndTeacherAllocation(id:any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get(this.serverUrl + 'Admin/DeleteRoomAndTeacherAllocation/'+id, {
      headers: headers,
    });
  }
  GetStudentCurrentCourse(Id:any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get(this.serverUrl + 'Student/GetStudentCurrentCourse?LoginId='+Id, {
      headers: headers,
    });
    
  }
  GetStudentGrads(Id:any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get(this.serverUrl + 'Student/GetStudentGrads?LoginId='+Id, {
      headers: headers,
    });
    
  }
  GetStudentAttendance(Id:any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get(this.serverUrl + 'Student/GetStudentAttendance?LoginId='+Id, {
      headers: headers,
    });
    
  }
  GetStudentsAttendance(Courseid:any,DeparmentId:any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get(this.serverUrl + 'Teacher/GetStudentsAttendance?CourseId='+Courseid+"&DeparmentId="+DeparmentId, {
      headers: headers,
    });
  }
  GetStudentsGrade(Courseid:any,DeparmentId:any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get(this.serverUrl + 'Teacher/GetStudentsGrade?CourseId='+Courseid+"&DeparmentId="+DeparmentId, {
      headers: headers,
    });
  }
  
  SaveStudentAttandence(details: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(this.serverUrl + 'Teacher/SaveStudentAttandence',details, {
      headers: headers,
    });
  }
  SaveStudentGrades(details: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(this.serverUrl + 'Teacher/SaveStudentGrades',details, {
      headers: headers,
    });
  }
  
  GetStudentToBeUpgrade(Courseid:any,DeparmentId:any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get(this.serverUrl + 'Teacher/GetStudentToBeUpgrade?CourseId='+Courseid+"&DeparmentId="+DeparmentId, {
      headers: headers,
    });
  }
  UpgradStudentToNextCourse(details: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(this.serverUrl + 'Teacher/UpgradStudentToNextCourse',details, {
      headers: headers,
    });
  }
  
}
