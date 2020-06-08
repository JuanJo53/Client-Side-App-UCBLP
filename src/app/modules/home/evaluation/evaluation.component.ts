import { Component, OnInit } from "@angular/core";
import { EvaluationService } from "src/app/_services/teacher_services/evaluation.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Route } from "@angular/compiler/src/core";
import { TokenStorageService } from "src/app/_services/general_services/token-storage.service";
import { Module } from "src/app/models/Teacher/Evaluation/Module";
import { CardColor } from "src/app/models/CardColor";
import { CardImage } from "src/app/models/CardImage";
import { EvaluationCard } from "src/app/models/Teacher/EvaluationCard";
import { MatDialog } from '@angular/material/dialog';
import { AddCustomModuleComponent } from "../../dialogs/evaluation/add-custom-module/add-custom-module.component";
import { EditCustomModuleComponent } from "../../dialogs/evaluation/edit-custom-module/edit-custom-module.component";
import { EditDefaultModuleComponent } from "../../dialogs/evaluation/edit-default-module/edit-default-module.component";
import { ModulesRubricComponent } from "../../dialogs/evaluation/modules-rubric/modules-rubric.component";
import { DeleteItemService } from "../../../services/dialogs/delete-item.service";
import { DeleteCardComponent } from "../../dialogs/delete-card/delete-card.component";

@Component({
  selector: "app-evaluation",
  templateUrl: "./evaluation.component.html",
  styleUrls: ["./evaluation.component.scss"],
})
export class EvaluationComponent implements OnInit {
  defaultCard: EvaluationCard[] = [
    {
      id_evaluationCard: 1,
      titulo: "Attendance",
      porcentaje: "10%",
      colorFondo: "#9c5fafbf",
      colorCirculo: "#9c5faf",
    },
    {
      id_evaluationCard: 2,
      titulo: "Themes",
      porcentaje: "20%",
      colorFondo: "#d77a61bf",
      colorCirculo: "#d77a61",
    },
  ];
  customCards: EvaluationCard[] = [
    {
      id_evaluationCard: 1,
      titulo: "Project",
      porcentaje: "10%",
      colorFondo: "#ef8ec8bf",
      colorCirculo: "#ef8ec8",
    },
    {
      id_evaluationCard: 2,
      titulo: "Expositions",
      porcentaje: "20%",
      colorFondo: "#c7cc77bf",
      colorCirculo: "#c7cc77",
    },
  ];
  idCurso = "";
  cardsModulosPred: Module[] = [];
  cardsModulosPers: Module[] = [];
  colores: CardColor[] = [];
  images: CardImage[] = [];
  constructor(
    private tokenServ: TokenStorageService,
    private router: Router,
    private mdServ: EvaluationService,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) { }
  updateModulesPers(modulo: Module) {
    this.mdServ.updateModulePers(modulo).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  updateModulesPred(modulo: Module) {
    this.mdServ.updateModulePred(modulo).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  addModulesPers() {
    let newModule = new Module();
    newModule.idColor = this.colores[0].idColor;
    newModule.idImagen = Number(this.images[0].idImagen);
    newModule.nombreModulo = "modulo personalizado";
    newModule.rubrica = 0;
    newModule.idCurso = Number(this.idCurso);
    this.mdServ.addModule(newModule).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  cargarDatos(data) {
    for (let i in data) {
      let newModule = new Module();
      newModule.id = data[i].id_modulo;
      newModule.estado = data[i].estado_modulo;
      newModule.idColor = data[i].id_color;
      newModule.idImagen = data[i].id_imagen;
      newModule.nombreModulo = data[i].nombre_modulo;
      newModule.rubrica = data[i].rubrica;
      newModule.idTipoModulo = data[i].id_tipo_modulo;
      if (newModule.idTipoModulo == 1) {
        this.cardsModulosPred.push(newModule);
      } else {
        if (newModule.idTipoModulo == 2) {
          this.cardsModulosPers.push(newModule);
        }
      }
    }
    console.log(this.cardsModulosPers);
    console.log(this.cardsModulosPred);
  }
  deleteModulo(idModulo) {
    this.mdServ.deleteModule(idModulo).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  cargarColores(data) {
    for (let i in data) {
      let newCol = new CardColor();
      newCol.idColor = data[i].id_color;
      newCol.color = data[i].valor;
      this.colores.push(newCol);
    }
    console.log(this.colores);
  }
  cargarImagenes(data) {
    for (let i in data) {
      let newImg = new CardImage();
      newImg.idImagen = data[i].id_imagen;
      newImg.url = data[i].imagen;
      this.images.push(newImg);
    }
    console.log(this.images);
  }
  ngOnInit(): void {
    this.route.parent.params.subscribe((param) => {
      this.idCurso = param["idCurso"];
    });
    this.route.data.subscribe({
      next: (data) => {
        this.cargarDatos(data.modules.body);
        this.cargarImagenes(data.images.body);
        this.cargarColores(data.colors.body);
        //this.addModulesPers();
        //this.cardsModulosPers[0].estado=2;
        //this.cardsModulosPers[0].idColor=1;
        //this.cardsModulosPers[0].nombreModulo="Modulo per";
        //this.cardsModulosPers[0].rubrica=10;
        //this.updateModulesPers(this.cardsModulosPers[0]);

        //this.cardsModulosPred[0].idColor=1;
        //this.cardsModulosPred[0].estado=2;
        //this.cardsModulosPred[0].rubrica=10;
        //this.updateModulesPred(this.cardsModulosPred[0]);
        this.deleteModulo(this.cardsModulosPers[0].id);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  nuevoModulo() {
    const dialogRef = this.dialog.open(AddCustomModuleComponent, { width: "500px" });
  }
  configuracionModulo() {
    const dialogRef = this.dialog.open(EditDefaultModuleComponent, { width: "500px" });
  }
  configuracionModuloPersonalizado() {
    const dialogRef = this.dialog.open(EditCustomModuleComponent, { width: "500px" });
  }
  editarPorcentajes() {
    const dialogRef = this.dialog.open(ModulesRubricComponent, { width: "400px" });
  }
  eliminar() {
    const dialogRef = this.dialog.open(DeleteCardComponent, {
      width: "400px"
      , data: {
       
        tipo: "Custom Module"
      }
    });
  }
}
