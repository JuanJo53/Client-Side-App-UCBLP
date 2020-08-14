import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Router, ActivatedRoute } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
export interface ListaDeNotas {
  posicion: number;
  p_nombre: string; //apellido paterno
  m_nombre: string; //pellido materno
  nombre: string;
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
];

@Component({
  selector: "app-detail-assessments",
  templateUrl: "./detail-assessments.component.html",
  styleUrls: ["./detail-assessments.component.scss"],
})
export class DetailAssessmentsComponent implements OnInit {
  displayedColumns: string[] = [
    "posicion",
    "p_nombre",
    "m_nombre",
    "nombre",
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
    this.router.navigate(["individual-test"], { relativeTo: this.route });
  }
}
