import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Router, ActivatedRoute } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { UpdateStudentScoreComponent } from "src/app/modules/dialogs/custom-modules/update-student-score/update-student-score.component";
import { NotasContenidoModulo } from 'src/app/models/Teacher/Modules/NotasContenidoModulo';


@Component({
  selector: "app-detail-custom-module",
  templateUrl: "./detail-custom-module.component.html",
  styleUrls: ["./detail-custom-module.component.scss"],
})
export class DetailCustomModuleComponent implements OnInit {
  
ELEMENT_DATA: NotasContenidoModulo[] = [
];
  displayedColumns: string[] = [
    "posicion",
    "nombre",
    "p_nombre",
    "m_nombre",
    "puntuacion",
    "id",
  ];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  constructor(
    public dialog: MatDialog,
    private route:ActivatedRoute    
    ) {}
  cargarDatos(){
    this.route.data.subscribe({
      next:(data)=>{
        if(data.notasContenido.status==200){
          for(let i in data.notasContenido.body){
            var nota=data.notasContenido.body[i];
            let newCont=new NotasContenidoModulo();
            newCont.id=nota.id_nota_contenido;
            newCont.m_nombre=nota.ap_materno_alumno;
            newCont.nombre=nota.nombre_alumno;
            newCont.p_nombre=nota.ap_paterno_alumno;
            newCont.puntuacion=nota.nota_contenido;
            newCont.posicion=Number(i)+1;
            this.ELEMENT_DATA.push(newCont);
          }
        }
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  ngOnInit(): void {
    this.cargarDatos();
  }

  actualizarPuntuacion(nota) {
    const dialogRef = this.dialog.open(UpdateStudentScoreComponent, {
      width: "400px",
      data:{
        notasContenido:nota
      }
    });
  }
}
