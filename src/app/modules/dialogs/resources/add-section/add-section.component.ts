import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SectionsService } from 'src/app/_services/teacher_services/sections.service';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.scss']
})
export class AddSectionComponent implements OnInit {
  nombre:string="";

  constructor(    
    @Inject(MAT_DIALOG_DATA) public dataDialog: any,
    private servSec: SectionsService,
    private dialogRef: MatDialogRef<AddSectionComponent>
  ) { }

  ngOnInit(): void {
  }
  aceptar(){
      this.servSec.addSection(this.nombre,this.dataDialog["idCurso"]).subscribe({
        next:(data)=>{
          this.servSec.getSections(this.dataDialog["idCurso"]).subscribe({
            next:(data)=>{
              this.dialogRef.close(data.body);

            },
            error:(err)=>{
              console.log(err)
              this.dialogRef.close();

            }
          })

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
