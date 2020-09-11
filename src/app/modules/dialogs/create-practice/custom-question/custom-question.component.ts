import { Component, OnInit, Inject } from "@angular/core";
import { RadioButtonCompleteCard } from "src/app/models/Preguntas/RadioButtonCompleteCard";
import { RadioButtonQuestion } from "src/app/models/Preguntas/RadioButton";
import { Combo } from "src/app/models/ComboBox/comboBox";
import { CheckboxQuestion } from "src/app/models/Preguntas/Checkbox";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Pregunta } from "src/app/models/Teacher/CreatePractice/Pregunta";
import { THIS_EXPR, ThrowStmt } from "@angular/compiler/src/output/output_ast";
import { MatChipInputEvent } from "@angular/material/chips";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import {
  CdkDragDrop,
  moveItemInArray,
  copyArrayItem,
} from "@angular/cdk/drag-drop";
import { transferArrayItem } from "@angular/cdk/drag-drop";
import { ChipOption } from "src/app/models/Dragandrop/ChipOption";
import { ChipOptionNumber } from "src/app/models/Dragandrop/ChipOptionNumber";
import { DragandDropColumns } from "src/app/models/Dragandrop/DragandDropColumn";
import { Column } from "src/app/models/Dragandrop/Column";
import { matching } from "src/app/models/Preguntas/Matching";
import { repeat } from 'rxjs/operators';

@Component({
  selector: "app-custom-question",
  templateUrl: "./custom-question.component.html",
  styleUrls: ["./custom-question.component.scss"],
})
export class CustomQuestionComponent implements OnInit {
  ocultarFillQuestion=false;
  tipoR = ["Unique", "Multiple", "Columns", "Fill in the blanks", "Combobox's"];
  numColumnas: string = "1";
  preguntaAntigua: Pregunta = new Pregunta();
  tipoPreguntaSeleccionado: string;
  nuevaPregunta: Pregunta = new Pregunta();
  tipoPreguntaEscogida: string = "1";

  radioButtonOpciones: RadioButtonQuestion[] = [{ opcionRespuesta: "" }];
  checkboxOpciones: CheckboxQuestion[] = [
    { opcionRespuesta: "", isChecked: true },
  ];

  tipoPregunta: Combo[] = [
    { value: "1", display: "Simple" },
    { value: "2", display: "Drag and Drop" },
    { value: "3", display: "Match the words" },
  ];

  tipoRespuesta: Combo[] = [];

  dragAndDropColumn: Combo[] = [
    { value: "1", display: "One" },
    { value: "2", display: "Two" },
    { value: "3", display: "Three" },
    { value: "4", display: "Four" },
    { value: "5", display: "Five" },
  ];
  matchingInputs: matching[] = [];

  //drag and drop
  value = "Clear me";
  listColumnsChips: DragandDropColumns = new DragandDropColumns(
    "test board",
    []
  );
  listColumnsChips2: Column[] = [];

  optionChipName: string;
  options: ChipOptionNumber[] = [];
  options2: ChipOption[] = [];
  options3: ChipOption[] = [{ chipName: "the3" }, { chipName: "play3" }];
  todo = ["Get", "Pick up", "Go home", "Fall"];

