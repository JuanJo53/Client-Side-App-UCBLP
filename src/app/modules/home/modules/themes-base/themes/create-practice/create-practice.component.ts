import { Component, OnInit } from "@angular/core";

import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { RadioButtonQuestion } from "src/app/models/Preguntas/RadioButton";
import { CustomQuestionComponent } from "../../../../../dialogs/create-practice/custom-question/custom-question.component";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
@Component({
  selector: "app-create-practice",
  templateUrl: "./create-practice.component.html",
  styleUrls: ["./create-practice.component.scss"],
})
export class CreatePracticeComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  endDate = new Date(1990, 0, 1);

  constructor(public dialog: MatDialog) {}

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
    });
  }
}
