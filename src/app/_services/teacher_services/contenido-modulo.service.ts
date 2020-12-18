import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import apiKey from '../apiKey';
import { Module } from 'src/app/models/Teacher/Evaluation/Module';
import { ContentModule } from 'src/app/models/Teacher/Modules/ContentModule';
import { NotasContenidoModulo } from 'src/app/models/Teacher/Modules/NotasContenidoModulo';

@Injectable({
  providedIn: 'root'
})
export class ContenidoModuloService {

  constructor(private http:HttpClient) { }
  getContenidoModulos(idModulo,idCurso):Observable<any>{
    return this.http.get(apiKey.api+"/teacher/cutson/module/content/"+idModulo,{ observe: 'response' });
  }
  addContenidoModulos(contenidoModulo:ContentModule):Observable<any>{
    return this.http.post(apiKey.api+"/teacher/cutson/module/content",contenidoModulo,{ observe: 'response' });
  }
  updateContenidoModulos(contenidoModulo:ContentModule):Observable<any>{
    return this.http.put(apiKey.api+"/teacher/cutson/module/content",contenidoModulo,{ observe: 'response' });

  }
  deleteContenidoModulos(id:number,idModulo):Observable<any>{
    return this.http.post(apiKey.api+"/teacher/cutson/module/deleteContent/"+id,{idModulo:idModulo},{ observe: 'response' });
  }
  updateRubricasContenidoModulos(rubricas:any[],idModulo):Observable<any>{
    return this.http.post(apiKey.api+"/teacher/cutson/module/content/rubric",{rubricas:rubricas,idModulo:idModulo},{ observe: 'response' });

  }
  getNotasContenidoModulos(idContenidoModulo):Observable<any>{
    return this.http.get(apiKey.api+"/teacher/cutson/module/content/score/get/"+idContenidoModulo,{ observe: 'response' });
  }
  updateNotaContenidoModulos(notaContenido:NotasContenidoModulo):Observable<any>{
    return this.http.put(apiKey.api+"/teacher/cutson/module/content/score",{notaContenido},{ observe: 'response' });
  }
}
