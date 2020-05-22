import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { AddStudentComponent } from "../dialogs/students/add-student/add-student.component";
import { EditStudentComponent } from "../dialogs/students/edit-student/edit-student.component";
import { DeleteCardComponent } from "../dialogs/delete-card/delete-card.component";
import { DeleteItemService } from "../../services/dialogs/delete-item.service";

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
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.scss"],
})
export class StudentsComponent implements OnInit {
  item: string = "student";
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

  constructor(public dialog: MatDialog, private data: DeleteItemService) {}
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    //this.data.currentMessage.subscribe((message) => (this.titulo = message));
    this.data.changeMessage(this.item);
  }

  //-----funciones-----
  agregarEstudiante() {
    const dialogRef = this.dialog.open(AddStudentComponent, { width: "400px" });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  editarEstudiante() {
    const dialogRef = this.dialog.open(EditStudentComponent, {
      width: "400px",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  eliminarEstudiante() {
    const dialogRef = this.dialog.open(DeleteCardComponent, { width: "400px" });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  //-----#funciones-----
}
