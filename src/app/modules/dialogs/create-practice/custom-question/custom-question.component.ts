import { Component, OnInit, Inject } from "@angular/core";
import { RadioButtonCompleteCard } from "src/app/models/Preguntas/RadioButtonCompleteCard";
import { RadioButtonQuestion } from "src/app/models/Preguntas/RadioButton";
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

  radioButtonOpciones: RadioButtonQuestion[] = [{ opcionRespuesta: "" }];

  tipoPregunta: Combo[] = [{ value: "1", display: "Simple" }];
  tipoRespuesta: Combo[] = [{ value: "1", display: "Unique" }];

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
  agregarRespuesta() {
    console.log("clicked");
    var aux = {
      opcionRespuesta: "",
    };
    this.radioButtonOpciones.push(aux);
  }
  eliminarElemento(i) {
    console.log("elemt " + i);
    this.radioButtonOpciones.splice(i, 1);
  }
  agregarPreguntaEnContenido() {
    console.log("titulo :" + this.pregunta);
    console.log("puntuacion :" + this.puntuacionPregunta);
    for (let i in this.radioButtonOpciones) {
      console.log(
        "contenido pregunta : " + this.radioButtonOpciones[i].opcionRespuesta
      );
    }
    console.log("Correcta :" + this.opcionCorrecta);

    // let newLes = new Lesson();
    // newLes.nombre = this.nombrelesson;
    // newLes.idTipoLeccion = String(this.typeSelected);
    // newLes.idImagen = String(this.imageSelected);
    // newLes.numeroLeccion = this.numero;
    // newLes.idTema = this.dataDialog["idTema"];
    // this.servPractice.addRadioButtonQuestion(newLes).subscribe({
    //   next: (data) => {
    //     if (data.status == 200) {
    //       this.servPractice.getLessons(this.dataDialog["idTema"]).subscribe({
    //         next: (data) => {
    //           console.log(data);
    //           this.dialogRef.close(data.body);
    //         },
    //         error: (error) => {
    //           console.log(error);
    //           this.dialogRef.close();
    //         },
    //       });
    //     } else {
    //       console.log("No se pudo actualizar la pregunta");
    //       this.dialogRef.close();
    //     }
    //   },
    //   error: (error) => {
    //     console.log("No se pudo Actualizar la pregunta");
    //     this.dialogRef.close();
    //   },
    // });
  }
  limpiar() {
    console.log("clear");
    this.pregunta = "";
    this.puntuacionPregunta = "";
    this.radioButtonOpciones = [
      {
        opcionRespuesta: "",
      },
    ];
  }
}
