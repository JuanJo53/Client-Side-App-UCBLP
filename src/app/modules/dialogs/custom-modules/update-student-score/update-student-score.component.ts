import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-update-student-score",
  templateUrl: "./update-student-score.component.html",
  styleUrls: ["./update-student-score.component.scss"],
})
export class UpdateStudentScoreComponent implements OnInit {
  nombreEstudiante: string = "Ariel Colque Herrera";
  disableTextbox = true;
  score: number = 100;
  constructor() {}

  ngOnInit(): void {}
  toggleDisable() {
    this.disableTextbox = !this.disableTextbox;
  }
  aceptar() {}
}
