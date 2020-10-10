import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { Pregunta } from "src/app/models/Teacher/CreatePractice/Pregunta";
import { TokenStorageService } from 'src/app/_services/general_services/token-storage.service';
@Component({
  selector: "app-detail-individual",
  templateUrl: "./detail-individual.component.html",
  styleUrls: ["./detail-individual.component.scss"],
})
export class DetailIndividualComponent implements OnInit {
  preguntas: Pregunta[] = [
  ];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tokenServ: TokenStorageService
  ) {}
  cargarRespuestas(data){
    for(let preg of data){
      let newP=new Pregunta();
      newP.idTipoPregunta=String(preg.id_tipo_pregunta);
      newP.idTipoRespuesta=String(preg.id_tipo_respuesta);
      newP.respuestaAl=preg.alumno_respuesta;
      if(newP.idTipoRespuesta==="2"){
        newP.respuestasBool=[];
        for(let i in preg.opciones){
          newP.respuestasBool.push(false);
        }
        for(let resp of newP.respuestaAl){
          newP.respuestasBool[resp]=true;
        }
        console.log(newP.respuestasBool);
      }
      if(newP.idTipoRespuesta==="4"){
        var fillIndice=[];
        var i=0;
        for(let resp of preg.respuesta){
          if(resp==="*"){
            fillIndice.push(i);
            i++;
          }
          else{
            fillIndice.push(-1);
          }          
        }
        newP.respuestasBool=fillIndice;
      } 
      newP.respuesta=preg.respuesta;
      newP.puntuacion=preg.puntaje;
      newP.pregunta=preg.pregunta;
      newP.opciones=preg.opciones;
      this.preguntas.push(newP);
    }
  }
  ngOnInit(): void {
    this.route.data.subscribe({
      next:(data)=>{
        console.log(data);
        this.cargarRespuestas(data.practica.body);
        console.log(data);
      },
      error:(err)=>{

      }
    })
  }
}
