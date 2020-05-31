import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import apiKey from '../apiKey'
import { Theme } from 'src/app/models/Teacher/Modules/Theme';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  constructor(private http:HttpClient) { }

  //CRUD temas
  getThemes(idCurso):Observable<any>{
    return this.http.get(apiKey.api+"/teacher/modules/themes/"+idCurso,{ observe: 'response' });
  }
  addTheme(addT:Theme):Observable<any>{
    return this.http.post(apiKey.api+"/teacher/modules/themes",addT,{ observe: 'response' });
  }
  getImagesThemes():Observable<any>{
    return this.http.get(apiKey.api+"/teacher/images/get",{ observe: 'response' });
  }
  delThemes(idTema):Observable<any>{
    return this.http.delete(apiKey.api+"/teacher/modules/themes/"+idTema,{ observe: 'response' });
  }
  updateThemes(updTh:Theme):Observable<any>{
    return this.http.put(apiKey.api+"/teacher/modules/themes/",updTh,{ observe: 'response' });
  }




  //CRUD Lecciones
  getLessons(idTema):Observable<any>{
    return this.http.get(apiKey.api+"/teacher/modules/themes/lessons/"+idTema,{ observe: 'response' });
  }

}
