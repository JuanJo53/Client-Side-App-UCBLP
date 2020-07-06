import { Component, OnInit, Inject } from '@angular/core';
import { UploadFilesService } from 'src/app/_services/teacher_services/upload-files.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SectionsService } from 'src/app/_services/teacher_services/sections.service';
import { ResourceContent } from 'src/app/models/resources/resourceContent';

@Component({
  selector: 'app-add-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.scss']
})
export class EditDocumentComponent implements OnInit {
  archivo:string="";
  nombre:string="";
  Url: string = "";
  tipoArchivo:string="";
  nombreArchivo:string="";
  constructor(
    @Inject(MAT_DIALOG_DATA) public dataDialog: any,
    private servSec:SectionsService,
    private dialogRef: MatDialogRef<EditDocumentComponent>

  ) { }
  fileToUpload: File = null;
  ngOnInit(): void {
    this.nombre=this.dataDialog["resource"].nombre;
  }
  aceptar(){    
    let newRec=this.dataDialog["resource"];
    newRec.nombre=this.nombre;
    this.servSec.updateResource(newRec).subscribe({
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
  
  cancelar(){
    this.dialogRef.close();

  }
}
