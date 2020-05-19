import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-card-classroom",
  templateUrl: "./card-classroom.component.html",
  styleUrls: ["./card-classroom.component.scss"],
})
export class CardClassroomComponent implements OnInit {
  materia = "English 1";
  diasMateria = "Mon - Tue - Wed - Thu";
  horarioMateria = "7:30 - 9:00";
  totalEstudiantes = 25;
  semestre = "1/2020";
  constructor() {}

  ngOnInit(): void {}
}
