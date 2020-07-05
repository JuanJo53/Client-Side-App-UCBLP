import { Component, OnInit } from "@angular/core";
export class HorarioClase {
  dia: string;
  horaComienzo: string;
  horaFinaliza: string;
}
@Component({
  selector: "app-create-course",
  templateUrl: "./create-course.component.html",
  styleUrls: ["./create-course.component.scss"],
})
export class CreateCourseComponent implements OnInit {
  nombreClassroom: string;
  valueQuantity: number;
  cantidadEstudiantes: number[] = [1, 2, 3];
  diasSemana: string[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  valueDiaSemana: string;
  fechaStart: string;
  fechaEnd: string;
  horarioClase: HorarioClase[] = [
    {
      dia: "",
      horaComienzo: "",
      horaFinaliza: "",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  guardarCurso() {
    console.log(
      "cantidad : " +
        this.valueQuantity +
        "\n" +
        "nombre curso :" +
        this.nombreClassroom
    );

    for (var item of this.horarioClase) {
      console.log(
        "dia:" +
          item.dia +
          "\n" +
          "hora Start : " +
          item.horaComienzo +
          "\n" +
          "hora End:" +
          item.horaFinaliza
      );
    }
  }
  eliminarHorario(index) {
    console.log("eliminar");
    this.horarioClase.splice(index, 1);
  }
  agregarHorario() {
    var aux: HorarioClase = {
      dia: "",
      horaComienzo: "",
      horaFinaliza: "",
    };
    console.log("agregar");
    this.horarioClase.push(aux);
  }
}
