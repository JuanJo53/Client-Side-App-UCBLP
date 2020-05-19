import { Component, OnInit } from "@angular/core";
import { Teacher } from "src/app/models/Teacher";
import { AuthService } from "src/app/_services/auth.service";
import { UserService } from "src/app/_services/user.service";
import { TokenStorageService } from "src/app/_services/token-storage.service";
import { Router } from "@angular/router";
import { CardClassroom } from "src/app/models/CardClassroom";

@Component({
  selector: "app-choosing-classroom",
  templateUrl: "./choosing-classroom.component.html",
  styleUrls: ["./choosing-classroom.component.scss"],
})
export class ChoosingClassroomComponent implements OnInit {
  //-----variables-----
  classroomCards: CardClassroom[] = [
    {
      materia: "English 1",
      diasMateria: "Mon - Tue - Wed - Thu",
      horarioMateria: "7:30 - 9:00",
      totalEstudiantes: 25,
      semestre: "1/2020",
    },
    {
      materia: "English 2",
      diasMateria: "Mon - Tue - Wed - Thu",
      horarioMateria: "9:15 - 11:00",
      totalEstudiantes: 30,
      semestre: "1/2020",
    },
    {
      materia: "English 3",
      diasMateria: "Mon - Tue - Wed - Thu",
      horarioMateria: "14:30 - 16:00",
      totalEstudiantes: 30,
      semestre: "1/2020",
    },
    {
      materia: "English 4",
      diasMateria: "Mon - Tue - Wed - Thu",
      horarioMateria: "18:15 - 19:45",
      totalEstudiantes: 30,
      semestre: "1/2020",
    },
  ];

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
    private usService: UserService,
    private tokenServ: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.numeroCards = this.classroomCards.length;
    console.log("total : " + this.numeroCards);
    if (this.tokenServ.getToken() === "undefined") {
      this.router.navigate(["/"]);
      return false;
    } else {
      this.usService.getProfileDocente().subscribe({
        next: (data) => {
          this.userDocente.correoDocente = data.correo_docente;
          this.userDocente.nombreDocente =
            data.nombre_docente + data.ap_pat_docente + data.ap_mat_docente;
          this.userDocente.primaLetra = data.nombre_docente.substring(0, 1);
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
    console.log("here");
  }
}
