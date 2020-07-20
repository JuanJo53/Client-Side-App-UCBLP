import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EvaluationService } from 'src/app/_services/teacher_services/evaluation.service';
import { Module } from 'src/app/models/Teacher/Evaluation/Module';

@Component({
  selector: "app-modules-rubric",
  templateUrl: "./modules-rubric.component.html",
  styleUrls: ["./modules-rubric.component.scss"],
})
export class ModulesRubricComponent implements OnInit {
  total = 100;
  valor = 30;
  disableTextbox = true;
  listaRubricas: any[] = [];
  porcentajes: any[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public dataDialog: any,
    private dialogRef: MatDialogRef<ModulesRubricComponent>,
    private moduServ: EvaluationService
  ) {}
  toggleDisable() {
    this.disableTextbox = !this.disableTextbox;
  }
  cargarDatos1(rubricas:Module[]) {
    for (let rubrica of rubricas) {
        this.listaRubricas.push({
        id_modulo:rubrica.id,
        rubrica:rubrica.rubrica,
        nombre_modulo:rubrica.nombreModulo,
        id_tipo_modulo:rubrica.idTipoModulo,
        estado_modulo:rubrica.estado,
        id_color:rubrica.idColor,
        id_imagen:rubrica.idImagen,
      });
    }
  }
  cambio(){
    var suma=0;
    for(let rubrica of this.listaRubricas){
      suma+=rubrica.rubrica;
    }
    this.total=suma;
  }
  ngOnInit(): void {
    this.cargarDatos1(this.dataDialog["modulosPred"]);
    this.cargarDatos1(this.dataDialog["modulosPers"]);
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
      this.moduServ.updateRubricas(this.listaRubricas).subscribe({
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
  }
  cancelar() {
    this.dialogRef.close();
  }
}
