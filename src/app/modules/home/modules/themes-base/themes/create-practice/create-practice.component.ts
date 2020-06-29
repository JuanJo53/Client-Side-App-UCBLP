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
import { MatStepper } from '@angular/material/stepper';
import { Time } from '@angular/common';
import { TIME_LOCALE } from 'ngx-material-timepicker/src/app/material-timepicker/tokens/time-locale.token';
import { windowTime } from 'rxjs/operators';
import { Config1 } from 'src/app/models/Teacher/CreatePractice/Paso1';
import { Pregunta } from 'src/app/models/Teacher/CreatePractice/Pregunta';
@Component({
  selector: "app-create-practice",
  templateUrl: "./create-practice.component.html",
  styleUrls: ["./create-practice.component.scss"],
})
export class CreatePracticeComponent implements OnInit {
  startDate =Date.now();
  endDate = new Date(2020, 0, 1);
  paso2bloq=true;
  paso1:Config1=new Config1();
  radioButtonCompleteCard: Pregunta[] = [
    // {
    //   id: 1,
    //   puntuacion: 10,
    //   preguntaCard: "fill the answer",
    //   radioButtonContent: [
    //     { opcionRespuesta: "123" },
    //     { opcionRespuesta: "1234" },
    //     { opcionRespuesta: "12345" },
    //     { opcionRespuesta: "123456" },
    //   ],
    // },
    // {
    //   id: 2,
    //   puntuacion: 20,
    //   preguntaCard: "fill the answer 2",
    //   radioButtonContent: [
    //     { opcionRespuesta: "aa" },
    //     { opcionRespuesta: "bb" },
    //     { opcionRespuesta: "cc" },
    //   ],
    // },
    // {
    //   id: 3,
    //   puntuacion: 30,
    //   preguntaCard: "fill the answer 3",
    //   radioButtonContent: [
    //     { opcionRespuesta: "falso" },
    //     { opcionRespuesta: "verdadero" },
    //   ],
    // },
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
  next(stepper:MatStepper) {
    switch(stepper.selectedIndex){
      case 0:
        var a= this.verificarpaso1()
        if(a){
          stepper.next();
        }
        console.log(a);
        break;
      case 1:
        stepper.next();
        break;
      case 2:
        stepper.next();
        break;
      case 3:
        break;
  }
    

  }
  editarPregunta(pregunta){
    const dialogRef = this.dialog.open(CustomQuestionComponent, {
      width: "1000px",
      maxHeight: "80vh",
      data: {
        preg:pregunta,
        tipo:"modficar",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result !== ""&&result!=="undefined"&&result!=null) {
        this.route.data.subscribe({
          next: (data) => {
            this.radioButtonCompleteCard.push(result);
          },
          error: (error) => {
            console.log("no se pudo agregar la pregunta");
          },
        });
      }
    });
  }
  previous(stepper:MatStepper) {
    stepper.previous();
    console.log("previous");
  }
  click(){
      console.log("press");
  }

  preguntasPersonalizadas() {
    const dialogRef = this.dialog.open(CustomQuestionComponent, {
      width: "1000px",
      maxHeight: "80vh",
      data: {
        numero:this.radioButtonCompleteCard.length,
        tipo:"agregar",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result !== ""&&result!=="undefined"&&result!=null) {
        this.route.data.subscribe({
          next: (data) => {
            this.radioButtonCompleteCard.push(result);
          },
          error: (error) => {
            console.log("no se pudo agregar la pregunta");
          },
        });
      }
    });
  }
  here() {}






  //Funciones paso 1
  verificarpaso1():boolean{
    if(this.paso1.fechaini==null){
      this.paso1.bloqfecha1=true;
    }
    else this.paso1.bloqfecha1=false;
    if(this.paso1.fechafin==null){
      this.paso1.bloqfecha2=true;
    }
    else this.paso1.bloqfecha2=false;
    if(this.paso1.horaini==null){
      this.paso1.bloqhora1=true;
    }
    else this.paso1.bloqhora1=false;
    if(this.paso1.horafin==null||(String(this.paso1.horafin)===String(this.paso1.horaini)&&String(this.paso1.fechaini)===String(this.paso1.fechafin))){
      this.paso1.bloqhora2=true;
    }
    else this.paso1.bloqhora2=false;
    if(this.paso1.nombre===""){
      this.paso1.bloqnombre=true;
    }
    else this.paso1.bloqnombre=false;
    if(this.paso1.bloqfecha1==false&&this.paso1.bloqfecha2==false
      &&this.paso1.bloqhora1==false&&this.paso1.bloqhora2==false
      &&this.paso1.bloqnombre==false){      
      return true;
    }
    else return false;
  }
  ////////////////////////////

  //Funciones paso 2
  
}
