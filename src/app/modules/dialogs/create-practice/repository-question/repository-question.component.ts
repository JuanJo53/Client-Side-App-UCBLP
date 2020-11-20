import { Component, OnInit, Inject } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { MatTableDataSource } from "@angular/material/table";
import { Pregunta } from "src/app/models/Teacher/CreatePractice/Pregunta";
import { MatStepper } from "@angular/material/stepper";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RadioButtonQuestion } from 'src/app/models/Preguntas/RadioButton';
import { CheckboxQuestion } from 'src/app/models/Preguntas/Checkbox';

export interface ListaPreguntasPracticas {
  codigo: number;
  nivel: string;
  categoria: string;
  tipoPregunta: string;
  tipoRespuesta: string;
  habilidad: string;
  checkbox: number;
}

@Component({
  selector: "app-repository-question",
  templateUrl: "./repository-question.component.html",
  styleUrls: ["./repository-question.component.scss"],
})
export class RepositoryQuestionComponent implements OnInit {
  preguntaPaso2:Pregunta=new Pregunta();
  showSpinner = false;
  checked: boolean;  
  checkboxOpciones: CheckboxQuestion[] = [
    { isChecked: true ,opcionRespuesta:""},
  ];
  preguntas: Pregunta[] = [
  ];
  preguntasElegidas: Pregunta[] = [
  ];
  ELEMENT_DATA: ListaPreguntasPracticas[] = [
    {
      codigo: 1,
      nivel: "Level 1",
      categoria: "vegetables",
      tipoPregunta: "simple",
      tipoRespuesta: "multiple choice",
      habilidad: "reading",
      checkbox: 0,
    },
    {
      codigo: 2,
      nivel: "Level 1",
      categoria: "vegetables",
      tipoPregunta: "simple",
      tipoRespuesta: "multiple choice",
      habilidad: "reading",
      checkbox: 0,
    },
    {
      codigo: 3,
      nivel: "Level 1",
      categoria: "vegetables",
      tipoPregunta: "simple",
      tipoRespuesta: "multiple choice",
      habilidad: "reading",
      checkbox: 0,
    },
  ];
  displayedColumns: string[] = [
    "nivel",
    "tipoPregunta",
    "tipoRespuesta",
    "codigo",
    "checkbox",
  ];
  
  dataSource = new MatTableDataSource(this.preguntas);
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  nivelIngles: string[] = ["Level 1", "Level 2", "Level 3", "Level 4"];
  tipoCategoriasRepositorio: string[] = ["Animals", "Vegetables", "Technology"];
  tipoPreguntasRepositorio: string[] = ["Simple", "Drag and Drop"];
  tipoRespuestasRepositorio: string[] = ["One choice", "Multiple choices", "Columns", "Fill in the blanks", "Combobox's"];
  tipoHabilidadRepositorio: string[] = [
    "Listening",
    "Reading",
    "Wrinting",
    "Grammar",
    "Speaking",
  ];
  valueNivelIngles: string;
  valueTipoCategoria: string;
  valueTipoRespuesta: string;
  valueTipoPregunta: string;
  valueTipoHabilidad: string;

  myControl = new FormControl();
  options: string[] = ["One", "Two", "Three"];
  filteredOptions: Observable<string[]>;
  constructor(private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public dataDialog: any,
    private dialogRef: MatDialogRef<RepositoryQuestionComponent>) {}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ["", Validators.required],
    });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map((value) => this._filter(value))
    );
    this.cargarDatosSQL(this.dataDialog["repository"]);
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(
      (option) => option.toLowerCase().indexOf(filterValue) === 0
    );
  }
  // funciones
  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
  }
  irPasoDos(stepper: MatStepper, codigo: number) {
    this.preguntaPaso2=this.preguntas[codigo];
    stepper.next();
  }
  irPasoTres(stepper: MatStepper) {
    this.preguntasElegidas=[];
    var elegido=false;
    for(let i in this.checkboxOpciones){
      if(this.checkboxOpciones[i].isChecked){
        elegido=true;
        this.preguntasElegidas.push(this.preguntas[i]);
      }
    }
    if(elegido){
      stepper.selectedIndex = 2;
    }
  }
  volverPasoUno(stepper: MatStepper) {
    stepper.selectedIndex = 0;
  }
  cargarRespuestasBool(nuevaPregunta:Pregunta){
    nuevaPregunta.respuestasBool=[];
    for(let opcion of nuevaPregunta.opciones ){
      nuevaPregunta.respuestasBool.push(false);
    }
    for(let respuesta of nuevaPregunta.respuesta ){
      nuevaPregunta.respuestasBool[respuesta]=true;
    }
  }
  cargarDatos(data){
    this.checkboxOpciones=[];
    for(let pregunta of data){
      this.checkboxOpciones.push({isChecked:false,opcionRespuesta:""})
      let nuevaPregunta=new Pregunta();
      nuevaPregunta.idTipoPregunta=String(pregunta.id_tipo_pregunta);
      nuevaPregunta.idTipoRespuesta=String(pregunta.id_tipo_respuesta);
      nuevaPregunta.pregunta=pregunta.pregunta.pregunta;
      nuevaPregunta.id=pregunta.id_pregunta;
      nuevaPregunta.respuesta=pregunta.pregunta.respuestas;
      nuevaPregunta.opciones=pregunta.pregunta.opciones;
      nuevaPregunta.idHabilidad=pregunta.id_habilidad;
      nuevaPregunta.puntuacion=10;
      nuevaPregunta.tipo=1;
      console.log(nuevaPregunta);
      this.cargarRespuestasBool(nuevaPregunta);
      this.preguntas.push(nuevaPregunta)
    }
  }
  cargarDatosSQL(data){
    this.checkboxOpciones=[];
    for(let pregunta of data){
      this.checkboxOpciones.push({isChecked:false,opcionRespuesta:""})
      let nuevaPregunta=new Pregunta();
      nuevaPregunta.idTipoPregunta=String(pregunta.id_tipo_pregunta);
      nuevaPregunta.idTipoRespuesta=String(pregunta.id_tipo_respuesta);
      nuevaPregunta.pregunta=pregunta.pregunta;
      nuevaPregunta.id=pregunta.id_pregunta;
      nuevaPregunta.respuesta=pregunta.respuesta;
      nuevaPregunta.opciones=pregunta.opciones;
      nuevaPregunta.idHabilidad=pregunta.id_habilidad;
      nuevaPregunta.puntuacion=10;
      nuevaPregunta.tipo=1;
      console.log(nuevaPregunta);
      this.cargarRespuestasBool(nuevaPregunta);
      this.preguntas.push(nuevaPregunta)
    }
  }
  aceptar(){
    this.dialogRef.close(this.preguntasElegidas);
  }
  cancelar(){
    this.dialogRef.close();
  }
}
