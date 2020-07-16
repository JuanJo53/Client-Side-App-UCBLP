import { Component, OnInit, Inject } from "@angular/core";
import { Semester } from 'src/app/models/Teacher/ClassRoom/Semester';
import { Level } from 'src/app/models/Teacher/ClassRoom/Level';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EvaluationService } from 'src/app/_services/teacher_services/evaluation.service';
import { ClassroomService } from 'src/app/_services/teacher_services/classroom.service';
import { CardClassroom } from 'src/app/models/Teacher/ClassRoom/CardClassroom';
import { Schedule } from 'src/app/models/Teacher/ClassRoom/Schedule';
export class HorarioClase {
  dia: string;
  horaComienzo: string;
  horaFinaliza: string;
}
@Component({
  selector: "app-create-course",
  templateUrl: "./create-course.component.html",
  styleUrls: ["./create-course.component.scss"],
})
export class CreateCourseComponent implements OnInit {
  semestres:Semester[]=[];
  niveles:Level[]=[];
  semestreSelec:number=0;
  nivelSelec:number=0;
  nombreClassroom: string;
  valueQuantity: number;
  cantidadEstudiantes: number[] = [1, 2, 3];
  diasSemana: any[] = [
    {id:1,dia:"Monday"},
    {id:2,dia:"Tuesday"},
    {id:3,dia:"Wednesday"},
    {id:4,dia:"Thursday"},
    {id:5,dia:"Friday"},
    {id:6,dia:"Saturday"},
  ];
  valueDiaSemana: string;
  fechaStart: string;
  fechaEnd: string;
  horarioClase: Schedule[] = [
  ];

  constructor(    
    @Inject(MAT_DIALOG_DATA)
    public dataDialog: any,
    private servCou: ClassroomService,
    private dialogRef: MatDialogRef<CreateCourseComponent>
  ) {
    this.semestres=dataDialog["semestres"];
    this.semestreSelec=this.semestres[0].idSemestre;
    this.niveles=dataDialog["niveles"];
    this.nivelSelec=this.niveles[0].idNivel;
  }
  agregarDias(data:Schedule[],curso:CardClassroom){
    var dias: string = "";
      var horarioini: Array<String> = [];
      var horariofin: Array<String> = [];
      var horario: string = "";
      for (let j in data) {
        var datadi = data[j];
        if (dias === "") {
          dias += datadi.dia;
        } else {
          dias += " - " + datadi.dia
        }
        if (
          !horarioini.includes(datadi.horaInicio) &&
          !horariofin.includes(datadi.horaFin)
        ) {
          horarioini.push(datadi.horaInicio);
          horariofin.push(datadi.horaFin);
          if (horario === "") {
            horario +=
              datadi.horaInicio.substring(0, 5) +
              " - " +
              datadi.horaFin.substring(0, 5);
          } else {
            horario +=
              " | " +
              datadi.horaInicio.substring(0, 5) +
              " - " +
              datadi.horaFin.substring(0, 5);
          }
        }
      }
      curso.diasCurso=dias;
      curso.horarioCurso=horario;
  }
  ngOnInit(): void {}
  guardarCurso() {
    let newCourse=new CardClassroom();
    newCourse.curso=this.nombreClassroom;
    newCourse.idSemestre=this.semestreSelec;
    newCourse.idNivel=this.nivelSelec;
    
    newCourse.dias=this.horarioClase;
    this.agregarDias(newCourse.dias,newCourse);
    this.servCou.addCourse(newCourse).subscribe({
      next:(data)=>{
        if(data.status==200){
          this.dialogRef.close(newCourse);
        }
        else{
          console.log("error");
          this.dialogRef.close()
        }
      },
      error:(err)=>{
        console.log("error");
        this.dialogRef.close();

      }
    })
  }
  eliminarHorario(index) {
    console.log("eliminar");
    this.horarioClase.splice(index, 1);
  }
  agregarHorario() {
    var aux: Schedule = {
      idCursoDia:1,
      dia: 1,
      horaInicio: "",
      horaFin: "",
    };
    console.log("agregar");
    this.horarioClase.push(aux);
  }
}
