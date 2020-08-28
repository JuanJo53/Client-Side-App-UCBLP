import { Component, OnInit, Inject } from "@angular/core";
import { RadioButtonCompleteCard } from "src/app/models/Preguntas/RadioButtonCompleteCard";
import { RadioButtonQuestion } from "src/app/models/Preguntas/RadioButton";
import { Combo } from "src/app/models/ComboBox/comboBox";
import { CheckboxQuestion } from "src/app/models/Preguntas/Checkbox";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Pregunta } from 'src/app/models/Teacher/CreatePractice/Pregunta';
import { THIS_EXPR, ThrowStmt } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: "app-custom-question",
  templateUrl: "./custom-question.component.html",
  styleUrls: ["./custom-question.component.scss"],
})
export class CustomQuestionComponent implements OnInit {
  preguntaAntigua:Pregunta=new Pregunta();
  tipoPreguntaSeleccionado: string;
  nuevaPregunta:Pregunta=new Pregunta();
  tipoPreguntaEscogida: string = "1";
  

  radioButtonOpciones: RadioButtonQuestion[] = [{ opcionRespuesta: "" }];
  checkboxOpciones: CheckboxQuestion[] = [
    { opcionRespuesta: "", isChecked: true },
  ];

  tipoPregunta: Combo[] = [{ value: "1", display: "Simple" }];
  tipoRespuesta: Combo[] = [
    { value: "1", display: "Unique" },
    { value: "2", display: "Multiple" },
  ];

  
  constructor(
    @Inject(MAT_DIALOG_DATA) public dataDialog: any,
    private dialogRef: MatDialogRef<CustomQuestionComponent>
  ) {}

  ngOnInit(): void {
    if(this.dataDialog["tipo"]==="modificar"){
      var preg=this.dataDialog["preg"] as Pregunta;
      if(preg.tipo){
        this.preguntaAntigua.pregunta=preg.pregunta;
        this.preguntaAntigua.puntuacion=preg.puntuacion;
        this.preguntaAntigua.tipo=preg.tipo;
        this.preguntaAntigua.opciones=[];
        for(let opci of preg.opciones){
          this.preguntaAntigua.opciones.push(opci);
        }
        this.preguntaAntigua.respuesta=[];
        for(let res of preg.respuesta){
          this.preguntaAntigua.respuesta.push(res);
        }
        this.preguntaAntigua.idTipoPregunta=preg.idTipoPregunta;
        this.preguntaAntigua.idTipoRespuesta=preg.idTipoRespuesta;
      }
      
      console.log(preg);
      this.nuevaPregunta=preg;
      switch(preg.idTipoRespuesta){
        case "2":
        this.checkboxOpciones=[]
          for(let i in preg.opciones){
            this.checkboxOpciones.push({
              isChecked:preg.respuestasBool[i],
              opcionRespuesta:preg.opciones[i]

            })
          }
          break;
      case "1":
        this.radioButtonOpciones=[]
        for(let i in preg.opciones){
          this.radioButtonOpciones.push({
            opcionRespuesta:preg.opciones[i]

          })
        }

      }
    }
    
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
      if(i==0){
        if(this.nuevaPregunta.respuesta.length==0)this.nuevaPregunta.bloqopci=true
        else this.nuevaPregunta.bloqopci=false
      }
      else this.nuevaPregunta.bloqopci=true
    }
    
    if(this.nuevaPregunta.puntuacion<=0||this.nuevaPregunta.puntuacion>100||this.nuevaPregunta.puntuacion==null) this.nuevaPregunta.bloqpunt=true
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
  agregarRespuesta() {    
    var aux = {
      opcionRespuesta: "",
    };
    var auxCheckbox = {
      opcionRespuesta: "",
      isChecked: false,
    };
    switch (this.nuevaPregunta.idTipoRespuesta) {
      case "1":
        this.radioButtonOpciones.push(aux);
        break;
      case "2":
        this.checkboxOpciones.push(auxCheckbox);
        break;
    }
  }
  eliminarElemento(i) {
    switch (this.nuevaPregunta.idTipoRespuesta) {
      case "1":
        this.radioButtonOpciones.splice(i, 1);
        break;
      case "2":
        this.checkboxOpciones.splice(i, 1);
        break;
    }
  }
  agregarRespuestasNuevo(){
    switch(this.nuevaPregunta.idTipoRespuesta){

      case "1":
        for(let opcion of this.radioButtonOpciones){
          this.nuevaPregunta.opciones.push(opcion.opcionRespuesta);
        }
        break;
      case "2":
        this.nuevaPregunta.respuesta=[]
        this.nuevaPregunta.respuestasBool=[]
        let i=0;
        for(let opcion of this.checkboxOpciones){
          this.nuevaPregunta.opciones.push(opcion.opcionRespuesta);
          if(opcion.isChecked){
            this.nuevaPregunta.respuesta.push(i);
            this.nuevaPregunta.respuestasBool.push(true);
          }
          else{
            this.nuevaPregunta.respuestasBool.push(false);

          }
          i++;
        }
        break;  
    }
  }
  verificarRepo(nuevaPregunta:Pregunta):boolean{
    var verOpci=true;
    var verPreg=true;
    var verResp=true;
    var verTipoP=true;
    var verTipoR=true;
    for(let i in nuevaPregunta.opciones){
      if(nuevaPregunta.opciones[i]!==this.preguntaAntigua.opciones[i]){
        verOpci=false;
      }
    }
    for(let i in nuevaPregunta.respuesta){
      if(nuevaPregunta.respuesta[i]!==this.preguntaAntigua.respuesta[i]){
        verResp=false;
      }
    }
    if(nuevaPregunta.pregunta!==this.preguntaAntigua.pregunta){
      verPreg=false;
    }
    if(nuevaPregunta.idTipoPregunta!==this.preguntaAntigua.idTipoPregunta){
      verTipoP=false;
    }
    if(nuevaPregunta.idTipoRespuesta!==this.preguntaAntigua.idTipoRespuesta){
      verTipoR=false;
    }
    if(verOpci&&verPreg&&verResp&&verTipoP&&verTipoR){
      if(nuevaPregunta.puntuacion!=this.preguntaAntigua.puntuacion&&this.preguntaAntigua.tipo==3){
        nuevaPregunta.tipo=2;
            }
      return true;
    }
    else{
      return false;
    }

  }
  agregarPreguntaEnContenido() {
    
    this.nuevaPregunta.numeroPreg=this.dataDialog["numero"];
    this.nuevaPregunta.opciones=[];
    this.agregarRespuestasNuevo()
    console.log(this.nuevaPregunta);
   var ver=this.verificarContenido()
   if(ver){
     if(this.nuevaPregunta.tipo!=0){
        if(!this.verificarRepo(this.nuevaPregunta)){
          this.nuevaPregunta.tipo=0;
        }
     }
     this.dialogRef.close(this.nuevaPregunta);
   }
  }

  limpiar() {
    this.nuevaPregunta.pregunta = "";
    this.nuevaPregunta.puntuacion=null;
    this.nuevaPregunta.opciones= [""];
    this.radioButtonOpciones = [
      {
        opcionRespuesta: "",
      },
    ];
    this.checkboxOpciones = [
      {
       isChecked:true,
       opcionRespuesta:""
      },
    ];
  }

  changeClient(event) {
    this.tipoPreguntaEscogida = event;
    console.log("tipo de pregunta : " + this.tipoPreguntaEscogida);
  }
  cancelar(){
    this.dialogRef.close();
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
