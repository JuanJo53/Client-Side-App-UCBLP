import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-edit-student",
  templateUrl: "./edit-student.component.html",
  styleUrls: ["./edit-student.component.scss"],
})
export class EditStudentComponent implements OnInit {
  nombreEstudiante: string = "";
  apellidoPaternoEstudiante: string = "";
  apellidoMaternoEstudiante: string = "";

  constructor() {}

  ngOnInit(): void {}
  aceptar() {
    console.log(
      "\n nombre : " +
        this.nombreEstudiante +
        "\n apellidoP : " +
        this.apellidoPaternoEstudiante +
        "\n apellidoM : " +
        this.apellidoMaternoEstudiante
    );
  }
}
