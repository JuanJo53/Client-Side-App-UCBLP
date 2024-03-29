import { Component, OnInit, ViewChild } from "@angular/core";
import { Teacher } from "src/app/models/Teacher/Teacher";
import { AuthService } from "src/app/_services/general_services/auth.service";
import { UserService } from "src/app/_services/general_services/user.service";
import { TokenStorageService } from "src/app/_services/general_services/token-storage.service";
import { Router, ActivatedRoute } from "@angular/router";
import { CardClassroom } from "src/app/models/Teacher/ClassRoom/CardClassroom";
import { CardClassroomComponent } from "src/app/shared/components/cards/card-classroom/card-classroom.component";
import { ClassroomDocenteResolver } from "src/app/_resolvers/docente/classRoom/classroom-info-docente.resolver";
import { MatDialog } from '@angular/material/dialog';
import { CreateCourseComponent } from "../dialogs/courses/create-course/create-course.component";
import { Semester } from 'src/app/models/Teacher/ClassRoom/Semester';
import { Level } from 'src/app/models/Teacher/ClassRoom/Level';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';
import { LoadingService } from 'src/app/_services/loading.service';
@Component({
  selector: "app-choosing-classroom",
  templateUrl: "./choosing-classroom.component.html",
  styleUrls: ["./choosing-classroom.component.scss"],
})
export class ChoosingClassroomComponent implements OnInit {
  
  @ViewChild('loading') public loading: LoadingComponent;
  //-----variables-----
  semestres:Semester[]=[];
  niveles:Level[]=[];
  classroomCards: CardClassroom[] = [];
  userDocente: Teacher = {
    nombreDocente: "",
    apellidoDocente: "",
    correoDocente: "",
    primaLetra: "",
  };
  numeroCards: number;
  mylogo: string = "assets/logo.png";
  materia = "English 1";
  diasMateria = "Mon - Tue - Wed - Thu";
  horarioMateria = "7:30 - 9:00";
  totalEstudiantes = 25;
  semestre = "1/2020";
  //-----#variables-----
  //-----funciones-----

  //-----#funciones-----
  constructor(
    private usService: ActivatedRoute,
    private tokenServ: TokenStorageService,
    private router: Router,
    public dialog: MatDialog,
    private route: ActivatedRoute,    
    private servLoading:LoadingService
  ) {}
  obtenerSemestre(id){
    for(let semestre of this.semestres){
      if(id==semestre.idSemestre){
        return semestre.semestre;
      }
    }
  }
  agregarCards(datos) {
    for (let i in datos) {
      console.log(datos[i]);
      var dias: string = "";
      var horarioini: Array<String> = [];
      var horariofin: Array<String> = [];
      var horario: string = "";
      for (let j in datos[i].dias) {
        var datadi = datos[i].dias[j];
        if (dias === "") {
          dias += datadi.diaSemana;
        } else {
          dias += " - " + datadi.diaSemana;
        }
        if (
          !horarioini.includes(datadi.horaInicio) &&
          !horariofin.includes(datadi.horaConclusion)
        ) {
          horarioini.push(datadi.horaInicio);
          horariofin.push(datadi.horaConclusion);
          if (horario === "") {
            horario +=
              datadi.horaInicio.substring(0, 5) +
              " - " +
              datadi.horaConclusion.substring(0, 5);
          } else {
            horario +=
              " | " +
              datadi.horaInicio.substring(0, 5) +
              " - " +
              datadi.horaConclusion.substring(0, 5);
          }
        }
      }
      let auxCard = new CardClassroom();
      auxCard.id_curso = datos[i].id_curso;
      auxCard.curso = datos[i].nombre_curso;
      auxCard.diasCurso = dias;
      auxCard.horarioCurso = horario;
      auxCard.idSemestre = datos[i].id_semestre;
      auxCard.totalEstudiantes = datos[i].estudiantes;
      this.classroomCards.push(auxCard);
    }
    this.numeroCards = this.classroomCards.length;
  }
  agregarPerfil(data){
    this.userDocente.correoDocente = data.profile.correo_docente;
          this.userDocente.nombreDocente = data.profile.nombre_docente;
          this.userDocente.apellidoDocente =
            data.profile.ap_pat_docente + " " + data.profile.ap_mat_docente;
          this.userDocente.primaLetra = data.profile.nombre_docente.substring(
            0,
            1
          );
  }
  agregarSemestres(listaSemestres){
    for(let semestre of listaSemestres){
      let newSemestre=new Semester();
      newSemestre.idSemestre=semestre.id_semestre;
      newSemestre.semestre=semestre.semestre;
      this.semestres.push(newSemestre);
    }
  }
  agregarNiveles(listaNiveles){
    for(let nivel of listaNiveles){
      let newNivel=new Level();
      newNivel.idNivel=nivel.id_nivel;
      newNivel.nivel=nivel.nivel;
      this.niveles.push(newNivel);
    }
  }
  ngOnInit() {
    console.log("size : " + this.numeroCards);
    if (this.tokenServ.getToken() === "undefined") {
      this.router.navigate(["/"]);
      return false;
    } else {
      this.usService.data.subscribe({
        next: (data) => {
          this.agregarCards(data.classroom);
          console.log(data);
          this.agregarPerfil(data);
          this.agregarSemestres(data.semester);
          this.agregarNiveles(data.level);
        },
        error: (err) => {
          this.router.navigate(["/"]);
        },
      });
    }
  }
  signout(): void {
    this.tokenServ.signOut();
    this.router.navigate(["/"]);
  }
  cardClicked(idCurso: string) {
    this.servLoading.setLoading(this.loading);
    this.servLoading.activar();
    const nav=this.router.navigate(["teacher", idCurso, "dashboard"]);
    nav.then((data)=>{
      this.servLoading.desactivar();
    })
  }
  agregarCurso() {
    console.log("agregar curso");
    const dialogRef = this.dialog.open(CreateCourseComponent, { width: "400px"
    ,data:{
      semestres:this.semestres,
      niveles:this.niveles
    }  
  });
  dialogRef.afterClosed().subscribe((result)=>{
    if(result!==""&&result!=="undefined"&&result!=null){
      this.classroomCards.push(result);
    }
  })
  }
}
