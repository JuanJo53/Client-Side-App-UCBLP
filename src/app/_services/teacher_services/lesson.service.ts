import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import apiKey from '../apiKey';
import { Lesson } from 'src/app/models/Teacher/Modules/Lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private http:HttpClient) { }
  //CRUD Lecciones
  getLessons(idTema):Observable<any>{
    return this.http.get(apiKey.api+"/teacher/modules/themes/lessons/"+idTema,{ observe: 'response' });
  }
  delLesson(idLes):Observable<any>{
    return this.http.delete(apiKey.api+"/teacher/modules/themes/lessons/"+idLes,{ observe: 'response' })
  }
  updateLesson(lesson:Lesson):Observable<any>{
    return this.http.put(apiKey.api+"/teacher/modules/themes/lessons/",lesson,{ observe: 'response' });
  }
  getTypeLesson():Observable<any>{
    return this.http.get(apiKey.api+'/teacher/modules/themes/lessons/get/tipo',{observe:'response'})
  }
  addLesson(lesson:Lesson):Observable<any>{
    return this.http.post(apiKey.api+"/teacher/modules/themes/lessons/",lesson,{observe:'response'});
  }
}
