import { Component, OnInit } from "@angular/core";
import { EvaluationCard } from "src/app/models/Teacher/EvaluationCard";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-students-profile",
  templateUrl: "./students-profile.component.html",
  styleUrls: ["./students-profile.component.scss"],
})
export class StudentsProfileComponent implements OnInit {
  //variables
  nombreEstudiante: string = "Alvin Yamil Poma Tarqui";
  correoEstudiante: string = "ay.poma@acad.ucb.eud.bo";
  promedioGeneralEstudiante: number = 96.95;
  defaultCard: EvaluationCard[] = [
    {
      id_evaluationCard: 1,
      titulo: "Attendance",
      porcentaje: "10%",
      colorFondo: "#9c5fafbf",
      colorCirculo: "#9c5faf",
    },
    {
      id_evaluationCard: 2,
      titulo: "Themes",
      porcentaje: "20%",
      colorFondo: "#d77a61bf",
      colorCirculo: "#d77a61",
    },
  ];
  customCards: EvaluationCard[] = [
    {
      id_evaluationCard: 1,
      titulo: "Project",
      porcentaje: "10%",
      colorFondo: "#ef8ec8bf",
      colorCirculo: "#ef8ec8",
    },
    {
      id_evaluationCard: 2,
      titulo: "Expositions",
      porcentaje: "20%",
      colorFondo: "#c7cc77bf",
      colorCirculo: "#c7cc77",
    },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {}
  verContenido(idCard) {
    if (idCard == 1) {
      this.router.navigate(["attendance-score"], { relativeTo: this.route });
    } else {
      this.router.navigate(["others-score"], { relativeTo: this.route });
    }
    //console.log("ver ceontenido card");
  }
}
