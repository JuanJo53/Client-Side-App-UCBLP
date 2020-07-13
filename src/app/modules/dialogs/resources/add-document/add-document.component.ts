import { Component, OnInit, Inject } from '@angular/core';
import { UploadFilesService } from 'src/app/_services/teacher_services/upload-files.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SectionsService } from 'src/app/_services/teacher_services/sections.service';
import { ResourceContent } from 'src/app/models/resources/resourceContent';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent implements OnInit {
  archivo:string="";
  nombre:string="";
  Url: string = "";
  tipoArchivo:string="";
  nombreArchivo:string="";
  constructor(
    @Inject(MAT_DIALOG_DATA) public dataDialog: any,
    private servRes: UploadFilesService,
    private servSec:SectionsService,
    private dialogRef: MatDialogRef<AddDocumentComponent>

  ) { }
  fileToUpload: File = null;
  ngOnInit(): void {
  }
  ponerIconoNombre(){
    var a=this.verificarTipo(this.fileToUpload.type);
    switch(a){
      case 1:
        this.tipoArchivo="insert_drive_file";
        break;
      case 2:
        this.tipoArchivo="video_library";
        break;
      case 3:  
      this.tipoArchivo="fiber_manual_record";
      break;
    }
    this.nombreArchivo=this.fileToUpload.name;
  }
  handleFileInput(file: FileList) {
    this.fileToUpload=null;
    this.nombreArchivo="";
    this.tipoArchivo="";
    
   if(this.verificarTipoTam(file.item(0).type,file.item(0).size)){
    this.fileToUpload = file.item(0);
    this.ponerIconoNombre();

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.Url = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
   }
  }
  verificarTipoTam(tipo:string,tam:number):boolean{
    console.log(tipo);
    if((tipo==="application/vnd.openxmlformats-officedocument.wordprocessingml.document"||
    tipo==="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"||
    tipo==="video/mp4"||
    tipo==="application/vnd.openxmlformats-officedocument.presentationml.presentation"||
    tipo==="application/pdf"||
    tipo==="audio/mpeg")&&tam/1000000<10){
    console.log(tam);
    return true;
    }
}
verificarCampos(){
  if(this.fileToUpload!=null&&this.nombre!==""){
    return true;
  }
  else{
    return false;
  }
}
verificarTipo(tipo){
  if(tipo==="application/vnd.openxmlformats-officedocument.wordprocessingml.document"||
    tipo==="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"||
    tipo==="application/vnd.openxmlformats-officedocument.presentationml.presentation"||
    tipo==="application/pdf"){
      return 1;
    }
  else if(tipo==="video/mp4"){
    return 2;
  } 
  else if(tipo==="audio/mpeg"){
    return 3;
  } 
  else{
    return 0;
  }
}
  aceptar(){    
    if(this.verificarCampos()){
      var tipo=this.verificarTipo(this.fileToUpload.type);
      var a;
      switch(tipo){
        case 1: 
          a=this.servRes.getUrlDoc();
          break;
        case 2: 
          a=this.servRes.getUrlvideo();
          break;
        case 3: 
          a=this.servRes.getUrlaudio();
          break;
      }
      a.subscribe({
        next:(data)=>{
          if(data.status==200){
            this.subirArchivo(data.body.ruta,data.body.url[0],tipo);
          }
          else{
            console.log("Ocurrio un error");
            this.dialogRef.close();
          }
        },
        error:(err)=>{
          console.log("Ocurrio un error");
          this.dialogRef.close();

        }
      })
    }

    // if(this.fileToUpload!=null){
    //   this.servRes.
    // }
  }
  subirRecurso(ruta,tipo){
    let newRec=new ResourceContent();
    newRec.nombre=this.nombre;
    newRec.tipo=tipo;
    newRec.url=ruta;
    this.servSec.addResource(newRec,this.dataDialog["idSeccion"]).subscribe({
      next:(data)=>{
        if(data.status==200){
          this.servSec.getSections(this.dataDialog["idCurso"]).subscribe({
            next:(data)=>{
              if(data.status==200){
                this.dialogRef.close(data.body);
              }else{
                console.log("Ocurrio un error");
                this.dialogRef.close();
              }
            },
            error:(err)=>{
              console.log("Ocurrio un error");
              this.dialogRef.close();
      
            }
          })
        }else{
          console.log("Ocurrio un error");
          this.dialogRef.close();
          
        }
      },
      error:(err)=>{
        console.log("Ocurrio un error");
        this.dialogRef.close();

      }
    });
  }
  subirArchivo(ruta,url,tipo){
    this.servRes.subirArchivo(url,this.fileToUpload).subscribe({
      next:(data)=>{
        if(data.status==200){
          this.subirRecurso(ruta,tipo);
        }
        else{
          console.log("Ocurrio un error");
          this.dialogRef.close();

        }
      },
      error:(err)=>{
        console.log("Ocurrio un error");
        this.dialogRef.close();
      }
    })
  }
  cancelar(){
    this.dialogRef.close();

  }
}
