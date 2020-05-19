import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import apiKey from '../apiKey'
@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  constructor(private http:HttpClient) {}
  getClassRoomInformation():Observable<any>{
    return this.http.get(apiKey.api+"/teacher/class-room");
  }
}
