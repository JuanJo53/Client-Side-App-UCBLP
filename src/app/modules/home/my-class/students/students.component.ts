import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { AddStudentComponent } from "../../../dialogs/students/add-student/add-student.component";
import { EditStudentComponent } from "../../../dialogs/students/edit-student/edit-student.component";
import { DeleteCardComponent } from "../../../dialogs/delete-card/delete-card.component";
import { DeleteItemService } from "../../../../services/dialogs/delete-item.service";
import { TokenStorageService } from "src/app/_services/general_services/token-storage.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ListaEstudiante } from "src/app/models/Teacher/MyClass/ListaEstudiante";
import { MyClassService } from "src/app/_services/teacher_services/my-class.service";
import { THIS_EXPR, IfStmt } from "@angular/compiler/src/output/output_ast";

export interface ListaDeEstudiantes {
  nombre: string;
  posicion: number;
  p_nombre: string; //apellido paterno
  m_nombre: string; //pellido materno
  promedio: number;
  id: number;
}

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.scss"],
})
export class StudentsComponent implements OnInit {
  ELEMENT_DATA: ListaEstudiante[] = [];
  item: string = "student";
  displayedColumns: string[] = [
    "posicion",
    "nombre",
    "p_nombre",
    "m_nombre",
    "promedio",
    "id",
  ];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // @ViewChild(MatPaginator)paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private data: DeleteItemService,
    private tokenServ: TokenStorageService,
    private router: Router,
    private stService: ActivatedRoute,
    private servEst: MyClassService
  ) {}
  agregarListaEstudiantes(data) {
    for (let i in data) {
      let nuevoEstudiante = new ListaEstudiante();
      nuevoEstudiante.id = data[i].id_alumno;
      nuevoEstudiante.id_alumno_curso = data[i].id_curso_alumno;
      nuevoEstudiante.m_nombre = data[i].ap_materno_alumno;
      nuevoEstudiante.nombre = data[i].nombre_alumno;
      nuevoEstudiante.p_nombre = data[i].ap_paterno_alumno;
      nuevoEstudiante.posicion = Number(i) + 1;
      nuevoEstudiante.promedio = data[i].nota;
      this.ELEMENT_DATA.push(nuevoEstudiante);
    }
  }
  iniciarTabla() {
    this.stService.data.subscribe({
      next: (data) => {
        console.log(data.students);
        this.agregarListaEstudiantes(data.students);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        //this.data.currentMessage.subscribe((message) => (this.titulo = message));
        this.data.changeMessage(this.item);
      },
      error: (err) => {
        this.router.navigate(["/"]);
      },
    });
  }
  ngOnInit() {
    if (this.tokenServ.getToken() === "undefined") {
      this.router.navigate(["/"]);
      return false;
    } else {
      this.iniciarTabla();
    }
  }

  //-----funciones-----
  agregarEstudiante() {
    this.stService.parent.parent.params.subscribe((param) => {
      const idCurso = param["idCurso"];

      const dialogRef = this.dialog.open(AddStudentComponent, {
        width: "400px",
        data: {
          idCurso: idCurso,
        },
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result !== "") {
          result.posicion = this.ELEMENT_DATA.length + 1;
          this.ELEMENT_DATA.push(result);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          //this.data.currentMessage.subscribe((message) => (this.titulo = message));
          this.data.changeMessage(this.item);

          console.log(this.ELEMENT_DATA);
        }
      });
    });
  }
  editarEstudiante() {
    const dialogRef = this.dialog.open(EditStudentComponent, {
      width: "400px",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result[0]);
    });
  }
  removeItem(value) {
    var flag = false;
    for (let i in this.ELEMENT_DATA) {
      if (flag == false) {
        if (this.ELEMENT_DATA[i].id_alumno_curso == value) {
          flag = true;
          this.ELEMENT_DATA.splice(Number(i), 1);
          console.log(this.ELEMENT_DATA);
        }
      } else {
        this.ELEMENT_DATA[Number(i) - 1].posicion--;
      }
    }

    this.dataSource.data = this.ELEMENT_DATA;
  }
  eliminarEstudiante(idAlumnoCurso) {
    this.stService.parent.parent.params.subscribe((param) => {
      const idCurso = param["idCurso"];
      const dialogRef = this.dialog.open(DeleteCardComponent, {
        width: "400px",
        data: {
          id_alumno_curso: idAlumnoCurso,
          tipo: "student",
        },
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result !== "") {
          this.removeItem(idAlumnoCurso);
          console.log(result);
        }
      });
    });
  }
  //-----#funciones-----
}