  done = ["Get", "Brush", "Take", "Check", "Walk dog"];
  constructor(
    @Inject(MAT_DIALOG_DATA) public dataDialog: any,
    private dialogRef: MatDialogRef<CustomQuestionComponent>
  ) {}
  cargarRespuestas() {
    switch (this.nuevaPregunta.idTipoPregunta) {
      case "1":
        this.tipoRespuesta = [];
        this.tipoRespuesta.push({ value: "1", display: this.tipoR[0] });
        this.tipoRespuesta.push({ value: "2", display: this.tipoR[1] });
        this.nuevaPregunta.idTipoRespuesta = "1";
        break;
      case "2":
        this.tipoRespuesta = [];
        this.tipoRespuesta.push({ value: "3", display: this.tipoR[2] });
        this.tipoRespuesta.push({ value: "4", display: this.tipoR[3] });
        this.nuevaPregunta.idTipoRespuesta = "3";
        break;
      case "3":
        this.tipoRespuesta = [];
        this.tipoRespuesta.push({ value: "5", display: this.tipoR[4] });
        this.nuevaPregunta.idTipoRespuesta = "5";
        break;
    }
  }
  ponerColumnas() {
    var numerCol = this.listColumnsChips2.length;
    console.log(this.numColumnas);
    if (numerCol > Number(this.numColumnas)) {
      for (let i = 0; i < numerCol - Number(this.numColumnas); i++) {
        this.listColumnsChips2.splice(this.listColumnsChips2.length - 1, 1);
      }
    } else {
      if (numerCol < Number(this.numColumnas)) {
        for (let i = 0; i < Number(this.numColumnas) - numerCol; i++) {
          let newColumn = new Column();
          newColumn.chip = [];
          newColumn.columnTitle =
            "Column " + (this.listColumnsChips2.length + 1);
          this.listColumnsChips2.push(newColumn);
        }
      }
    }
    console.log(this.listColumnsChips2);
  }
  cargarPreguntaModificar(){
    var preg = this.dataDialog["preg"] as Pregunta;
      if (preg.tipo) {
        this.preguntaAntigua.pregunta = preg.pregunta;
        this.preguntaAntigua.puntuacion = preg.puntuacion;
        this.preguntaAntigua.tipo = preg.tipo;
        this.preguntaAntigua.opciones = [];
        for (let opci of preg.opciones) {
          this.preguntaAntigua.opciones.push(opci);
        }
        this.preguntaAntigua.respuesta = [];
        for (let res of preg.respuesta) {
          this.preguntaAntigua.respuesta.push(res);
        }
        this.preguntaAntigua.idTipoPregunta = preg.idTipoPregunta;
        this.preguntaAntigua.idTipoRespuesta = preg.idTipoRespuesta;
      }

      console.log(preg);
      this.nuevaPregunta = preg;
      switch (preg.idTipoRespuesta) {
        case "2":
          this.checkboxOpciones = [];
          for (let i in preg.opciones) {
            this.checkboxOpciones.push({
              isChecked: preg.respuestasBool[i],
              opcionRespuesta: preg.opciones[i],
            });
          }
          break;
        case "1":
          this.radioButtonOpciones = [];
          for (let i in preg.opciones) {
            this.radioButtonOpciones.push({
              opcionRespuesta: preg.opciones[i],
            });
          }
          break;
        case "3":
          var cantChip=0;
          for(let column of preg.respuesta){
            let col=new Column();
            col.chip=[];
            col.columnTitle=column.titulo;
            for(let chip of column.cards){
              col.chip.push({chipName:preg.opciones[chip]})
              cantChip++;
            }
            this.listColumnsChips2.push(col);
          }  
          for(let i=0;i<preg.opciones.length-cantChip;i++){
            this.options2.push({chipName:preg.opciones[i]});
          }
          this.numColumnas=String(preg.respuesta.length)

      }
  }
  ngOnInit(): void {
    if (this.dataDialog["tipo"] === "modificar") {
      this.cargarPreguntaModificar();
    }
    this.cargarRespuestas();
    this.ponerColumnas();
  }
  //funciones

