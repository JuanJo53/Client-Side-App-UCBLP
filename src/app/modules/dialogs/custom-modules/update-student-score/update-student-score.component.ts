import { Component, OnInit, Inject } from "@angular/core";
import { NotasContenidoModulo } from 'src/app/models/Teacher/Modules/NotasContenidoModulo';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContenidoModuloService } from 'src/app/_services/teacher_services/contenido-modulo.service';

@Component({
  selector: "app-update-student-score",
  templateUrl: "./update-student-score.component.html",
  styleUrls: ["./update-student-score.component.scss"],
})
export class UpdateStudentScoreComponent implements OnInit {
  estudiante:NotasContenidoModulo=new NotasContenidoModulo();
  nombreEstudiante: string = "Ariel Colque Herrera";
  disableTextbox = true;
  score: number = 100;
  constructor(
    @Inject(MAT_DIALOG_DATA) public dataDialog: any,
    private dialogRef: MatDialogRef<UpdateStudentScoreComponent>,
    private serv:ContenidoModuloService
  ) {}
  cargarEstudiante(){
    var estudianteR =this.dataDialog["notasContenido"] as NotasContenidoModulo;
    this.estudiante.id=estudianteR.id;
    this.estudiante.m_nombre=estudianteR.m_nombre;
    this.estudiante.nombre=estudianteR.nombre;
    this.estudiante.p_nombre=estudianteR.p_nombre;
    this.estudiante.posicion=estudianteR.posicion;
    this.estudiante.puntuacion=estudianteR.puntuacion;

  }
  ngOnInit(): void {
    this.cargarEstudiante();
  }
  toggleDisable() {
    this.disableTextbox = !this.disableTextbox;
  }
  verificarCampos(){
    
    var ver=true;
    if(this.estudiante.puntuacion==null||this.estudiante.puntuacion===""){
      ver =false;
    }
    return ver;
  }
  cargarDatosNuevos(){
    var estudianteR =this.dataDialog["notasContenido"] as NotasContenidoModulo;
    estudianteR.id=this.estudiante.id;
    estudianteR.m_nombre=this.estudiante.m_nombre;
    estudianteR.nombre=this.estudiante.nombre;
    estudianteR.p_nombre=this.estudiante.p_nombre;
    estudianteR.posicion=this.estudiante.posicion;
    estudianteR.puntuacion=this.estudiante.puntuacion;

  }
  aceptar() {
    if(this.verificarCampos()){        
      this.serv.updateNotaContenidoModulos(this.estudiante).subscribe({
        next:(data)=>{
          if(data.status==200){
            this.cargarDatosNuevos();
            this.dialogRef.close();
          }
        },
        error:(err)=>{
          if(err.status==401){
            this.dialogRef.close();

          }
        }
      })
    }
  }
  cancelar(){
    this.dialogRef.close();
  }
}
