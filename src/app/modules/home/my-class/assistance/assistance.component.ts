import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { Combo } from "src/app/models/combo";

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { CdkColumnDef } from "@angular/cdk/table";
import { TokenStorageService } from "src/app/_services/general_services/token-storage.service";
import { Router, ActivatedRoute } from "@angular/router";
import { MyClassService } from "src/app/_services/teacher_services/my-class.service";
import { Timestamp } from "rxjs/internal/operators/timestamp";
import { Asistencia } from "src/app/models/Teacher/MyClass/Asistencia";
import { SharedService } from "src/app/shared/shared.service";
export interface ListaAsistencia {
  nombre: string;
  posicion: number;
  p_nombre: string; //apellido paterno
  m_nombre: string; //pellido materno
  promedioFinal: number;
  asistencia: number;
}

@Component({
  selector: "app-assistance",
  templateUrl: "./assistance.component.html",
  styleUrls: ["./assistance.component.scss"],
})
export class AssistanceComponent implements OnInit {
  link: string = "My class / Attendance";
  columns: string[] = [];
  ELEMENT_DATA: Asistencia[] = [];
  selectedValue: string;
  foods: Combo[] = [];
  idCurso: string;
  month: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  selected: string;

  periodos: Combo[] = [
    { value: "1", display: "1st Period" },
    { value: "2", display: "2nd Period" },
    { value: "3", display: "3rd Period" },
  ];
  displayedColumns: any[] = ["posicion", "nombre", "p_nombre", "m_nombre"];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private tokenServ: TokenStorageService,
    private router: Router,
    private stService: ActivatedRoute,
    private assiEst: MyClassService,
    private data: SharedService
  ) {}

  anadirTabla(data) {
    if (data.length > 0) {
      for (let dat of data[0].asistencia) {
        this.columns.push(String(dat.dia));
      }
      this.displayedColumns = this.columns.map((col) => col);
      this.displayedColumns.splice(0, 0, "m_nombre");
      this.displayedColumns.splice(0, 0, "p_nombre");
      this.displayedColumns.splice(0, 0, "nombre");
      this.displayedColumns.splice(0, 0, "posicion");
      console.log(this.columns);
      console.log(this.displayedColumns);

      this.displayedColumns.push("promedioFinal");
    }
    for (let i in data) {
      let newAsis = new Asistencia();
      newAsis.nombreAlumno = data[i].nombre_alumno;
      newAsis.apMaternoAlumno = data[i].ap_materno_alumno;
      newAsis.apPaternoAlumno = data[i].ap_paterno_alumno;
      var a = [];
      var prom = 0;
      const porcen = 100 / data[0].asistencia.length;
      for (let asis of data[i].asistencia) {
        a.push(asis.asistencia);
        if (asis.asistencia == 1) {
          prom += porcen;
        }
      }
      newAsis.asistencia = a;
      newAsis.promedio = String(prom.toPrecision(3));
      newAsis.posicion = Number(i) + 1;
      this.ELEMENT_DATA.push(newAsis);
    }
    this.dataSource.data = this.ELEMENT_DATA;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  getLista(fecha) {
    this.stService.parent.parent.params.subscribe((param) => {
      this.idCurso = param["idCurso"];
      this.assiEst.getAlumnossAsistencia(this.idCurso, fecha).subscribe({
        next: (data) => {
          if (data.status == 200) {
            console.log(data);
            this.anadirTabla(data.body);
          } else {
            console.log(data);
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
    });
  }
  crearNuevaClase() {
    this.stService.parent.parent.params.subscribe((param) => {
      this.idCurso = param["idCurso"];
      this.assiEst.crearClase(this.idCurso).subscribe({
        next: (data) => {
          if (data.status == 200) {
            console.log(data);
          } else {
            console.log(data);
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
    });
  }
  ngOnInit(): void {
    this.data.changeMessage(this.link);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.stService.data.subscribe({
      next: (data) => {
        if (data.fechas.status == 200) {
          console.log(data.fechas);
          for (let i in data.fechas.body) {
            this.foods.push({
              value: data.fechas.body[i].mes,
              display: this.month[data.fechas.body[i].mes - 1],
            });
          }

          //this.crearNuevaClase();
        } else {
          console.log("Error");
        }
      },
      error: (error) => {
        console.log("Error");
      },
    });
  }
  agregarAsistenia() {
    console.log("add assitance");
  }
  changeMonth() {
    this.getLista(Number(this.selected));
  }
}