  verificarContenido() {
    switch(this.nuevaPregunta.idTipoRespuesta){
      case "1":
        if (this.nuevaPregunta.opciones.length == 0)
          this.nuevaPregunta.bloqopci = true;
        else {
          var i = 0;
          for (let preg of this.nuevaPregunta.opciones) {
            if (preg === "") {
              i++;
            }
          }
          if (i == 0) {
            if (this.nuevaPregunta.respuesta.length == 0)
              this.nuevaPregunta.bloqopci = true;
            else this.nuevaPregunta.bloqopci = false;
          } else this.nuevaPregunta.bloqopci = true;
        }
        break;
      case "2":
        if (this.nuevaPregunta.opciones.length == 0)
          this.nuevaPregunta.bloqopci = true;
        else {
          var i = 0;
          for (let preg of this.nuevaPregunta.opciones) {
            if (preg === "") {
              i++;
            }
          }
          if (i == 0) {
            if (this.nuevaPregunta.respuesta.length == 0)
              this.nuevaPregunta.bloqopci = true;
            else this.nuevaPregunta.bloqopci = false;
          } else this.nuevaPregunta.bloqopci = true;
        }
        break;
      case "3":
          if (this.nuevaPregunta.opciones.length == 0)
            this.nuevaPregunta.bloqopci = true;
          else {
            var contCont=0;
            var contNom=0;
            for(let columna of this.nuevaPregunta.respuesta){
              if(columna.cards.length!=0){
                contCont++;
              }if(columna.titulo!==""){
                contNom++;
              }
            }
            if(contCont==0||contNom==0)
                this.nuevaPregunta.bloqopci = true;
              else this.nuevaPregunta.bloqopci = false;
          }
          break;  
          
    }




    if (this.nuevaPregunta.pregunta === "") this.nuevaPregunta.bloqpreg = true;
    else this.nuevaPregunta.bloqpreg = false;
    if (
      this.nuevaPregunta.puntuacion <= 0 ||
      this.nuevaPregunta.puntuacion > 100 ||
      this.nuevaPregunta.puntuacion == null
    )
      this.nuevaPregunta.bloqpunt = true;
    else this.nuevaPregunta.bloqpunt = false;

    if (this.nuevaPregunta.idTipoPregunta == null)
      this.nuevaPregunta.bloqidtp = true;
    else this.nuevaPregunta.bloqidtp = false;

    if (this.nuevaPregunta.idTipoRespuesta == null)
      this.nuevaPregunta.bloqidtr = true;
    else this.nuevaPregunta.bloqidtr = false;

    if (
      this.nuevaPregunta.bloqidtp == false &&
      this.nuevaPregunta.bloqidtr == false &&
      this.nuevaPregunta.bloqopci == false &&
      this.nuevaPregunta.bloqpreg == false &&
      this.nuevaPregunta.bloqpunt == false
    ) {
      return true;
    } else return false;
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
  agregarRespuestasNuevo() {
    switch (this.nuevaPregunta.idTipoRespuesta) {
      case "1":
        for (let opcion of this.radioButtonOpciones) {
          this.nuevaPregunta.opciones.push(opcion.opcionRespuesta);
        }
       return true;
      case "2":
        this.nuevaPregunta.respuesta = [];
        this.nuevaPregunta.respuestasBool = [];
        let i = 0;
        for (let opcion of this.checkboxOpciones) {
          this.nuevaPregunta.opciones.push(opcion.opcionRespuesta);
          if (opcion.isChecked) {
            this.nuevaPregunta.respuesta.push(i);
            this.nuevaPregunta.respuestasBool.push(true);
          } else {
            this.nuevaPregunta.respuestasBool.push(false);
          }
          i++;
        }
        return true;
      
      case "3":
          var respuestas=[];
        var opciones=[];
        for(let opcion of this.options2){
          opciones.push(opcion.chipName);
        }
        for(let column of this.listColumnsChips2){
          respuestas.push({titulo: column.columnTitle,cards:[]})
          for(let chip of column.chip){
            respuestas[respuestas.length-1].cards.push(Number(opciones.length));
            opciones.push(chip.chipName);
          }
        }
        this.nuevaPregunta.respuesta = respuestas;
        this.nuevaPregunta.opciones=opciones;
        return true;
    }
  }
  cambiarColumnas(valor) {
    console.log(valor);
  }
  clickChip(chip:number){
    if(this.optionsTextarea[chip].chipName.split(". ")[0]===this.optionsTextarea[chip].chipName){
      var relleno="";
      for(let i=0;i<this.optionsTextarea[chip].chipName.length;i++){
        relleno+=". ";
      }
      console.log(relleno);
      console.log(this.optionsTextarea[chip].chipName.length);
      this.options.push({chipName:this.optionsTextarea[chip].chipName,numero:chip})
      this.optionsTextarea.splice(chip,1,{chipName:relleno});

    }

  }
  clickChipOptions(chip:number){
    this.optionsTextarea.splice(this.options[chip].numero,1,{chipName:this.options[chip].chipName})
    this.options.splice(chip,1);

  }
  verificarRepo(nuevaPregunta: Pregunta): boolean {
    try{
      var verOpci = true;
      var verPreg = true;
      var verResp = true;
      var verTipoP = true;
      var verTipoR = true;
  
      //Verifica si las respuestas y opciones son iguales
      switch(nuevaPregunta.idTipoRespuesta){
        case "1":
          if(nuevaPregunta.opciones.length==this.preguntaAntigua.opciones.length){
            for (let i in nuevaPregunta.opciones) {
              if (nuevaPregunta.opciones[i] !== this.preguntaAntigua.opciones[i]) {
                verOpci = false;
              }
            }
          }
          else verOpci=false;
          if(nuevaPregunta.respuesta.length==this.preguntaAntigua.respuesta.length){
            for (let i in nuevaPregunta.respuesta) {
              if (nuevaPregunta.respuesta[i] !== this.preguntaAntigua.respuesta[i]) {
                verResp = false;
              }
            }
          }
          else verOpci=false;
          break;
        case "2":
          if(nuevaPregunta.opciones.length==this.preguntaAntigua.opciones.length){
            for (let i in nuevaPregunta.opciones) {
              if (nuevaPregunta.opciones[i] !== this.preguntaAntigua.opciones[i]) {
                verOpci = false;
              }
            }
          }
          else verOpci=false;
          if(nuevaPregunta.respuesta.length==this.preguntaAntigua.respuesta.length){
            for (let i in nuevaPregunta.respuesta) {
              if (nuevaPregunta.respuesta[i] !== this.preguntaAntigua.respuesta[i]) {
                verResp = false;
              }
            }
          }
          else verOpci=false;
          break; 
        case "3":
          if(nuevaPregunta.opciones.length==this.preguntaAntigua.opciones.length){
            for (let i in nuevaPregunta.opciones) {
              if (nuevaPregunta.opciones[i] !== this.preguntaAntigua.opciones[i]) {
                verOpci = false;
              }
            }
          } 
          else verOpci=false; 
         if(nuevaPregunta.respuesta.length==this.preguntaAntigua.respuesta.length){
          for (let i in nuevaPregunta.respuesta) {
            if(nuevaPregunta.respuesta[i].titulo!==this.preguntaAntigua.respuesta[i].titulo){
              verOpci=false;
              break;
            }
            if(nuevaPregunta.respuesta[i].cards.length==this.preguntaAntigua.respuesta[i].cards.length){
              for(let j in nuevaPregunta.respuesta[i].cards){
                if (nuevaPregunta.respuesta[i].cards[j] !== this.preguntaAntigua.respuesta[i].cards[j]) {
                  verOpci = false;
                  break;
                }
              }
            }
            else{
              verOpci=false;
            }
          }
         }
         else verOpci=false;
      }
  
  
  
      if (nuevaPregunta.pregunta !== this.preguntaAntigua.pregunta) {
        verPreg = false;
      }
      if (nuevaPregunta.idTipoPregunta !== this.preguntaAntigua.idTipoPregunta) {
        verTipoP = false;
      }
      if (
        nuevaPregunta.idTipoRespuesta !== this.preguntaAntigua.idTipoRespuesta
      ) {
        verTipoR = false;
      }
      if (verOpci && verPreg && verResp && verTipoP && verTipoR) {
        if (
          nuevaPregunta.puntuacion != this.preguntaAntigua.puntuacion &&
          this.preguntaAntigua.tipo == 3
        ) {
          nuevaPregunta.tipo = 2;
        }
        return true;
      } else {
        return false;
      }
    }
    catch(e){
      console.log("Error: "+e);
      return false;
    }
  }
  agregarPreguntaEnContenido() {
    this.nuevaPregunta.numeroPreg = this.dataDialog["numero"];
    this.nuevaPregunta.opciones = [];
    if(this.agregarRespuestasNuevo()){
      console.log(this.nuevaPregunta);
      var ver = this.verificarContenido();
      if (ver) {
        if (this.nuevaPregunta.tipo != 0) {
          if (!this.verificarRepo(this.nuevaPregunta)) {
            this.nuevaPregunta.tipo = 0;
          }
        }
        this.dialogRef.close(this.nuevaPregunta);
      }
    }
    
  }

  limpiar() {
    this.nuevaPregunta.pregunta = "";
    this.nuevaPregunta.puntuacion = null;
    this.nuevaPregunta.opciones = [""];
    this.radioButtonOpciones = [
      {
        opcionRespuesta: "",
      },
    ];
    this.checkboxOpciones = [
      {
        isChecked: true,
        opcionRespuesta: "",
      },
    ];
  }

  changeClient(event) {
    this.tipoPreguntaEscogida = event;

    console.log("tipo de pregunta : " + this.tipoPreguntaEscogida);
  }
  cancelar() {
    this.dialogRef.close();
  }

  // aux: number = 0;
  removable = true;
  drop(event: CdkDragDrop<ChipOption[]>) {
    moveItemInArray(this.options, event.previousIndex, event.currentIndex);
  }

  drop2(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  remove(option: ChipOption): void {
    const index = this.options2.indexOf(option);

    if (index >= 0) {
      this.options.splice(index, 1);
    }
  }
  remove2(option: Column): void {
    // const index = this.listColumnsChips2.indexOf(option.chip);
    // if (index >= 0) {
    //   this.listColumnsChips2.splice(index, 1);
    // }
  }
  agregarOpcion() {
    console.log(this.optionChipName);
    if (this.optionChipName !== "undefined" && this.optionChipName !=null && this.optionChipName !=="") {
      var auxChip = {
        chipName: "",
      };
      console.log("name : " + this.optionChipName);
      auxChip.chipName = this.optionChipName;
      this.options2.push(auxChip);
      this.optionChipName = "";
      // this.aux++;
      // console.log("aux" + this.aux);
    } else {
      console.log("esta vacio");
    }
  }
  //

  //agregar a input match question
  agregarInputMatch() {
    var auxInputMatch = {
      keyword: "",
      match: "",
    };
    // console.log("name : " + this.optionChipName);
    this.matchingInputs.push(auxInputMatch);
  }
  eliminarInputMatch(i) {
    this.matchingInputs.splice(i, 1);
  }

  auxinput = "";
  //
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

  //drag drop version 2

  token: ChipOption = { chipName: "*" };
  optionsTextarea: ChipOption[] = [];
  dragdropText: string;
  textareaview() {
    this.ocultarFillQuestion=true;
    var x = this.dragdropText;
    var arrayWords = x.split(" ");
    for (var i = 0; i < arrayWords.length; i += 1) {
      //console.log("En el índice '" + i + "' hay este valor: " + arrayWords[i]);
      if(arrayWords[i]!=""){
      this.crearChipsParaOpciones(arrayWords[i]);}
    }
    this.dragdropText = "";
    //console.log(this.dragdropText);
  }

  crearChipsParaOpciones(word) {
    var auxChip = {
      chipName: "",
    };
    auxChip.chipName = word;
    this.optionsTextarea.push(auxChip);
  }

  drop3(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  //
}
