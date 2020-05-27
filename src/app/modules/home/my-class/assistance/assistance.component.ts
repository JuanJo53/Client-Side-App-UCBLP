import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { ComboMes } from "src/app/models/comboMes";

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";

export interface ListaAsistencia {
  nombre: string;
  posicion: number;
  p_nombre: string; //apellido paterno
  m_nombre: string; //pellido materno
  promedioFinal: number;
  asistencia: number;
}
const ELEMENT_DATA: ListaAsistencia[] = [
  {
    posicion: 1,
    nombre: "Sergio",
    p_nombre: "Prudencio",
    m_nombre: "Flores",
    promedioFinal: 90,
    asistencia: 1,
  },
  {
    posicion: 2,
    nombre: "Ariel",
    p_nombre: "Colque",
    m_nombre: "Herrera",
    promedioFinal: 90,
    asistencia: 0,
  },
];

@Component({
  selector: "app-assistance",
  templateUrl: "./assistance.component.html",
  styleUrls: ["./assistance.component.scss"],
})
export class AssistanceComponent implements OnInit {
  selectedValue: string;
  foods: ComboMes[] = [
    { value: "Enero", display: "Enero" },
    { value: "Febrero", display: "Febrero" },
    { value: "Marzo", display: "Marzo" },
  ];
  displayedColumns: string[] = [
    "posicion",
    "nombre",
    "p_nombre",
    "m_nombre",
    "asistencia",
    "promedioFinal",
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor() {}

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
