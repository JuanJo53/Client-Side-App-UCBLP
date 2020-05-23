import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
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
  id: number;
}
const ELEMENT_DATA: ListaAsistencia[] = [
  {
    posicion: 1,
    nombre: "Sergio",
    p_nombre: "Prudencio",
    m_nombre: "Flores",
    promedioFinal: 90,
    id: 1,
  },
]

@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.component.html',
  styleUrls: ['./assistance.component.scss']
})
export class AssistanceComponent implements OnInit {
  displayedColumns: string[] = [
    "posicion",
    "nombre",
    "p_nombre",
    "m_nombre",
    "id",
    "id",
    "id",
    "id",
    "id",
    "id",
    "id",
    "id",
    "id",
    "id",
    "id",
    "id",
    "id",
    "id",
    "id",
    "id",
    "id",
    "id",
    "id",
    "id",
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
