import { Component, OnInit } from '@angular/core';
import { AttendanceScoreSection  } from "../../../../../../models/ScoreSection/AttendanceScoreSection";

export interface ListaDeAsistenciaNota {
  
  periodo: string;
  fecha: string;
  asistencia: string;
  acciones: string;
}

@Component({
  selector: 'app-attendance-score',
  templateUrl: './attendance-score.component.html',
  styleUrls: ['./attendance-score.component.scss']
})
export class AttendanceScoreComponent implements OnInit {
  ListaNotasAsistencia: AttendanceScoreSection[] = [
    {
      nombreMes: "February",
      AttendanceScoreContent: [
        {
          periodo: "First Period",
          fecha: "2/2/2020",
          asistencia: 1,
          acciones: 1,
        },
        {
          periodo: "First Period",
          fecha: "2/2/2020",
          asistencia: 1,
          acciones: 1,
        },
        {
          periodo: "First Period",
          fecha: "2/2/2020",
          asistencia: 1,
          acciones: 1,
        },
        {
          periodo: "First Period",
          fecha: "2/2/2020",
          asistencia: 0,
          acciones: 1,
        },
        {
          periodo: "First Period",
          fecha: "2/2/2020",
          asistencia: 0,
          acciones: 1,
        },
      ],
    },
    {
      nombreMes: "March",
      AttendanceScoreContent: [
        {
          periodo: "First Period",
          fecha: "2/2/2020",
          asistencia: 1,
          acciones: 1,
        },
        {
          periodo: "First Period",
          fecha: "2/2/2020",
          asistencia: 1,
          acciones: 1,
        },
        {
          periodo: "First Period",
          fecha: "2/2/2020",
          asistencia: 1,
          acciones: 1,
        },
        {
          periodo: "First Period",
          fecha: "2/2/2020",
          asistencia: 0,
          acciones: 1,
        },
        {
          periodo: "First Period",
          fecha: "2/2/2020",
          asistencia: 0,
          acciones: 1,
        },
      ],
    },
  ];
  constructor() { }
  checked = true;
  disabled = true;
  displayedColumns: string[] = ["periodo", "fecha", "asistencia","acciones"];
  ngOnInit(): void {
  }

}
