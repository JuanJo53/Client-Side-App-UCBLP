import { Component, OnInit } from '@angular/core';
import { OtherScoreSection  } from "../../../../../../models/ScoreSection/OtherScoreSection";
export interface Lista {
  
  nombre: string;
  nota: number;
  acciones: number;
}

@Component({
  selector: 'app-others-score',
  templateUrl: './others-score.component.html',
  styleUrls: ['./others-score.component.scss']
})
export class OthersScoreComponent implements OnInit {
  ListaNotasAsistencia: OtherScoreSection[] = [
    {
      Nombre: "Theme1 Practices",
      OtherScoreContent: [
        {
          nombre: "Restaurant",
          nota: 90.8,
          acciones: 1,
        },
        {
          nombre: "Tecnology",
          nota: 90.5,
          acciones: 1,
        },
       
      ],
    },
    {
      Nombre: "Theme2 Practices",
      OtherScoreContent: [
        {
          nombre: "Animals",
          nota: 90,
          acciones: 1,
          
        },
        {
          nombre: "Kids",
          nota: 90,
          acciones: 1,
       
        },
        {
          nombre: "Restaurant",
          nota: 90,
          acciones: 1,
        },
        {
          nombre: "Tecnology",
          nota: 90,
          acciones: 1,
        },
       
      ],
    },
  ]
  displayedColumns: string[] = ["nombre", "nota","acciones"];
  constructor() { }

  ngOnInit(): void {
  }

}
