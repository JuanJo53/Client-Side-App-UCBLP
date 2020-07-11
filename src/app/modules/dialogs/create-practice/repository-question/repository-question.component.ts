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

export interface ListaDeEstudiantes {
  nombre: string;
  posicion: number;
  p_nombre: string; //apellido paterno
  m_nombre: string; //pellido materno
  promedio: number;
  id: number;
}

@Component({
  selector: "app-repository-question",
  templateUrl: "./repository-question.component.html",
  styleUrls: ["./repository-question.component.scss"],
})
export class RepositoryQuestionComponent implements OnInit {
  ELEMENT_DATA: ListaDeEstudiantes[] = [
    {
      nombre: "ariel",
      posicion: 5,
      p_nombre: "ads", //apellido paterno
      m_nombre: "ads", //pellido materno
      promedio: 76,
      id: 4,
    },
    {
      nombre: "ariel",
      posicion: 5,
      p_nombre: "ads", //apellido paterno
      m_nombre: "ads", //pellido materno
      promedio: 76,
      id: 4,
    },
    {
      nombre: "ariel",
      posicion: 5,
      p_nombre: "ads", //apellido paterno
      m_nombre: "ads", //pellido materno
      promedio: 76,
      id: 4,
    },
    {
      nombre: "ariel",
      posicion: 5,
      p_nombre: "ads", //apellido paterno
      m_nombre: "ads", //pellido materno
      promedio: 76,
      id: 4,
    },
    {
      nombre: "ariel",
      posicion: 5,
      p_nombre: "ads", //apellido paterno
      m_nombre: "ads", //pellido materno
      promedio: 76,
      id: 4,
    },
    {
      nombre: "ariel",
      posicion: 5,
      p_nombre: "ads", //apellido paterno
      m_nombre: "ads", //pellido materno
      promedio: 76,
      id: 4,
    },
    {
      nombre: "ariel",
      posicion: 5,
      p_nombre: "ads", //apellido paterno
      m_nombre: "ads", //pellido materno
      promedio: 76,
      id: 4,
    },
    {
      nombre: "ariel",
      posicion: 5,
      p_nombre: "ads", //apellido paterno
      m_nombre: "ads", //pellido materno
      promedio: 76,
      id: 4,
    },
    {
      nombre: "ariel",
      posicion: 5,
      p_nombre: "ads", //apellido paterno
      m_nombre: "ads", //pellido materno
      promedio: 76,
      id: 4,
    },
    {
      nombre: "ariel",
      posicion: 5,
      p_nombre: "ads", //apellido paterno
      m_nombre: "ads", //pellido materno
      promedio: 76,
      id: 4,
    },
    {
      nombre: "ariel",
      posicion: 5,
      p_nombre: "ads", //apellido paterno
      m_nombre: "ads", //pellido materno
      promedio: 76,
      id: 4,
    },
    {
      nombre: "ariel",
      posicion: 5,
      p_nombre: "ads", //apellido paterno
      m_nombre: "ads", //pellido materno
      promedio: 76,
      id: 4,
    },
    {
      nombre: "ariel",
      posicion: 5,
      p_nombre: "ads", //apellido paterno
      m_nombre: "ads", //pellido materno
      promedio: 76,
      id: 4,
    },
    {
      nombre: "ariel",
      posicion: 5,
      p_nombre: "ads", //apellido paterno
      m_nombre: "ads", //pellido materno
      promedio: 76,
      id: 4,
    },
  ];
  displayedColumns: string[] = [
    "posicion",
    "nombre",
    "p_nombre",
    "m_nombre",
    "promedio",
    "id",
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
}
