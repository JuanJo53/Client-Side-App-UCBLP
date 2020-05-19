import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeacherLogin } from '../../models/TeacherLogin';
import apiKey from '../apiKey'
@Injectable({
  providedIn:'root'
})
//esta clase sirve para poder conectar al servidor con el cliente con el login
export class AuthService {
  constructor(private http:HttpClient){}
    loginDocente(teacher:TeacherLogin):Observable<any>{
      console.log(teacher);
      return this.http.post(apiKey.api+'/users/login',teacher
      );
  }
}
