import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { CustomQuestionComponent } from "../../../../../../../dialogs/create-practice/custom-question/custom-question.component";
import { RepositoryQuestionComponent } from "../../../../../../../dialogs/create-practice/repository-question/repository-question.component";
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
import { Practica } from "src/app/models/Teacher/CreatePractice/Practica";
import { Pregunta } from "src/app/models/Teacher/CreatePractice/Pregunta";
import { PracticesService } from "../../../../../../../../_services/teacher_services/practices.service";
import { TokenStorageService } from 'src/app/_services/general_services/token-storage.service';

@Component({
  selector: "app-edit-practice",
  templateUrl: "./edit-practice.component.html",
  styleUrls: ["./edit-practice.component.scss"],
})
export class EditPracticeComponent implements OnInit {
  preguntasEli:number[]=[];
  radioButtonValue: string = "unable";
  disableTextbox = true;
  spinnerFinish = false;
  total = 0;
  repository: any = [];
  showSpinner = false;
  correcto = "";
  startDate = Date.now();
  endDate = new Date(2020, 0, 1);
  paso2bloq = false;
  idPractica: string;
  paso2bloqScore = false;
  paso1: Practica = new Practica();
  // preguntas: Pregunta[] = [];
  preguntas: Pregunta[] = [
  ];

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private servPrac: PracticesService,
    private location: Location,
    private tokenServ:TokenStorageService
  ) {}
  
  actPuntaje() {
    this.total = 0;
    for (let preg of this.preguntas) {
      this.total += preg.puntuacion;
    }
  }
  agregarPreguntas(preguntasData){
    for(let pregunta of preguntasData){
      let newPreg=new Pregunta();
      newPreg.id=pregunta.id_pregunta_practica;
      newPreg.tipo=3;
      newPreg.pregunta=pregunta.pregunta;
      newPreg.respuesta=pregunta.respuesta;
      newPreg.opciones=pregunta.opciones;
      newPreg.idTipoPregunta=String(pregunta.id_tipo_pregunta);
      newPreg.idTipoRespuesta=String(pregunta.id_tipo_respuesta);
      newPreg.recurso=pregunta.recurso;
      newPreg.puntuacion=pregunta.puntuacion_practica_pregunta;
      newPreg.respuestasBool=[];
      for(let op of newPreg.opciones){
        newPreg.respuestasBool.push(false);
      }
      for(let resp of newPreg.respuesta){
        newPreg.respuestasBool[resp]=true;
      }
      this.preguntas.push(newPreg);
      console.log(newPreg);
    }
  }
