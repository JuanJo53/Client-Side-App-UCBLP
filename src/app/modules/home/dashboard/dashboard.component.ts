import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";


export interface ListaDeEstudiantes {
  nombre: string;
  posicion: number;
  p_nombre: string; //apellido paterno
  m_nombre: string; //pellido materno
  promedio: number;
  id: number;
}

const ELEMENT_DATA: ListaDeEstudiantes[] = [
  {
    posicion: 1,
    nombre: "Sergio",
    p_nombre: "Prudencio",
    m_nombre: "Flores",
    promedio: 90,
    id: 1,
  },
  {
    posicion: 2,
    nombre: "Ariel",
    p_nombre: "Colque",
    m_nombre: "Herrera",
    promedio: 90,
    id: 2,
  },
  {
    posicion: 3,
    nombre: "Sergio",
    p_nombre: "Prudencio",
    m_nombre: "Flores",
    promedio: 90,
    id: 3,
  },
  {
    posicion: 4,
    nombre: "Sergio",
    p_nombre: "Prudencio",
    m_nombre: "Flores",
    promedio: 90,
    id: 4,
  },
  {
    posicion: 5,
    nombre: "Ariel",
    p_nombre: "Colque",
    m_nombre: "Herrera",
    promedio: 90,
    id: 5,
  },
  {
    posicion: 6,
    nombre: "Sergio",
    p_nombre: "Prudencio",
    m_nombre: "Flores",
    promedio: 90,
    id: 6,
  },
  {
    posicion: 7,
    nombre: "Ariel",
    p_nombre: "Colque",
    m_nombre: "Herrera",
    promedio: 90,
    id: 7,
  },
  {
    posicion: 8,
    nombre: "Sergio",
    p_nombre: "Prudencio",
    m_nombre: "Flores",
    promedio: 90,
    id: 8,
  },
  {
    posicion: 9,
    nombre: "Ariel",
    p_nombre: "Colque",
    m_nombre: "Herrera",
    promedio: 90,
    id: 9,
  },
  {
    posicion: 10,
    nombre: "Sergio",
    p_nombre: "Prudencio",
    m_nombre: "Flores",
    promedio: 90,
    id: 10,
  },
  {
    posicion: 11,
    nombre: "Ariel",
    p_nombre: "Colque",
    m_nombre: "Herrera",
    promedio: 90,
    id: 11,
  },
];

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})

// export class DashboardComponent implements OnInit {
//     link="Dashboard";

//   constructor() { }

//   ngOnInit() {

//   }

// }
export class DashboardComponent implements OnInit {
  link = "Dashboard";

  displayedColumns: string[] = [
    "posicion",
    "nombre",
    "p_nombre",
    "m_nombre",
    "promedio",
    "id",
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // @ViewChild(MatPaginator)paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    //this.dataSource.paginator=this.paginator;
  }
  constructor() {}
}
