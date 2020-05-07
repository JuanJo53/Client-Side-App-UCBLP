import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-choosing-classroom",
  templateUrl: "./choosing-classroom.component.html",
  styleUrls: ["./choosing-classroom.component.scss"],
})
export class ChoosingClassroomComponent implements OnInit {
  //-----variables-----
  mylogo: string = "assets/logo.png";
  primeraLetra = "M";
  nombreUsuario = "Marcelo Ticona";
  correoUsuario = "m.ticona@acad.ucb.edu.bo";
  materia = "English 1";
  diasMateria = "Mon - Tue - Wed - Thu";
  horarioMateria = "7:30 - 9:00";
  totalEstudiantes = 25;
  semestre = "1/2020";
  //-----#variables-----
  //-----funciones-----
  salir() {
    console.log("btn salir presionado");
  }
  //-----#funciones-----
  constructor() {}

  ngOnInit(): void {}
}
