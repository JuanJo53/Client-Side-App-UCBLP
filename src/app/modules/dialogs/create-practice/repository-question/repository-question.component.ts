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
  preguntas: Pregunta[] = [];
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
      codigo: 1,
      nivel: "Level 1",
      categoria: "vegetables",
      tipoPregunta: "simple",
      tipoRespuesta: "multiple choice",
      habilidad: "reading",
      checkbox: 0,
    },
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
      codigo: 1,
      nivel: "Level 1",
      categoria: "vegetables",
      tipoPregunta: "simple",
      tipoRespuesta: "multiple choice",
      habilidad: "reading",
      checkbox: 0,
    },
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
      codigo: 1,
      nivel: "Level 1",
      categoria: "vegetables",
      tipoPregunta: "simple",
      tipoRespuesta: "multiple choice",
      habilidad: "reading",
      checkbox: 0,
    },
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
      codigo: 1,
      nivel: "Level 1",
      categoria: "vegetables",
      tipoPregunta: "simple",
      tipoRespuesta: "multiple choice",
      habilidad: "reading",
      checkbox: 0,
    },
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
      codigo: 1,
      nivel: "Level 1",
      categoria: "vegetables",
      tipoPregunta: "simple",
      tipoRespuesta: "multiple choice",
      habilidad: "reading",
      checkbox: 0,
    },
    {
      codigo: 1,
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
}
