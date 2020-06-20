import { Component, OnInit } from "@angular/core";

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

  constructor() {}

  ngOnInit(): void {
    //this.router.navigate([id], { relativeTo: this.route });
  }
}
