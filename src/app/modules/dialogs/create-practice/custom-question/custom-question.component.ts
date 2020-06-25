import { Component, OnInit, Inject } from "@angular/core";
import { RadioButtonCompleteCard } from "src/app/models/Preguntas/RadioButtonCompleteCard";
import { RadioButtonQuestion } from "src/app/models/Preguntas/RadioButton";
import { Combo } from "src/app/models/ComboBox/comboBox";
import { CheckboxQuestion } from "src/app/models/Preguntas/Checkbox";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { PracticeService } from "src/app/_services/practices_services/practice.service";
import { Pregunta } from 'src/app/models/Teacher/CreatePractice/Pregunta';
@Component({
  selector: "app-custom-question",
  templateUrl: "./custom-question.component.html",
  styleUrls: ["./custom-question.component.scss"],
})
export class CustomQuestionComponent implements OnInit {
  tipoPreguntaSeleccionado: string;
  nuevaPregunta:Pregunta=new Pregunta();
  tipoPreguntaEscogida: string = "1";
  

  radioButtonOpciones: RadioButtonQuestion[] = [{ opcionRespuesta: "" }];
  checkboxOpciones: CheckboxQuestion[] = [
    { opcionRespuesta: "", isChecked: false },
  ];

  tipoPregunta: Combo[] = [{ value: "1", display: "Simple" }];
  tipoRespuesta: Combo[] = [
    { value: "1", display: "Unique" },
    { value: "2", display: "Multiple" },
  ];

  
  constructor(
    @Inject(MAT_DIALOG_DATA) public dataDialog: any,
    private servPractice: PracticeService,
    private dialogRef: MatDialogRef<CustomQuestionComponent>
  ) {}

  ngOnInit(): void {
    
  }
  //funciones
  
  verificarContenido(){
    if(this.nuevaPregunta.pregunta==="") this.nuevaPregunta.bloqpreg=true
    else this.nuevaPregunta.bloqpreg=false
    
    if(this.nuevaPregunta.opciones.length==0) this.nuevaPregunta.bloqopci=true
    else {
      var i=0;
      for(let preg of this.nuevaPregunta.opciones){
        if(preg===""){
          i++;
        }
      }
      if(i==0) this.nuevaPregunta.bloqopci=false
      else this.nuevaPregunta.bloqopci=true
    }
    
    if(this.nuevaPregunta.puntuacion==0) this.nuevaPregunta.bloqpunt=true
    else this.nuevaPregunta.bloqpunt=false
    
    
    if(this.nuevaPregunta.idTipoPregunta==null) this.nuevaPregunta.bloqidtp=true
    else this.nuevaPregunta.bloqidtp=false

    if(this.nuevaPregunta.idTipoRespuesta==null) this.nuevaPregunta.bloqidtr=true
    else this.nuevaPregunta.bloqidtr=false

    if(this.nuevaPregunta.bloqidtp==false&&
      this.nuevaPregunta.bloqidtr==false&&
      this.nuevaPregunta.bloqopci==false&&
      this.nuevaPregunta.bloqpreg==false&&
      this.nuevaPregunta.bloqpunt==false){
        return true;
      }
      else return false;
    
  }
  changeClient(event) {
    this.tipoPreguntaEscogida = event;
  }
  agregarRespuesta() {    
    this.radioButtonOpciones.push({
      opcionRespuesta:""
    })
  }
  eliminarElemento(i) {
    this.radioButtonOpciones.splice(i, 1);
  }
  agregarPreguntaEnContenido() {
    this.nuevaPregunta.numeroPreg=this.dataDialog["numero"];
    this.nuevaPregunta.opciones=[];
    for(let opcion of this.radioButtonOpciones){
      this.nuevaPregunta.opciones.push(opcion.opcionRespuesta);
    }
    console.log(this.nuevaPregunta);
   var ver=this.verificarContenido()
   if(ver){
     this.dialogRef.close(this.nuevaPregunta);
   }
    

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
    this.nuevaPregunta.pregunta = "";
    this.nuevaPregunta.puntuacion = 0;
    this.nuevaPregunta.opciones= [""];
  }
  // agregarPreguntaEnContenido(tipoDePregunta) {
  //   switch (tipoDePregunta) {
  //     case "Unique":
  //       console.log("titulo :" + this.pregunta);
  //       console.log("puntuacion :" + this.puntuacionPregunta);
  //       for (let i in this.radioButtonOpciones) {
  //         console.log(
  //           "contenido pregunta : " +
  //             this.radioButtonOpciones[i].opcionRespuesta
  //         );
  //       }
  //       console.log("Correcta :" + this.opcionCorrecta);
  //       break;
  //     case "Multiple":
  //       console.log("multiple");
  //       console.log("titulo :" + this.pregunta);
  //       console.log("puntuacion :" + this.puntuacionPregunta);
  //       for (let i in this.checkboxOpciones) {
  //         console.log(
  //           "contenido pregunta : " +
  //             this.checkboxOpciones[i].opcionRespuesta +
  //             "checked?" +
  //             this.checkboxOpciones[i].isChecked
  //         );
  //       }
  //       break;
  //   }
  // }
}
