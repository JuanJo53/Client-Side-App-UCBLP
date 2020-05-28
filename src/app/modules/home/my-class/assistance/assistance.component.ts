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
import { TokenStorageService } from 'src/app/_services/general_services/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MyClassService } from 'src/app/_services/teacher_services/my-class.service';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
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
  idCurso:string;
  month:string[]=[
    "January","February","March","April","May","June","July","August","September","October","November","December"
  ]
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
  constructor(
    private tokenServ:TokenStorageService,
    private router:Router,
    private stService:ActivatedRoute,
    private assiEst:MyClassService
    ) {}
  getLista(fecha){
    this.stService.parent.parent.params.subscribe(
      (param)=>{
        this.idCurso=param['idCurso'];
        this.assiEst.getAlumnossAsistencia(this.idCurso,fecha).subscribe({
          next:(data)=>{
            if(data.status==200){
              console.log(data);
            }
            else{
              console.log(data);
            }
          },
          error:(error)=>{
            console.log(error);
          }
        });
      })
  }
  crearNuevaClase(){
    this.stService.parent.parent.params.subscribe(
      (param)=>{
        this.idCurso=param['idCurso'];
        this.assiEst.crearClase(this.idCurso).subscribe({
          next:(data)=>{
            if(data.status==200){
              console.log(data);
            }
            else{
              console.log(data);
            }
          },
          error:(error)=>{
            console.log(error);
          }
        });
      })
  }
  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.stService.data.subscribe({
      next:(data)=>{
        if(data.fechas.status==200){
          console.log(data.fechas.body[0].mes);
          this.getLista(data.fechas.body[0].mes);
          //this.crearNuevaClase();

        }
        else{
          console.log("Error");
        }
      },
      error:(error)=>{
        console.log("Error");
      }
    });
  }
  agregarAsistenia() {
    console.log("add assitance");
  }
}
