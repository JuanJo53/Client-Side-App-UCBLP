import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import apiKey from '../apiKey';
import { Forum } from 'src/app/models/Teacher/Forums/Forum';

@Injectable({
  providedIn: 'root'
})
export class ForumsService {

  constructor(private http:HttpClient) { }
  getForums(idCurso):Observable<any>{
    return this.http.get(apiKey.api+"/teacher/forums/"+idCurso,{ observe: 'response' });
  }
  addForum(forum:Forum):Observable<any>{
    return this.http.post(apiKey.api+"/teacher/forums",forum,{ observe: 'response' });

  }
  updateForum(forum:Forum):Observable<any>{
    return this.http.put(apiKey.api+"/teacher/forums/",forum,{ observe: 'response' });
  }
  deleteForum(idForo):Observable<any>{
    return this.http.delete(apiKey.api+"/teacher/forums/"+idForo,{ observe: 'response' });
  }
}
