import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import apiKey from '../apiKey';
import { Module } from 'src/app/models/Teacher/Evaluation/Module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor(private http:HttpClient) { }
  getModules(idCurso):Observable<any>{
    return this.http.get(apiKey.api+"/teacher/evaluation/"+idCurso,{ observe: 'response' });
  }
  addModule(module:Module):Observable<any>{
    return this.http.post(apiKey.api+"/teacher/evaluation/",module,{ observe: 'response' });

  }
  getColors():Observable<any>{
    return this.http.get(apiKey.api+"/teacher/evaluation/get/color",{ observe: 'response' });
  }
  updateModulePers(module:Module):Observable<any>{
    return this.http.put(apiKey.api+"/teacher/evaluation/personalized/",module,{ observe: 'response' });
  }
  updateModulePred(module:Module):Observable<any>{
    return this.http.put(apiKey.api+"/teacher/evaluation/predeterminated/",module,{ observe: 'response' });
  }
  deleteModule(idModulo):Observable<any>{
    return this.http.delete(apiKey.api+"/teacher/evaluation/delete/"+idModulo,{ observe: 'response' });
  }
  updateRubricas(rubricas:any[]):Observable<any>{
    return this.http.post(apiKey.api+"/teacher/evaluation/rubric",{rubricas},{ observe: 'response' });
  }
}
