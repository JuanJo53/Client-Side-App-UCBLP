import { Component, OnInit } from "@angular/core";
import { Pregunta } from 'src/app/models/Teacher/CreatePractice/Pregunta';

@Component({
  selector: "app-individual-assessment",
  templateUrl: "./individual-assessment.component.html",
  styleUrls: ["./individual-assessment.component.scss"],
})
export class IndividualAssessmentComponent implements OnInit {
  preguntas: Pregunta[] = [];
  constructor() {}

  ngOnInit(): void {}
}
