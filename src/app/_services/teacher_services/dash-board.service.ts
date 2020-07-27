import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import apiKey from '../apiKey';

@Injectable({
  providedIn: 'root'
})
export class DashBoardService {

  constructor(private http:HttpClient) { }
  getPractices(idCurso):Observable<any>{
    return this.http.get(apiKey.api+"/teacher/dash-board/practices/"+idCurso,{ observe: 'response' });
  }
}
