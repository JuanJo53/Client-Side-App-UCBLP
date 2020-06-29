import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import apiKey from '../apiKey';
import { Pregunta } from 'src/app/models/Teacher/CreatePractice/Pregunta';

@Injectable({
  providedIn: 'root'
})
export class PracticesService {

  constructor(private http:HttpClient) { }


  //Servicios para el control de los estudiantes

  //APIRoute Obtener lista de los estudiantes para la tabla principal
  addPractica(Practica):Observable<any>{
    return this.http.post(apiKey.api+"/teacher/practice",Practica,{ observe: 'response' });
  }
  addPracticaPreguntas(PracticaPregunta:Pregunta[],idPractica):Observable<any>{
    return this.http.post(apiKey.api+"/teacher/practice/questions",
    {idPractica:idPractica,
      preguntas:PracticaPregunta},{ observe: 'response' });
  }
  getPractica(idLeccion):Observable<any>{
    return this.http.get(apiKey.api+"/teacher/practice/"+idLeccion,{ observe: 'response' });
  }
}