agregarDatos(data){
  this.paso1.id=data.practica.id_practica;
  this.paso1.nombre=data.practica.nombre_practica;
  this.paso1.fechafin=data.practica.fin_fecha;
  this.paso1.fechaini=data.practica.inicio_fecha;
  var horaIni=data.practica.inicio_hora.split(":");
  var horaFin=data.practica.fin_hora.split(":");
  this.paso1.horafin=horaFin[0]+":"+horaFin[1];
  this.paso1.horaini=horaIni[0]+":"+horaIni[1];
  this.paso1.fechainiDate=data.practica.inicio_fecha;
  this.paso1.fechafinDate=data.practica.fin_fecha;
  if(data.practica.tiempo_limite==null){
    this.radioButtonValue="unable";
  }
  else{
    this.radioButtonValue="enable";
    this.paso1.tiempoLimite=data.practica.tiempo_limite;
  }
  console.log(data.preguntas);
  this.agregarPreguntas(data.preguntas);
  this.actPuntaje();
}
  ngOnInit(): void {
    this.route.parent.params.subscribe((param) => {
      this.idPractica = param["idPractica"];
      console.log(this.idPractica);
    });
    this.route.data.subscribe({
      next: (data) => {
        if (data.practice.status == 200) {
          this.agregarDatos(data.practice.body);
        }        
        if (data.repository.status == 200) {
          console.log(data.repository.body);
          this.repository = data.repository.body;
        }
      },
      error: (err) => {
        if(err.status==403){
          this.tokenServ.signOut();
        }
      },
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
    stepper.next();
    // switch (stepper.selectedIndex) {
    //   case 0:
    //     var a = this.verificarpaso1();
    //     if (a) {
    //       stepper.next();
    //     }
    //     console.log(a);
    //     break;
    //   case 1:
    //     var b = this.verificarpaso2();
    //     if (b) {
    //       this.cambiarFecha();
    //       console.log(this.preguntas);
    //       stepper.next();
    //     }

    //     console.log(b);

    //     break;
    //   case 2:
    //     stepper.next();
    //     break;
    //   case 3:
    //     break;
    // }
  }
  //Editar una pregunta
  editarPregunta(pregunta: Pregunta) {
    console.log(pregunta);
    var tipo=pregunta.tipo;
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
        if((tipo==3||tipo==2)&&pregunta.tipo==0){
          if(!this.preguntasEli.some(e=>e==pregunta.id)){
            this.preguntasEli.push(pregunta.id);
          }
        }
      }
      this.actPuntaje();
    });
  }
  //Retroceder en el proceso
  previous(stepper: MatStepper) {
    stepper.previous();
    console.log("previous");
  }
  eliminarPreg(index,pregunta:Pregunta) {
    console.log(pregunta);
    this.preguntas.splice(index, 1);
    this.preguntasEli.push(pregunta.id);
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
      this.actPuntaje();
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
      this.actPuntaje();
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
    var dato2=String(date).split("-")
    console.log(dato2);
    if(dato2.length==3){
      return dato2[2].substring(0,2)+"/"+dato2[1]+"/"+dato2[0];
    }
    else{
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
    this.paso1.idLeccion = "0";
    this.paso1.numero = 1;
    console.log("asdf");
    console.log(this.paso1.horaini);
    console.log(this.paso1.fechaini);
    console.log(this.paso1.horafin);
    console.log(this.paso1.fechafin);
    this.paso1.fechaini = this.Date_toDMY(this.paso1.fechainiDate);
    this.paso1.fechafin = this.Date_toDMY(this.paso1.fechafinDate);
    this.paso1.fechaini = this.Date_toYMD(this.paso1.fechaini);
    this.paso1.fechafin = this.Date_toYMD(this.paso1.fechafin);
    this.paso1.horaini = this.Hour_toMYSQL(this.paso1.horaini);
    this.paso1.horafin = this.Hour_toMYSQL(this.paso1.horafin);
    console.log(this.paso1.horaini);
    console.log(this.paso1.fechaini);
    console.log(this.paso1.horafin);
    console.log(this.paso1.fechafin);
    if(this.radioButtonValue=="unable"){
      this.paso1.tiempoLimite=null;
    }
    this.showSpinner = true;
    this.spinnerFinish = false;
    stepper.next();
    this.servPrac.modPractica(this.paso1,this.preguntas,this.preguntasEli).subscribe({
      next: (data) => {
        if (data.status == 200) {
          this.correcto = "Se Agregaron Correctamente las preguntas";
          this.showSpinner = false;
          this.spinnerFinish = true;
        } else {
          console.log("error");
          this.correcto = "No se pudieron agregar las preguntas";
          this.showSpinner = false;
          this.spinnerFinish = true;
        }
      },
      error: (error) => {
        console.log("error");
        this.correcto = "No se pudieron agregar las preguntas";
        this.showSpinner = false;
        this.spinnerFinish = true;
      },
    });
  }
  finish() {
    if(this.spinnerFinish){
      this.location.back();
    }
  }

  //funcion del loader
  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
      this.spinnerFinish = true;
    }, 5000);
  }

  toggleDisable() {
    this.disableTextbox = !this.disableTextbox;
  }
}
