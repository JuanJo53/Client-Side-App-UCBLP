import { Component, OnInit } from "@angular/core";
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
  showSpinner = false;
  checked: boolean;
  preguntas: Pregunta[] = [
    {
      tipo: true,
      numeroPreg: 1,
      puntuacion: 30,
      pregunta: "abc",
      opciones: ["a", "b"],
      grupo: "1",
      respuesta: [1, 0],
      respuestasBool: [true, false],
      idTipoPregunta: "1",
      idTipoRespuesta: "1",
      recurso: "",
      bloqpunt: false,
      bloqpreg: false,
      bloqopci: false,
      bloqidtp: false,
      bloqidtr: false,
    },
    {
      tipo: true,
      numeroPreg: 2,
      puntuacion: 30,
      pregunta: "def2",
      opciones: ["c", "d"],
      grupo: "2",
      respuesta: [0, 0],
      respuestasBool: [true, false],
      idTipoPregunta: "2",
      idTipoRespuesta: "2",
      recurso: "",
      bloqpunt: false,
      bloqpreg: false,
      bloqopci: false,
      bloqidtp: false,
      bloqidtr: false,
    },
    {
      tipo: true,
      numeroPreg: 3,
      puntuacion: 40,
      pregunta: "def3",
      opciones: ["ff", "dd"],
      grupo: "2",
      respuesta: [0, 1],
      respuestasBool: [true, false],
      idTipoPregunta: "2",
      idTipoRespuesta: "1",
      recurso: "",
      bloqpunt: false,
      bloqpreg: false,
      bloqopci: false,
      bloqidtp: false,
      bloqidtr: false,
    },
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
    "categoria",
    "tipoPregunta",
    "tipoRespuesta",
    "habilidad",
    "codigo",
    "checkbox",
  ];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  nivelIngles: string[] = ["Level 1", "Level 2", "Level 3", "Level 4"];
  tipoCategoriasRepositorio: string[] = ["Animals", "Vegetables", "Technology"];
  tipoPreguntasRepositorio: string[] = ["Simple", "Drag and Drop"];
  tipoRespuestasRepositorio: string[] = ["One choice", "Multiple choices"];
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
  constructor(private _formBuilder: FormBuilder) {}

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
    console.log("codigo : " + codigo);
    stepper.next();
  }
  irPasoTres(stepper: MatStepper) {
    stepper.selectedIndex = 2;
  }
  volverPasoUno(stepper: MatStepper) {
    stepper.selectedIndex = 0;
  }
}
