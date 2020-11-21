import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Router, ActivatedRoute } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { UpdateStudentScoreComponent } from "src/app/modules/dialogs/custom-modules/update-student-score/update-student-score.component";
import { NotasContenidoModulo } from "src/app/models/Teacher/Modules/NotasContenidoModulo";
import { ExportExcelService } from "src/app/_services/export-excel.service";
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: "app-detail-custom-module",
  templateUrl: "./detail-custom-module.component.html",
  styleUrls: ["./detail-custom-module.component.scss"],
})
export class DetailCustomModuleComponent implements OnInit {
  titulo: string = "";
  ELEMENT_DATA: NotasContenidoModulo[] = [];
  displayedColumns: string[] = [
    "posicion",
    "p_nombre",
    "m_nombre",
    "nombre",
    "puntuacion",
    "id",
  ];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild("TABLE", { static: false }) TABLE: ElementRef;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private exc: ExportExcelService
  ) {}
  ExportExcel() {
    let element = document.getElementById("TABLE");
    this.exc.export(
      element,
      "ContentModule Notes",
      this.displayedColumns.length
    );
  }
  cargarTitulo(data: any[]) {
    if (data.length != 0) {
      this.titulo = data[0].nombre_modulo;
    }
  }
  cargarDatos() {
    this.route.data.subscribe({
      next: (data) => {
        if (data.notasContenido.status == 200) {
          this.cargarTitulo(data.notasContenido.body);
          for (let i in data.notasContenido.body) {
            var nota = data.notasContenido.body[i];
            let newCont = new NotasContenidoModulo();
            newCont.id = nota.id_nota_contenido;
            newCont.m_nombre = nota.ap_materno_alumno;
            newCont.nombre = nota.nombre_alumno;
            newCont.p_nombre = nota.ap_paterno_alumno;
            newCont.puntuacion = nota.nota_contenido;
            newCont.posicion = Number(i) + 1;
            this.ELEMENT_DATA.push(newCont);
          }
          
          this.dataSource.data = this.ELEMENT_DATA;
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnInit(): void {
    this.cargarDatos();
  }

  actualizarPuntuacion(nota) {
    const dialogRef = this.dialog.open(UpdateStudentScoreComponent, {
      width: "400px",
      data: {
        notasContenido: nota,
      },
    });
  }
}
