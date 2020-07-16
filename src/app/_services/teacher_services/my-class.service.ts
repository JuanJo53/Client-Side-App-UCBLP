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


  //Servicios para el control de los estudiantes

  //APIRoute Obtener lista de los estudiantes para la tabla principal
  getStudentsGeneral(idCurso):Observable<any>{
    return this.http.get(apiKey.api+"/teacher/my-class/students/"+idCurso);
  }
  //APIRoute Eliminar a un estudiante
  removeStudentsGeneral(idAlumnoCurso):Observable<any>{
    return this.http.delete(apiKey.api+"/teacher/my-class/students/"+idAlumnoCurso);
  }
  //APIRoute anadir un estudiante
  addStudents(AddEst:AddStudent):Observable<any>{
    return this.http.post(apiKey.api+"/teacher/my-class/students/add-student",AddEst,{ observe: 'response' });
  }
  //APIRoute Obtener el perfil de un estudiante mediante su email
  getProfileStudent(email):Observable<any>{
    return this.http.post(apiKey.api+"/teacher/my-class/students/profile",{correoAlumno:email},{ observe: 'response' });
  }
  //Servicios para la Asistencia
  getFechasAsistencia(idCurso):Observable<any>{
    return this.http.get(apiKey.api+"/teacher/my-class/assistance-dates/"+idCurso,{ observe: 'response' });
  }
  getAlumnossAsistencia(idCurso,fecha):Observable<any>{
    return this.http.post(apiKey.api+"/teacher/my-class/list-assistance/",{id:idCurso,fechaClase:fecha},{ observe: 'response' });
  }
  crearClase(idCurso):Observable<any>{
    return this.http.post(apiKey.api+"/teacher/my-class/add-class-assistance",{idCurso},{ observe: 'response' });
  }
  getProfile(idCurso:number,idAlumnoCurso:number):Observable<any>{
    return this.http.post(apiKey.api+"/student/profile",{idCurso:idCurso,idAlumnoCurso:idAlumnoCurso},{ observe: 'response' });
  }


}
