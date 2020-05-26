import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import apiKey from '../apiKey'
import { ActivatedRouteSnapshot } from '@angular/router';
import { AddStudent } from 'src/app/models/Teacher/MyClass/AddStudent';

@Injectable({
  providedIn: 'root'
})
export class MyClassService {

  constructor(private http:HttpClient) { }
  getStudentsGeneral(idCurso):Observable<any>{
    return this.http.get(apiKey.api+"/teacher/my-class/students/"+idCurso);
  }
  removeStudentsGeneral(idAlumnoCurso):Observable<any>{
    return this.http.delete(apiKey.api+"/teacher/my-class/students/"+idAlumnoCurso);
  }
  addStudents(AddEst:AddStudent):Observable<any>{
    return this.http.post(apiKey.api+"/teacher/my-class/students/add-student",AddEst,{ observe: 'response' });
  }
  
  getProfileStudent(email):Observable<any>{
    return this.http.post(apiKey.api+"/teacher/my-class/students/profile",{correoAlumno:email},{ observe: 'response' });
  }
}
