import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import apiKey from '../apiKey';
import { Module } from 'src/app/models/Teacher/Evaluation/Module';
import { ContentModule } from 'src/app/models/Teacher/Modules/ContentModule';

@Injectable({
  providedIn: 'root'
})
export class ContenidoModuloService {

  constructor(private http:HttpClient) { }
  getContenidoModulos(idModulo,idCurso):Observable<any>{
    return this.http.post(apiKey.api+"/teacher/cutson/module/content/get",{idModulo,idCurso},{ observe: 'response' });
  }
  addContenidoModulos(contenidoModulo:ContentModule):Observable<any>{
    return this.http.post(apiKey.api+"/teacher/cutson/module/content",contenidoModulo,{ observe: 'response' });
  }
  updateContenidoModulos(contenidoModulo:ContentModule):Observable<any>{
    return this.http.put(apiKey.api+"/teacher/cutson/module/content",contenidoModulo,{ observe: 'response' });

  }
  deleteContenidoModulos(id:number):Observable<any>{
    return this.http.delete(apiKey.api+"/teacher/cutson/module/content/"+id,{ observe: 'response' });
  }
  updateRubricasContenidoModulos(rubricas:any[]):Observable<any>{
    return this.http.post(apiKey.api+"/teacher/cutson/module/content/rubric",rubricas,{ observe: 'response' });

  }
}
