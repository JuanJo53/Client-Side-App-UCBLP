import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API='http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  constructor(private http:HttpClient) { }
  getProfileDocente():Observable<any>{
    return this.http.get(API+'/users/profile');
  }

}
