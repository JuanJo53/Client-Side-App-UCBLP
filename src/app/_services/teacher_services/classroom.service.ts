import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import apiKey from '../apiKey'
import { CardClassroom } from 'src/app/models/Teacher/ClassRoom/CardClassroom';
@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  constructor(private http:HttpClient) {}
  getClassRoomInformation():Observable<any>{
    return this.http.get(apiKey.api+"/teacher/class-room");
  }
  getSemester():Observable<any>{
    return this.http.get(apiKey.api+"/teacher/class-room/semester");
  }
  getLevel():Observable<any>{
    return this.http.get(apiKey.api+"/teacher/class-room/level");
  }
  addCourse(course:CardClassroom):Observable<any>{
    return this.http.post(apiKey.api+"/teacher/class-room/",course);
  }
}
