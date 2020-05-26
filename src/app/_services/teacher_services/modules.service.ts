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
  getThemes(idCurso):Observable<any>{
    return this.http.get(apiKey.api+"/teacher/modules/themes/"+idCurso);
  }
  addTheme(addT:Theme):Observable<any>{
    return this.http.post(apiKey.api+"/teacher/themes",addT);
  }

}
