import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Router, ActivatedRoute } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { UpdateStudentScoreComponent } from "src/app/modules/dialogs/custom-modules/update-student-score/update-student-score.component";
export interface ListaDeNotas {
  nombre: string;
  posicion: number;
  p_nombre: string; //apellido paterno
  m_nombre: string; //pellido materno
  puntuacion: string;
  id: number;
}

const ELEMENT_DATA: ListaDeNotas[] = [
  {
    posicion: 1,
    nombre: "Sergio",
    p_nombre: "Prudencio",
    m_nombre: "Flores",
    puntuacion: "100",
    id: 1,
  },
  {
    posicion: 2,
    nombre: "Ariel",
    p_nombre: "Colque",
    m_nombre: "Herrera",
    puntuacion: "100",
    id: 2,
  },
  {
    posicion: 3,
    nombre: "Ernesto",
    p_nombre: "Vilela",
    m_nombre: "Montero",
    puntuacion: "100",
    id: 3,
  },
];

@Component({
  selector: "app-detail-custom-module",
  templateUrl: "./detail-custom-module.component.html",
  styleUrls: ["./detail-custom-module.component.scss"],
})
export class DetailCustomModuleComponent implements OnInit {
  displayedColumns: string[] = [
    "posicion",
    "nombre",
    "p_nombre",
    "m_nombre",
    "puntuacion",
    "id",
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  actualizarPuntuacion() {
    const dialogRef = this.dialog.open(UpdateStudentScoreComponent, {
      width: "400px",
    });
  }
}
