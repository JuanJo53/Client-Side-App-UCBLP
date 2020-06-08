import { Component, OnInit } from "@angular/core";
import { Combo } from "src/app/models/ComboBox/comboBox";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { RadioButtonQuestion } from "src/app/models/Preguntas/RadioButton";
@Component({
  selector: "app-create-practice",
  templateUrl: "./create-practice.component.html",
  styleUrls: ["./create-practice.component.scss"],
})
export class CreatePracticeComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  endDate = new Date(1990, 0, 1);
  tipoPreguntaSeleccionado: string;

  radioButtonOptiones: RadioButtonQuestion[] = [
    {
      id: 1,
      item: "Option",
    },
    {
      id: 2,
      item: "Option",
    },
    {
      id: 3,
      item: "Option",
    },
  ];

  tipoPregunta: Combo[] = [{ value: "1", display: "Simple" }];
  tipoRespuesta: Combo[] = [{ value: "1", display: "Unique" }];

  constructor() {}

  ngOnInit(): void {}
  //funciones
  next() {
    console.log("next");
  }
  previous() {
    console.log("previous");
  }
  selected() {
    console.log(this.tipoPreguntaSeleccionado);
  }
  agregarRespuesta() {
    console.log("clicked");
    var aux = {
      id: 4,
      item: "Option",
    };
    this.radioButtonOptiones.push(aux);
  }
}
