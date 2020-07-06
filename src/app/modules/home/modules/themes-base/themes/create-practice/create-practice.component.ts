import { Component, OnInit } from "@angular/core";
import { PracticesService } from "../../../../../../services/practices/practices.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { RadioButtonQuestion } from "src/app/models/Preguntas/RadioButton";
import { CustomQuestionComponent } from "../../../../../dialogs/create-practice/custom-question/custom-question.component";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { RadioButtonCompleteCard } from "src/app/models/Preguntas/RadioButtonCompleteCard";
@Component({
  selector: "app-create-practice",
  templateUrl: "./create-practice.component.html",
  styleUrls: ["./create-practice.component.scss"],
})
export class CreatePracticeComponent implements OnInit {
  showSpinner=false;
  startDate = new Date(1990, 0, 1);
  endDate = new Date(1990, 0, 1);
  loadData(){
    this.showSpinner=true;
    setTimeout(()=> {
      this.showSpinner=false;
    },5000)
  }

  radioButtonCompleteCard: RadioButtonCompleteCard[] = [
    {
      id: 1,
      puntuacion: 10,
      preguntaCard: "fill the answer",
      radioButtonContent: [
        { opcionRespuesta: "123" },
        { opcionRespuesta: "1234" },
        { opcionRespuesta: "12345" },
        { opcionRespuesta: "123456" },
      ],
    },
    {
      id: 2,
      puntuacion: 20,
      preguntaCard: "fill the answer 2",
      radioButtonContent: [
        { opcionRespuesta: "aa" },
        { opcionRespuesta: "bb" },
        { opcionRespuesta: "cc" },
      ],
    },
    {
      id: 3,
      puntuacion: 30,
      preguntaCard: "fill the answer 3",
      radioButtonContent: [
        { opcionRespuesta: "falso" },
        { opcionRespuesta: "verdadero" },
      ],
    },
  ];
  message: RadioButtonCompleteCard;

  constructor(
    public dialog: MatDialog,
    private data: PracticesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}
  //funciones
  next() {
    console.log("next");
  }
  previous() {
    console.log("previous");
  }

  preguntasPersonalizadas() {
    const dialogRef = this.dialog.open(CustomQuestionComponent, {
      width: "1000px",
      maxHeight: "80vh",
      data: {
        message: this.message,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != "") {
        this.route.data.subscribe({
          next: (data) => {
            data.lessons.body = result;
          },
          error: (error) => {
            console.log("no se pudo agregar la pregunta");
          },
        });
      }
    });
  }
  here() {}
}
