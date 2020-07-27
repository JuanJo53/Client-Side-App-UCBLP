import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { CustomQuestionComponent } from "../../../../../dialogs/create-practice/custom-question/custom-question.component";
import { RepositoryQuestionComponent } from "../../../../../dialogs/create-practice/repository-question/repository-question.component";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { RadioButtonCompleteCard } from "src/app/models/Preguntas/RadioButtonCompleteCard";
import { MatStepper } from "@angular/material/stepper";
import { Time, Location } from "@angular/common";
import { TIME_LOCALE } from "ngx-material-timepicker/src/app/material-timepicker/tokens/time-locale.token";
import { windowTime } from "rxjs/operators";
import { Config1 } from "src/app/models/Teacher/CreatePractice/Paso1";
import { Pregunta } from "src/app/models/Teacher/CreatePractice/Pregunta";
import { PracticesService } from "../../../../../../_services/teacher_services/practices.service";
@Component({
  selector: "app-create-practice",
  templateUrl: "./create-practice.component.html",
  styleUrls: ["./create-practice.component.scss"],
})
export class CreatePracticeComponent implements OnInit {
  spinnerFinish=false;
  total = 0;
  repository: any = [];
  showSpinner = false;
  // startDate = new Date(1990, 0, 1);
  // endDate = new Date(1990, 0, 1);

