import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { Router, ActivatedRoute } from "@angular/router";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { TitleCasePipe } from "@angular/common";
export interface ListaDeNotas {
  nombre: string;
  posicion: number;
  p_nombre: string; //apellido paterno
  m_nombre: string; //pellido materno
  asistencia: number;
  actividades: number;
  practicas: number;
  examenTemas: number;
  assessment: number;
  promedioFinal: number;
  id: number;
}

const ELEMENT_DATA: ListaDeNotas[] = [
  {
    posicion: 1,
    nombre: "Sergio",
    p_nombre: "Prudencio",
    m_nombre: "Flores",
    asistencia: 4.95,
    actividades: 9.9,
    practicas: 19.5,
    examenTemas: 18.9,
    assessment: 44.95,
    promedioFinal: 90,
    id: 1,
  },
  {
    posicion: 2,
    nombre: "Ariel",
    p_nombre: "Colque",
    m_nombre: "Herrera",
    asistencia: 4.95,
    actividades: 9.9,
    practicas: 19.5,
    examenTemas: 18.9,
    assessment: 44.95,
    promedioFinal: 90,
    id: 2,
  },
  {
    posicion: 3,
    nombre: "Ernesto",
    p_nombre: "Vilela",
    m_nombre: "Montero",
    asistencia: 4.95,
    actividades: 9.9,
    practicas: 19.5,
    examenTemas: 18.9,
    assessment: 44.95,
    promedioFinal: 90,
    id: 3,
  },
  {
    posicion: 4,
    nombre: "Alvil",
    p_nombre: "Poma",
    m_nombre: "Tarqui",
    asistencia: 4.95,
    actividades: 9.9,
    practicas: 19.5,
    examenTemas: 18.9,
    assessment: 44.95,
    promedioFinal: 90,
    id: 4,
  },
  {
    posicion: 5,
    nombre: "Juan Jose",
    p_nombre: "Fernandez",
    m_nombre: "Duarte",
    asistencia: 4.95,
    actividades: 9.9,
    practicas: 19.5,
    examenTemas: 18.9,
    assessment: 44.95,
    promedioFinal: 90,
    id: 5,
  },
  {
    posicion: 6,
    nombre: "Sergio",
    p_nombre: "Prudencio",
    m_nombre: "Flores",
    asistencia: 4.95,
    actividades: 9.9,
    practicas: 19.5,
    examenTemas: 18.9,
    assessment: 44.95,
    promedioFinal: 90,
    id: 6,
  },
  {
    posicion: 7,
    nombre: "Juan Jose",
    p_nombre: "Fernandez",
    m_nombre: "Duarte",
    asistencia: 4.95,
    actividades: 9.9,
    practicas: 19.5,
    examenTemas: 18.9,
    assessment: 44.95,
    promedioFinal: 90,
    id: 7,
  },
  {
    posicion: 8,
    nombre: "Ariel",
    p_nombre: "Colque",
    m_nombre: "Herrera",
    asistencia: 4.95,
    actividades: 9.9,
    practicas: 19.5,
    examenTemas: 18.9,
    assessment: 44.95,
    promedioFinal: 90,
    id: 8,
  },
  {
    posicion: 9,
    nombre: "Ernesto",
    p_nombre: "Vilela",
    m_nombre: "Montero",
    asistencia: 4.95,
    actividades: 9.9,
    practicas: 19.5,
    examenTemas: 18.9,
    assessment: 44.95,
    promedioFinal: 90,
    id: 9,
  },
  {
    posicion: 10,
    nombre: "Alvil",
    p_nombre: "Poma",
    m_nombre: "Tarqui",
    asistencia: 4.95,
    actividades: 9.9,
    practicas: 19.5,
    examenTemas: 18.9,
    assessment: 44.95,
    promedioFinal: 90,
    id: 10,
  },
  {
    posicion: 11,
    nombre: "Juan Jose",
    p_nombre: "Fernandez",
    m_nombre: "Duarte",
    asistencia: 4.95,
    actividades: 9.9,
    practicas: 19.5,
    examenTemas: 18.9,
    assessment: 44.95,
    promedioFinal: 90,
    id: 11,
  },
  {
    posicion: 12,
    nombre: "Sergio",
    p_nombre: "Prudencio",
    m_nombre: "Flores",
    asistencia: 4.95,
    actividades: 9.9,
    practicas: 19.5,
    examenTemas: 18.9,
    assessment: 44.95,
    promedioFinal: 90,
    id: 12,
  },
  {
    posicion: 13,
    nombre: "Ariel",
    p_nombre: "Colque",
    m_nombre: "Herrera",
    asistencia: 4.95,
    actividades: 9.9,
    practicas: 19.5,
    examenTemas: 18.9,
    assessment: 44.95,
    promedioFinal: 90,
    id: 13,
  },
  {
    posicion: 14,
    nombre: "Ernesto",
    p_nombre: "Vilela",
    m_nombre: "Montero",
    asistencia: 4.95,
    actividades: 9.9,
    practicas: 19.5,
    examenTemas: 18.9,
    assessment: 44.95,
    promedioFinal: 90,
    id: 14,
  },
  {
    posicion: 15,
    nombre: "Alvil",
    p_nombre: "Poma",
    m_nombre: "Tarqui",
    asistencia: 4.95,
    actividades: 9.9,
    practicas: 19.5,
    examenTemas: 18.9,
    assessment: 44.95,
    promedioFinal: 90,
    id: 15,
  },
  {
    posicion: 16,
    nombre: "Juan Jose",
    p_nombre: "Fernandez",
    m_nombre: "Duarte",
    asistencia: 4.95,
    actividades: 9.9,
    practicas: 19.5,
    examenTemas: 18.9,
    assessment: 44.95,
    promedioFinal: 90,
    id: 16,
  },
  {
    posicion: 17,
    nombre: "Sergio",
    p_nombre: "Prudencio",
    m_nombre: "Flores",
    asistencia: 4.95,
    actividades: 9.9,
    practicas: 19.5,
    examenTemas: 18.9,
    assessment: 44.95,
    promedioFinal: 90,
    id: 17,
  },
  {
    posicion: 18,
    nombre: "Ariel",
    p_nombre: "Colque",
    m_nombre: "Herrera",
    asistencia: 4.95,
    actividades: 9.9,
    practicas: 19.5,
    examenTemas: 18.9,
    assessment: 44.95,
    promedioFinal: 90,
    id: 18,
  },
  {
    posicion: 19,
    nombre: "Ernesto",
    p_nombre: "Vilela",
    m_nombre: "Montero",
    asistencia: 4.95,
    actividades: 9.9,
    practicas: 19.5,
    examenTemas: 18.9,
    assessment: 44.95,
    promedioFinal: 90,
    id: 19,
  },
  {
    posicion: 20,
    nombre: "Alvil",
    p_nombre: "Poma",
    m_nombre: "Tarqui",
    asistencia: 4.95,
    actividades: 9.9,
    practicas: 19.5,
    examenTemas: 18.9,
    assessment: 44.95,
    promedioFinal: 90,
    id: 20,
  },
];

@Component({
  selector: "app-qualification",
  templateUrl: "./qualification.component.html",
  styleUrls: ["./qualification.component.scss"],
})
export class QualificationComponent implements OnInit {
  displayedColumns: string[] = [
    "posicion",
    "nombre",
    "p_nombre",
    "m_nombre",
    "asistencia",
    "actividades",
    "practicas",
    "examenTemas",
    "assessment",
    "promedioFinal",
    "id",
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  irPerfilEstudiante() {
    console.log("ir a perfil de estudiante");
    this.router.navigate(["profile-students"], { relativeTo: this.route });
  }
}
