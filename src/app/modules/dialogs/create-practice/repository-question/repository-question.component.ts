import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
export class HorarioClase {
  dia: string;
  horaComienzo: string;
  horaFinaliza: string;
}
@Component({
  selector: "app-repository-question",
  templateUrl: "./repository-question.component.html",
  styleUrls: ["./repository-question.component.scss"],
})
export class RepositoryQuestionComponent implements OnInit {
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
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required],
    });
  }
}
