import { Component, OnInit } from "@angular/core";
import { UploadFilesService } from "src/app/_services/teacher_services/upload-files.service";

import { MatTableDataSource } from "@angular/material/table";
import { ResourceContent } from "../../../models/resources/resourceContent";
import { ResourceSection } from "../../../models/resources/resourceSection";

import { AddSectionComponent } from "../../dialogs/resources/add-section/add-section.component";
import { AddDocumentComponent } from "../../dialogs/resources/add-document/add-document.component";
import { EditSectionComponent } from "../../dialogs/resources/edit-section/edit-section.component";
import { EditDocumentComponent } from "../../dialogs/resources/edit-document/edit-document.component";
import { MatDialog } from "@angular/material/dialog";
import { DeleteCardComponent } from "../../dialogs/delete-card/delete-card.component";
import { DeleteItemService } from "../../../services/dialogs/delete-item.service";
import { Router, ActivatedRoute } from '@angular/router';
import { SectionsService } from 'src/app/_services/teacher_services/sections.service';

@Component({
  selector: "app-resources",
  templateUrl: "./resources.component.html",
  styleUrls: ["./resources.component.scss"],
})
export class ResourcesComponent implements OnInit {
  idCurso:number;
  ListaSecciones: ResourceSection[] = [
  ];
  file: any;
  constructor(
    private servUpload: UploadFilesService,
    private servSec:SectionsService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ) {}
  fileChange(file) {
    this.file = file;
  }
  subirArchivo() {
    this.servUpload.getUrlvideo().subscribe({
      next: (data) => {
        console.log(data);
        this.servUpload
          .subirArchivo(data.body[0], this.file.target.files[0])
          .subscribe({
            next: (data2) => {
              console.log(data2);
            },
            error: (error) => {
              console.log(error);
            },
          });
      },
      error: (error) => {},
    });
  }
  cargarSecciones(data){
    this.ListaSecciones=[];
    for(let seccion of data){
      let nuevaSeccion=new ResourceSection();
      nuevaSeccion.nombreSeccion=seccion.nombre_seccion;
      nuevaSeccion.idSeccion=seccion.id_seccion;
      for(let recurso of seccion.recursos){
        let nuevoRecurso=new ResourceContent();
        nuevoRecurso.nombre=recurso.nombre_recurso;
        nuevoRecurso.tipo=recurso.id_tipo_recurso;
        nuevoRecurso.url=recurso.ruta_recurso;
        nuevoRecurso.id=recurso.id_recurso;
        nuevaSeccion.resourceContent.push(nuevoRecurso);
      }

      this.ListaSecciones.push(nuevaSeccion);
    }
    console.log(this.ListaSecciones);
  }
  ngOnInit(): void {
    this.route.parent.params.subscribe((param)=>{
      this.idCurso=param["idCurso"];
    });
    this.route.data.subscribe({
      next:(next)=>{
        if(next.sections.status==200){
          this.cargarSecciones(next.sections.body);
        }
        else{console.log("error")}
      },
      error:(err)=>{
          console.log("error");
      }

    })    
  }

  //dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns: string[] = ["tipoDocumento", "nombreDocumento", "id"];

  //funciones
  agregarSeccion() {
    const dialogRef = this.dialog.open(AddSectionComponent, { width: "500px" 
    ,
    data:{
      idCurso:this.idCurso,
    }
  });
  dialogRef.afterClosed().subscribe((res)=>{
    if(res!==""&&res!=='undefined'&&res!=null){        
    this.cargarSecciones(res);
    }
  })
  }
  agregarDocumento(seccion:ResourceSection) {
    const dialogRef = this.dialog.open(AddDocumentComponent, { width: "500px" ,
    data:{
      idSeccion:seccion.idSeccion,
      idCurso:this.idCurso
    }
    });
    dialogRef.afterClosed().subscribe((res)=>{
      if(res!==""&&res!=='undefined'&&res!=null){        
      this.cargarSecciones(res);
      }
    })
  }

  editarDocumento(resource:ResourceContent) {
    const dialogRef = this.dialog.open(EditDocumentComponent, { width: "500px" ,
    data:{
      resource:resource,
      idCurso:this.idCurso
    }
    });
    dialogRef.afterClosed().subscribe((res)=>{
      if(res!==""&&res!=='undefined'&&res!=null){        
      this.cargarSecciones(res);
      }
    });
  }
  editarSeccion(seccion:ResourceSection,index) {
    const dialogRef = this.dialog.open(EditSectionComponent, { width: "500px",
    data:{
      idCurso:this.idCurso,
      nombre:seccion.nombreSeccion,
      idSeccion:seccion.idSeccion,


    } });
    dialogRef.afterClosed().subscribe((res)=>{
      if(res!==""&&res!=='undefined'&&res!=null){        
      this.cargarSecciones(res);
      }
    })
  }
  eliminarSeccion(seccion:ResourceSection,index) {
    const dialogRef = this.dialog.open(DeleteCardComponent, {
      width: "400px",
      data: {
        tipo: "section",
        idSeccion:seccion.idSeccion
      },
    });
    dialogRef.afterClosed().subscribe((result)=>{
      if(result==="ok"){
        this.ListaSecciones.splice(index,1);
      }
    })
  }
  eliminarDocumento(resource:ResourceContent,indexs,index) {
    const dialogRef = this.dialog.open(DeleteCardComponent, {
      width: "400px",
      data: {
        tipo: "File",
        id:resource.id,
        idCurso:this.idCurso
      },
    });
    dialogRef.afterClosed().subscribe((result)=>{
      if(result==="ok"){
        window.location.reload();
      }
    })
  }
  descargarArchivo(resource:ResourceContent){
    this.servSec.downloadResource(resource.url).subscribe({
      next:(data)=>{
        if(data.status==200){
          window.open(data.body.url[0]);
        }
      },
      error:(err)=>{
        console.log("ocurrio un error");

      }
    })
  }

  // file: any;
  // constructor(private servUpload: UploadFilesService) {}
  // fileChange(file) {
  //   this.file = file;
  // }
  // subirArchivo() {
  //   this.servUpload.getUrlvideo().subscribe({
  //     next: (data) => {
  //       console.log(data);
  //       this.servUpload
  //         .subirArchivo(data.body[0], this.file.target.files[0])
  //         .subscribe({
  //           next: (data2) => {
  //             console.log(data2);
  //           },
  //           error: (error) => {
  //             console.log(error);
  //           },
  //         });
  //     },
  //     error: (error) => {},
  //   });
  // }
  // ngOnInit(): void {}
}
