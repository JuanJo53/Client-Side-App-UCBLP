import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Module } from 'src/app/models/Teacher/Evaluation/Module';
import { ContenidoModuloService } from 'src/app/_services/teacher_services/contenido-modulo.service';
import { ContentModule } from 'src/app/models/Teacher/Modules/ContentModule';

@Component({
  selector: "app-custom-module-rubric",
  templateUrl: "./custom-module-rubric.component.html",
  styleUrls: ["./custom-module-rubric.component.scss"],
})
export class CustomModuleRubricComponent implements OnInit {
  total = 100;
  valor = 30;
  disableTextbox = true;
  listaRubricas: ContentModule[] = [];
  porcentajes: any[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public dataDialog: any,
    private dialogRef: MatDialogRef<CustomModuleRubricComponent>,
    private serv:ContenidoModuloService
  ) {}
  toggleDisable() {
    this.disableTextbox = !this.disableTextbox;
  }
  cargarDatos(rubricas:ContentModule[]) {
    for (let rubrica of rubricas) {
      let newRubrica = new ContentModule();
      newRubrica.id = rubrica.id;
      newRubrica.rubrica = rubrica.rubrica; 
      newRubrica.estado= rubrica.estado;
      newRubrica.idModulo = rubrica.idModulo; 
      newRubrica.nombreContenido=rubrica.nombreContenido;
      this.listaRubricas.push(newRubrica);
      this.porcentajes.push({
        porcentaje: rubrica.rubrica,
      });
    }
    console.log(this.porcentajes);
  }
  cambio(){
    var suma=0;
    for(let rubrica of this.listaRubricas){
      suma+=rubrica.rubrica;
    }
    this.total=suma;
  }
  ngOnInit(): void {
    this.listaRubricas=[];
    this.cargarDatos(this.dataDialog["rubricas"]);
    this.cambio();
  }
  verificarRubricas() {
    var sum = 0;
    for (let rubrica of this.listaRubricas) {
      console.log(rubrica);
      sum += rubrica.rubrica;
    }
    if (sum != 100) {
      return false;
    } else {
      return true;
    }
  }
  aceptar(): void {
    if (this.verificarRubricas()) {
      this.serv.updateRubricasContenidoModulos(this.listaRubricas).subscribe({
        next: (data) => {
          if (data.status == 200) {
            this.dialogRef.close(this.listaRubricas);
          } else {
            console.log("error");
            this.dialogRef.close();
          }
        },
        error: (error) => {
          console.log("error");
          this.dialogRef.close();
        },
      });
    }
    else{
      console.log("no suma 100");
    }
  }
  cancelar() {
    this.dialogRef.close();
  }
}
