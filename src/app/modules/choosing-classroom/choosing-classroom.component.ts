import { Component, OnInit } from "@angular/core";
import { Teacher } from "src/app/models/Teacher";
import { AuthService } from "src/app/_services/general_services/auth.service";
import { UserService } from "src/app/_services/general_services/user.service";
import { TokenStorageService } from "src/app/_services/general_services/token-storage.service";
import { Router, ActivatedRoute } from "@angular/router";
import { CardClassroom } from "src/app/models/CardClassroom";
import { CardClassroomComponent } from "src/app/shared/components/cards/card-classroom/card-classroom.component";
import { ClassroomDocenteResolver } from "src/app/_resolvers/docente/classroom-info-docente.resolver";
@Component({
  selector: "app-choosing-classroom",
  templateUrl: "./choosing-classroom.component.html",
  styleUrls: ["./choosing-classroom.component.scss"],
})
export class ChoosingClassroomComponent implements OnInit {
  //-----variables-----

  classroomCards: CardClassroom[] = [];
  cardClass: CardClassroom = {
    diasMateria: "",
    horarioMateria: "",
    materia: "",
    semestre: "",
    totalEstudiantes: 0,
  };
  userDocente: Teacher = {
    nombreDocente: "",
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
    private router: Router
  ) {}
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

      auxCard.materia = datos[i].nombre_curso;
      auxCard.diasMateria = dias;
      auxCard.horarioMateria = horario;
      auxCard.semestre = datos[i].semestre;
      auxCard.totalEstudiantes = datos[i].estudiantes;
      this.classroomCards.push(auxCard);
    }
  }
  ngOnInit() {
    if (this.tokenServ.getToken() === "undefined") {
      this.router.navigate(["/"]);
      return false;
    } else {
      this.usService.data.subscribe({
        next: (data) => {
          this.agregarCards(data.classroom);
          this.userDocente.correoDocente = data.profile.correo_docente;
          this.userDocente.nombreDocente =
            data.profile.nombre_docente +
            " " +
            data.profile.ap_pat_docente +
            " " +
            data.profile.ap_mat_docente;
          this.userDocente.primaLetra = data.profile.nombre_docente.substring(
            0,
            1
          );
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
  cardClicked() {
    this.router.navigate(["/dashboard"]);
  }
}
