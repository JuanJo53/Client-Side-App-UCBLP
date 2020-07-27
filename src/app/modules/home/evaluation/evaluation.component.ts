import { Component, OnInit } from "@angular/core";
import { EvaluationService } from "src/app/_services/teacher_services/evaluation.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Route } from "@angular/compiler/src/core";
import { TokenStorageService } from "src/app/_services/general_services/token-storage.service";
import { Module } from "src/app/models/Teacher/Evaluation/Module";
import { CardColor } from "src/app/models/CardColor";
import { CardImage } from "src/app/models/CardImage";
import { EvaluationCard } from "src/app/models/Teacher/EvaluationCard";
import { MatDialog } from "@angular/material/dialog";
import { AddCustomModuleComponent } from "../../dialogs/evaluation/add-custom-module/add-custom-module.component";
import { EditCustomModuleComponent } from "../../dialogs/evaluation/edit-custom-module/edit-custom-module.component";
import { EditDefaultModuleComponent } from "../../dialogs/evaluation/edit-default-module/edit-default-module.component";
import { ModulesRubricComponent } from "../../dialogs/evaluation/modules-rubric/modules-rubric.component";
import { DeleteItemService } from "../../../services/dialogs/delete-item.service";
import { DeleteCardComponent } from "../../dialogs/delete-card/delete-card.component";
import { SideBarControlService } from "src/app/_services/side-bar-control.service";
import { SharedService } from "src/app/shared/shared.service";
import { ErrorDialogComponent } from "../../dialogs/simple-dialogs/error-dialog/error-dialog.component";
import { GoodDialogComponent } from "../../dialogs/simple-dialogs/good-dialog/good-dialog.component";
import { WarningDialogComponent } from "../../dialogs/simple-dialogs/warning-dialog/warning-dialog.component";

@Component({
  selector: "app-evaluation",
  templateUrl: "./evaluation.component.html",
  styleUrls: ["./evaluation.component.scss"],
})
export class EvaluationComponent implements OnInit {
  controlPuntuacion100: number = 0;
  link: string = "Evaluation";
  colorNoDisponible: "#838282";
  getImageUrl(image) {
    return "url(" + image + ")";
  }
  getImageIndex(index: string) {
    for (let image of this.images) {
      if (image.idImagen === index) {
        return image.url;
      }
    }
  }
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
  customCards: Module[] = [];
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
    private route: ActivatedRoute,
    private servNav: SideBarControlService,
    private data: SharedService
  ) {}
  ngOnInit(): void {
    if (this.controlPuntuacion100 == 1) {
      this.errorAlert();
    }
    this.data.changeMessage(this.link);
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
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
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

  cargarDatos(data) {
    this.cardsModulosPred = [];
    this.cardsModulosPers = [];
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

  customModulo() {
    const dialogRef = this.dialog.open(AddCustomModuleComponent, {
      width: "500px",
      data: {
        colores: this.colores,
        imagenes: this.images,
        idCurso: this.idCurso,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result !== "" && result != null && result !== "undefined") {
        console.log(result);
        this.route.data.subscribe({
          next: (data) => {
            data.modules.body = result;
            this.cargarDatos(result);
            this.servNav.modulos(result);
          },
          error: (error) => {
            console.log("No se pudieron obtener las lecciones");
          },
        });
      }
    });
  }
  configuracionModulo(modulo) {
    const dialogRef = this.dialog.open(EditDefaultModuleComponent, {
      width: "500px",
      data: {
        modulo: modulo,
        idCurso: this.idCurso,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result !== "" && result != null && result !== "undefined") {
        console.log(result);
        this.route.data.subscribe({
          next: (data) => {
            data.modules.body = result;
            this.cargarDatos(result);
            this.servNav.modulos(result);
          },
          error: (error) => {
            console.log("No se pudieron obtener las lecciones");
          },
        });
      }
    });
  }

  configuracionModuloPersonalizado(modulo: Module) {
    const dialogRef = this.dialog.open(EditCustomModuleComponent, {
      width: "500px",
      data: {
        modulo: modulo,
        idCurso: this.idCurso,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result !== "" && result != null && result !== "undefined") {
        console.log(result);
        this.route.data.subscribe({
          next: (data) => {
            data.modules.body = result;
            this.cargarDatos(result);
            this.servNav.modulos(result);
          },
          error: (error) => {
            console.log("No se pudieron obtener las lecciones");
          },
        });
      }
    });
  }
  editarPorcentajes() {
    this.route.data.subscribe({
      next: (data) => {
        const dialogRef = this.dialog.open(ModulesRubricComponent, {
          width: "400px",
          data: {
            modulosPred: this.cardsModulosPred,
            modulosPers: this.cardsModulosPers,
          },
        });
        dialogRef.afterClosed().subscribe((result) => {
          if (result !== "" && result != null && result !== "undefined") {
            data.modules.body = result;
            this.cargarDatos(result);
          }
        });
      },

      error: (err) => {},
    });
  }
  eliminar(modulo: Module, index) {
    console.log(modulo);
    const dialogRef = this.dialog.open(DeleteCardComponent, {
      width: "400px",
      data: {
        tipo: "Custom Module",
        idModulo: modulo.id,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "ok") {
        this.cardsModulosPers.splice(index, 1);
        this.servNav.eliminarmodulos(index);
      }
    });
  }
  sacarColor(id) {
    for (let color of this.colores) {
      if (color.idColor == id) {
        return color.color;
      }
    }
  }

  errorAlert() {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
      width: "400px",
      data: {
        messageDialog:
          "Rubric does not match with 100 points , please check it out.",
        buttonMessage: "Ok",
      },
    });
  }
  goodAlert() {
    const dialogRef = this.dialog.open(GoodDialogComponent, {
      width: "400px",
      data: {
        messageDialog:
          "Rubric does not match with 100 points , please check it out.",
        buttonMessage: "Ok",
      },
    });
  }
  warningAlert() {
    const dialogRef = this.dialog.open(WarningDialogComponent, {
      width: "400px",
      data: {
        messageDialog:
          "Rubric does not match with 100 points , please check it out.",
        buttonMessage: "Ok",
      },
    });
  }
}
