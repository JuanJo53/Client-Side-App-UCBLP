import { Component, OnInit, Inject } from "@angular/core";
import { RadioButtonCompleteCard } from "src/app/models/Preguntas/RadioButtonCompleteCard";
import { RadioButtonQuestion } from "src/app/models/Preguntas/RadioButton";
import { CheckboxQuestion } from "src/app/models/Preguntas/Checkbox";
import { Combo } from "src/app/models/ComboBox/comboBox";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { PracticeService } from "src/app/_services/practices_services/practice.service";
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
  radioButtonContent: string;
  tamanioPreguntas: string[];
  tipoPreguntaEscogida: string = "Unique";

  radioButtonOpciones: RadioButtonQuestion[] = [{ opcionRespuesta: "" }];
  checkboxOpciones: CheckboxQuestion[] = [
    { opcionRespuesta: "", isChecked: false },
  ];

  tipoPregunta: Combo[] = [{ value: "Simple 1", display: "Simple" }];
  tipoRespuesta: Combo[] = [
    { value: "Unique", display: "Unique" },
    { value: "Multiple", display: "Multiple" },
  ];

  message: RadioButtonCompleteCard = {
    id: 5,
    puntuacion: 100,
    preguntaCard: "fill the answer 100",
    radioButtonContent: [
      { opcionRespuesta: "a" },
      { opcionRespuesta: "b" },
      { opcionRespuesta: "c" },
    ],
  };
  constructor(
    @Inject(MAT_DIALOG_DATA) public dataDialog: any,
    private servPractice: PracticeService,
    private dialogRef: MatDialogRef<CustomQuestionComponent>
  ) {}

  ngOnInit(): void {
    //
  }
  //funciones
  selected() {
    console.log(this.tipoPreguntaSeleccionado);
  }
  agregarRespuesta(tipoDePregunta) {
    var aux = {
      opcionRespuesta: "",
    };
    var auxCheckbox = {
      opcionRespuesta: "",
      isChecked: false,
    };
    switch (tipoDePregunta) {
      case "Unique":
        this.radioButtonOpciones.push(aux);
        break;
      case "Multiple":
        this.checkboxOpciones.push(auxCheckbox);
        break;
    }
  }
  eliminarElemento(i) {
    console.log("elemt " + i);
    this.radioButtonOpciones.splice(i, 1);
  }

  limpiar(tipoDePregunta) {
    console.log("clear");
    this.pregunta = "";
    this.puntuacionPregunta = "";
    switch (tipoDePregunta) {
      case "Unique":
        this.radioButtonOpciones = [
          {
            opcionRespuesta: "",
          },
        ];

        break;
      case "Multiple":
        this.checkboxOpciones = [
          { opcionRespuesta: "", isChecked: false },
        ];
        break;
    }
  }

  changeClient(event) {
    this.tipoPreguntaEscogida = event;
    console.log("tipo de pregunta : " + this.tipoPreguntaEscogida);
  }

  agregarPreguntaEnContenido(tipoDePregunta) {
    switch (tipoDePregunta) {
      case "Unique":
        console.log("titulo :" + this.pregunta);
        console.log("puntuacion :" + this.puntuacionPregunta);
        for (let i in this.radioButtonOpciones) {
          console.log(
            "contenido pregunta : " +
              this.radioButtonOpciones[i].opcionRespuesta
          );
        }
        console.log("Correcta :" + this.opcionCorrecta);
        break;
      case "Multiple":
        console.log("multiple");
        console.log("titulo :" + this.pregunta);
        console.log("puntuacion :" + this.puntuacionPregunta);
        for (let i in this.checkboxOpciones) {
          console.log(
            "contenido pregunta : " +
              this.checkboxOpciones[i].opcionRespuesta +
              "checked?" +
              this.checkboxOpciones[i].isChecked
          );
        }
        break;
    }
  }
}
