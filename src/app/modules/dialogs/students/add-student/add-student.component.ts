import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MyClassService } from 'src/app/_services/teacher_services/my-class.service';
import { AddStudent } from 'src/app/models/AddStudent';
import { ListaEstudiante } from 'src/app/models/ListaEstudiante';

@Component({
  selector: "app-add-student",
  templateUrl: "./add-student.component.html",
  styleUrls: ["./add-student.component.scss"],
})
export class AddStudentComponent implements OnInit {
  addEst:AddStudent={
    idCurso:"",
    idAlumno:"",
  }
  emailAcademico: string = "";

  constructor(@Inject(MAT_DIALOG_DATA) public dataDialog: any,private servEst:MyClassService,private dialogRef: MatDialogRef<AddStudentComponent>) {}

  ngOnInit(): void {}
  aceptar() {
    this.servEst.getProfileStudent(this.emailAcademico).subscribe(
      {
        next:(data)=>{
          if(data.status==200){
            console.log(data.body[0].id_alumno);
              this.addEst.idCurso=this.dataDialog['idCurso'];
              this.addEst.idAlumno=data.body[0].id_alumno;
              this.servEst.addStudents(this.addEst).subscribe({
                next:(data2)=>{
                  if(data2.status==200){
                    console.log("se agrego al estudiante");
                    console.log(data2.body[0]);
                    let newEst=new ListaEstudiante();
                    newEst.id=data.body[0].id_alumno;
                    newEst.nombre=data.body[0].nombre_alumno;
                    newEst.p_nombre=data.body[0].ap_paterno_alumno;
                    newEst.m_nombre=data.body[0].ap_materno_alumno;
                    newEst.promedio=0;
                    newEst.id_alumno_curso=data2.body[0].id_curso_alumno;
                    this.dialogRef.close(newEst);   
                  }
                  else{
                    console.log("no se pudo agregar al estudiante");
                    console.log(data2);
                  }
                },
                error:(error)=>{
                  console.log(error.error);
                
              }
              })
          }
          else{
            console.log(data);
          }
        },
        error:(error)=>{
            console.log(error.error);
          
        }
      }
    )
  }
}
