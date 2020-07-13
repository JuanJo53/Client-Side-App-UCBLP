import { Component, OnInit, Inject } from '@angular/core';
import { SectionsService } from 'src/app/_services/teacher_services/sections.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.scss']
})
export class EditSectionComponent implements OnInit {
  nombre:string="";
  constructor(
    @Inject(MAT_DIALOG_DATA) public dataDialog: any,
    private servSec: SectionsService,
    private dialogRef: MatDialogRef<EditSectionComponent>) { 
      
      this.nombre=this.dataDialog["nombre"];
    }
  disableTextbox =  true;
  toggleDisable() {
    this.disableTextbox = !this.disableTextbox;
  }
  ngOnInit(): void {
  }
 aceptar(){
   console.log(this.nombre);
  this.servSec.updateSection(this.nombre,this.dataDialog["idSeccion"]).subscribe({
    next:(data)=>{
      if(data.status==200){
        this.servSec.getSections(this.dataDialog["idCurso"]).subscribe({
          next:(data)=>{
            this.dialogRef.close(data.body);
  
          },
          error:(err)=>{
            console.log(err)
            this.dialogRef.close();
  
          }
        })
      }
      else{
        console.log(data);
        this.dialogRef.close();
      }

    },
    error:(err)=>{
      console.log(err)
      this.dialogRef.close();
    }

  })
 }
 cancelar(){
     this.dialogRef.close();
 }
}
