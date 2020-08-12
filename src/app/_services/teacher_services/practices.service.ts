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
  addPractica(Practica,Preguntas):Observable<any>{
    return this.http.post(apiKey.api+"/teacher/practice",{practica:Practica,preguntas:Preguntas},{ observe: 'response' });
  }
  addPracticaPreguntas(PracticaPregunta:Pregunta[],idPractica):Observable<any>{
    
    return this.http.post(apiKey.api+"/teacher/practice/questionsSQL",
    {idPractica:idPractica,
      preguntas:PracticaPregunta},{ observe: 'response' });
      

      // Preguntas con Firebase
    // return this.http.post(apiKey.api+"/teacher/practice/questions",
    // {idPractica:idPractica,
    //   preguntas:PracticaPregunta},{ observe: 'response' });
  }
  getPractica(idLeccion):Observable<any>{
    return this.http.get(apiKey.api+"/teacher/practice/"+idLeccion,{ observe: 'response' });
  }
  getQuestions():Observable<any>{
    return this.http.get(apiKey.api+"/teacher/questionSQL",{ observe: 'response' });
    // return this.http.get(apiKey.api+"/teacher/question",{ observe: 'response' });
  }
  getScores(idPractica):Observable<any>{
    return this.http.get(apiKey.api+"/teacher/practice/scores/"+idPractica,{ observe: 'response' });
  }
}
