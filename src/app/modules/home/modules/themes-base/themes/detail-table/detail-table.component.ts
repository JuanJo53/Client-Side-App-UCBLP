import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Router, ActivatedRoute } from "@angular/router";
export interface ListaDeNotas {
  nombre: string;
  posicion: number;
  p_nombre: string; //apellido paterno
  m_nombre: string; //pellido materno
  pregunta1: string;
  pregunta2: string;
  pregunta3: string;
  pregunta4: string;
  pregunta5: string;
  promedioFinal: number;
  id: number;
}

const ELEMENT_DATA: ListaDeNotas[] = [
  {
    posicion: 1,
    nombre: "Sergio",
    p_nombre: "Prudencio",
    m_nombre: "Flores",
    pregunta1: "20/20",
    pregunta2: "20/20",
    pregunta3: "30/30",
    pregunta4: "10/10",
    pregunta5: "20/20",
    promedioFinal: 100,
    id: 1,
  },
  {
    posicion: 2,
    nombre: "Ariel",
    p_nombre: "Colque",
    m_nombre: "Herrera",
    pregunta1: "10/20",
    pregunta2: "15/20",
    pregunta3: "10/30",
    pregunta4: "10/10",
    pregunta5: "20/20",
    promedioFinal: 55,
    id: 2,
  },
  {
    posicion: 3,
    nombre: "Ernesto",
    p_nombre: "Vilela",
    m_nombre: "Montero",
    pregunta1: "20/20",
    pregunta2: "20/20",
    pregunta3: "30/30",
    pregunta4: "10/10",
    pregunta5: "20/20",
    promedioFinal: 100,
    id: 3,
  },
];
@Component({
  selector: "app-detail-table",
  templateUrl: "./detail-table.component.html",
  styleUrls: ["./detail-table.component.scss"],
})
export class DetailTableComponent implements OnInit {
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
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
  verDetalles() {
    this.router.navigate(["individual"], { relativeTo: this.route });
  }
}
