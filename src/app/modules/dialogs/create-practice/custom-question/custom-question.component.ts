import { Component, OnInit } from "@angular/core";
import { RadioButtonQuestion } from "src/app/models/Preguntas/RadioButton";
import { Combo } from "src/app/models/ComboBox/comboBox";
@Component({
  selector: "app-custom-question",
  templateUrl: "./custom-question.component.html",
  styleUrls: ["./custom-question.component.scss"],
})
export class CustomQuestionComponent implements OnInit {
  tipoPreguntaSeleccionado: string;
  pregunta: string;
  puntuacionPregunta: string;
  opcionCorrecta: string;

  radioButtonOptiones: RadioButtonQuestion[] = [
    {
      id: 1,
      item: "Option",
    },
  ];
  tipoPregunta: Combo[] = [{ value: "1", display: "Simple" }];
  tipoRespuesta: Combo[] = [{ value: "1", display: "Unique" }];

  constructor() {}

  ngOnInit(): void {}
  //funciones
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
  eliminarElemento(i) {
    console.log("elemt " + i);
    this.radioButtonOptiones.splice(i, 1);
  }
  agregarPregunta() {
    console.log("titulo :" + this.pregunta);
    console.log("puntuacion :" + this.puntuacionPregunta);
    console.log("Correcta :" + this.opcionCorrecta);
  }
  limpiar() {
    console.log("clear");
    this.pregunta = "";
    this.puntuacionPregunta = "";
    this.radioButtonOptiones = [
      {
        id: 1,
        item: "Option",
      },
    ];
  }
}
