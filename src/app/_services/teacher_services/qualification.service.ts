import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import apiKey from '../apiKey';

@Injectable({
  providedIn: 'root'
})
export class QualificationService {

  constructor(private http:HttpClient) { }
  getQualifications(idCurso):Observable<any>{
    return this.http.get(apiKey.api+"/student/qualification/"+idCurso,{ observe: 'response' });
  }
}
