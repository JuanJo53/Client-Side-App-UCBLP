import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import apiKey from '../apiKey'

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  constructor(private http:HttpClient) { }
  getProfileDocente():Observable<any>{
    return this.http.get(apiKey.api+'/users/profile');
  }

}
