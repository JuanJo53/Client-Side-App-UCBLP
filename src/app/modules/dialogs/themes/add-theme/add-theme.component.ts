import { Component, OnInit, Inject, ComponentFactoryResolver } from '@angular/core';
import { ThemesService } from 'src/app/_services/teacher_services/themes.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Theme } from 'src/app/models/Teacher/Modules/Theme';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.scss']
})
export class AddThemeComponent implements OnInit {
  nombreTema="";
  imageUrl: string = "/assets/default.png";
  fileToUpload: File = null;
  constructor(@Inject(MAT_DIALOG_DATA) public dataDialog: any,
  private servThe:ThemesService,
  private dialogRef: MatDialogRef<AddThemeComponent>) { }

  ngOnInit(): void {

  }
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  csvInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }
  aceptar(){
    var idCurso=this.dataDialog['idCurso'];
    var images=this.dataDialog['images'];
    var numero_temas=this.dataDialog['numero_tema'];
    let newTheme=new Theme();
    newTheme.idCurso=idCurso;
    newTheme.idImagen=images[0].idTemaImagen;
    newTheme.nombreTema=this.nombreTema;
    newTheme.numeroTema=numero_temas
    this.servThe.addTheme(newTheme).subscribe({
      next:(data)=>{
        console.log(data);
        if(data.status==200){
          this.servThe.getThemes(idCurso).subscribe({
            next:(data)=>{
              if(data.status==200){
                this.dialogRef.close(data.body);
              }
              else{
                this.dialogRef.close();

              }
            },
            error:(error)=>{
              this.dialogRef.close();
              console.log("No se pudieron actualizar los temas");
            }
          });
        }
      },
      error:(error)=>{
        console.log(error);
      }
    });
  }

}
