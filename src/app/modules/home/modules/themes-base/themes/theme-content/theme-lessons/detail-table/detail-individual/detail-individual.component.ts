import { Component, OnInit } from "@angular/core";
import { Pregunta } from "src/app/models/Teacher/CreatePractice/Pregunta";
@Component({
  selector: "app-detail-individual",
  templateUrl: "./detail-individual.component.html",
  styleUrls: ["./detail-individual.component.scss"],
})
export class DetailIndividualComponent implements OnInit {
  preguntas: Pregunta[] = [
    {
      id:1,
      nivel:3,
      tipo: 1,
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
      id:1,
      nivel:3,
      tipo: 1,
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
      id:1,
      nivel:3,
      tipo: 1,
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
  constructor() {}

  ngOnInit(): void {}
}