  // radioButtonCompleteCard: RadioButtonCompleteCard[] = [
  //   {
  //     id: 1,
  //     puntuacion: 10,
  //     preguntaCard: "fill the answer",
  //     radioButtonContent: [
  //       { opcionRespuesta: "123" },
  //       { opcionRespuesta: "1234" },
  //       { opcionRespuesta: "12345" },
  //       { opcionRespuesta: "123456" },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     puntuacion: 20,
  //     preguntaCard: "fill the answer 2",
  //     radioButtonContent: [
  //       { opcionRespuesta: "aa" },
  //       { opcionRespuesta: "bb" },
  //       { opcionRespuesta: "cc" },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     puntuacion: 30,
  //     preguntaCard: "fill the answer 3",
  //     radioButtonContent: [
  //       { opcionRespuesta: "falso" },
  //       { opcionRespuesta: "verdadero" },
  //     ],
  //   },
  // ]
  correcto = "";
  startDate = Date.now();
  endDate = new Date(2020, 0, 1);
  paso2bloq = false;
  idLeccion: string;
  paso2bloqScore = false;
  paso1: Config1 = new Config1();
  preguntas: Pregunta[] = [];

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private servPrac: PracticesService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.parent.params.subscribe((param) => {
      this.idLeccion = param["idLeccion"];
    });
    this.route.data.subscribe({
      next: (data) => {
        if (data.repository.status == 200) {
          this.repository = data.repository.body;
        }
      },
      error: (err) => {},
    });
  }
  generateId(): string {
    // Alphanumeric characters
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let autoId = "";
    for (let i = 0; i < 20; i++) {
      autoId += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return autoId;
  }
  //funciones
  next(stepper: MatStepper) {
    switch (stepper.selectedIndex) {
      case 0:
        var a = this.verificarpaso1();
        if (a) {
          stepper.next();
        }
        console.log(a);
        break;
      case 1:
        var b = this.verificarpaso2();
        if (b) {
          this.cambiarFecha();
          console.log(this.preguntas);
          stepper.next();
        }

        console.log(b);

        break;
      case 2:
        stepper.next();
        break;
      case 3:
        break;
    }
  }
  //Editar una pregunta
  editarPregunta(pregunta: Pregunta) {
    const dialogRef = this.dialog.open(CustomQuestionComponent, {
      width: "1000px",
      maxHeight: "80vh",
      data: {
        preg: pregunta,
        tipo: "modificar",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result !== "" && result !== "undefined" && result != null) {
        this.route.data.subscribe({
          next: (data) => {},
          error: (error) => {
            console.log("no se pudo agregar la pregunta");
          },
        });
      }
    });
  }
  //Retroceder en el proceso
  previous(stepper: MatStepper) {
    stepper.previous();
    console.log("previous");
  }
  eliminarPreg(index) {
    this.preguntas.splice(index, 1);
  }
  //Agregar una pregunta personalizada
  preguntasPersonalizadas() {
    const dialogRef = this.dialog.open(CustomQuestionComponent, {
      width: "1000px",
      maxHeight: "80vh",
      data: {
        numero: this.preguntas.length,
        tipo: "agregar",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result !== "" && result !== "undefined" && result != null) {
        this.route.data.subscribe({
          next: (data) => {
            this.preguntas.push(result);
          },
          error: (error) => {
            console.log("no se pudo agregar la pregunta");
          },
        });
      }
    });
  }
  cambiarFecha() {
    this.paso1.fechaini = this.Date_toDMY(this.paso1.fechaini);
    this.paso1.fechafin = this.Date_toDMY(this.paso1.fechafin);
  }
  preguntasRepositorio() {
    const dialogRef = this.dialog.open(RepositoryQuestionComponent, {
      width: "1000px",
      maxHeight: "80vh",
      data: {
        repository: this.repository,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result !== "" && result !== "undefined" && result != null) {
        for (let pregunta of result) {
          this.preguntas.push(pregunta);
        }
      }
    });
  }

  //Funciones paso 1
  verificarpaso1(): boolean {
    console.log("se verficia");
    if (this.paso1.fechaini == null) {
      this.paso1.bloqfecha1 = true;
    } else this.paso1.bloqfecha1 = false;
    if (this.paso1.fechafin == null) {
      this.paso1.bloqfecha2 = true;
    } else this.paso1.bloqfecha2 = false;
    if (this.paso1.horaini == null) {
      this.paso1.bloqhora1 = true;
    } else this.paso1.bloqhora1 = false;
    if (
      this.paso1.horafin == null ||
      (String(this.paso1.horafin) === String(this.paso1.horaini) &&
        String(this.paso1.fechaini) === String(this.paso1.fechafin))
    ) {
      this.paso1.bloqhora2 = true;
    } else this.paso1.bloqhora2 = false;
    if (this.paso1.nombre === "") {
      this.paso1.bloqnombre = true;
    } else this.paso1.bloqnombre = false;
    if (
      this.paso1.bloqfecha1 == false &&
      this.paso1.bloqfecha2 == false &&
      this.paso1.bloqhora1 == false &&
      this.paso1.bloqhora2 == false &&
      this.paso1.bloqnombre == false
    ) {
      return true;
    } else return false;
  }
  ////////////////////////////

  //Funciones paso 2
  verificarpaso2(): boolean {
    if (this.preguntas.length != 0) this.paso2bloq = false;
    else this.paso2bloq = true;
    var puntuacionT = 0;
    for (let card of this.preguntas) {
      puntuacionT += card.puntuacion;
    }
    if (puntuacionT == 100 || this.paso2bloq) this.paso2bloqScore = false;
    else this.paso2bloqScore = true;
    if (!this.paso2bloq && !this.paso2bloqScore) return true;
    else {
      return false;
    }
  }
  //////////////////////////////
  Date_toYMD(date: string) {
    var fecha = date.split("/");
    return fecha[2] + "-" + fecha[1] + "-" + fecha[0];
  }
  Date_toDMY(date: any) {
    var datos = String(date).split("/");
    if (datos.length != 3) {
      var year, month, day;
      year = String(date.getFullYear());
      month = String(date.getMonth() + 1);
      if (month.length == 1) {
        month = "0" + month;
      }
      day = String(date.getDate());
      if (day.length == 1) {
        day = "0" + day;
      }
      return day + "/" + month + "/" + year;
    } else {
      return date;
    }
  }
  Hour_toMYSQL(time) {
    var partTime = time.split(" ");
    if (partTime.length == 2) {
      if (partTime[1] === "PM") {
        var horasplit = partTime[0].split(":");
        if (horasplit[0] === "12") {
          return partTime[0];
        } else {
          return String(Number(horasplit[0]) + 12) + ":" + horasplit[1];
        }
      } else {
        var horasplit = partTime[0].split(":");
        if (horasplit[0] === 12) {
          return "00" + ":" + horasplit[1];
        } else {
          return partTime[0];
        }
      }
    } else {
      return time;
    }
  }
  //Funciones paso 3
  Generar(stepper) {
    this.paso1.idLeccion = this.idLeccion;
    this.paso1.numero = 1;
    this.paso1.fechaini = this.Date_toYMD(this.paso1.fechaini);
    this.paso1.fechafin = this.Date_toYMD(this.paso1.fechafin);
    console.log(this.paso1.fechaini);
    this.paso1.horaini = this.Hour_toMYSQL(this.paso1.horaini);
    this.paso1.horafin = this.Hour_toMYSQL(this.paso1.horafin);
    console.log(this.paso1.fechaini);

    this.servPrac.addPractica(this.paso1).subscribe({
      next: (data) => {
        if (data.status == 200) {
          this.servPrac
            .addPracticaPreguntas(this.preguntas, data.body.idPractica)
            .subscribe({
              next: (dataFin) => {
                if (dataFin.status == 200) {
                  console.log(dataFin.body);
                  this.correcto = "Se Agregaron Correctamente las preguntas";
                  stepper.next();
                } else {
                  console.log("error");
                  this.correcto = "No se pudieron agregar las preguntas";
                  stepper.next();
                }
              },
              error: (errorFin) => {
                console.log("error");
                this.correcto = "No se pudieron agregar las preguntas";
                stepper.next();
              },
            });
        } else {
          console.log("error");
          this.correcto = "No se pudieron agregar las preguntas";
          stepper.next();
        }
      },
      error: (error) => {
        console.log("error");
        this.correcto = "No se pudieron agregar las preguntas";
        stepper.next();
      },
    });
  }
  finish() {
    this.location.back();
  }

  //funcion del loader
  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;this.spinnerFinish=true;
    }, 5000);
  }
}
