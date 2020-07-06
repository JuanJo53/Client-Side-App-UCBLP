import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import apiKey from '../apiKey'
import { Theme } from 'src/app/models/Teacher/Modules/Theme';
import { ResourceSection } from 'src/app/models/resources/resourceSection';
import { ResourceContent } from 'src/app/models/resources/resourceContent';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  constructor(private http:HttpClient) { }

  //CRUD temas
  getSections(idCurso):Observable<any>{
    return this.http.get(apiKey.api+"/teacher/seccion/"+idCurso,{ observe: 'response' });
  }
  addSection(nombreSec:string,idCurso:number):Observable<any>{
    return this.http.post(apiKey.api+"/teacher/seccion/",{nombre:nombreSec,id:idCurso},{ observe: 'response' });
  }
  updateSection(nombreSec:string,id:number):Observable<any>{
    return this.http.put(apiKey.api+"/teacher/seccion/",{nombre:nombreSec,id:id},{ observe: 'response' });
  }
  delSection(id:any):Observable<any>{
    return this.http.delete(apiKey.api+"/teacher/seccion/"+id,{ observe: 'response' });
  }
  addResource(resource:ResourceContent,idSeccion:number){
    return this.http.post(apiKey.api+"/teacher/seccion/resource",{resource:resource,id:idSeccion},{ observe: 'response' });
  }
  downloadResource(route):Observable<any>{
    return this.http.post(apiKey.api+"/teacher/resource/file",{file:route},{ observe: 'response' });
  }
  delResource(idResource:number):Observable<any>{
    return this.http.delete(apiKey.api+"/teacher/seccion/resource/"+idResource,{ observe: 'response' });
  }
  updateResource(resource:ResourceContent):Observable<any>{
    return this.http.put(apiKey.api+"/teacher/seccion/resource",{resource:resource},{ observe: 'response' });
  } 

}
