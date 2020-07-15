import { Component, OnInit } from "@angular/core";
import { SimpleCard } from "src/app/models/simpleCard";
import { ActivatedRoute, Router } from "@angular/router";
import { DeleteCardComponent } from "src/app/modules/dialogs/delete-card/delete-card.component";
import { DeleteItemService } from "src/app/services/dialogs/delete-item.service";
import { MatDialog } from "@angular/material/dialog";
import { EditCardComponent } from "src/app/modules/dialogs/edit-card/edit-card.component";
import { Module } from "src/app/models/Teacher/Evaluation/Module";
import { CustomModuleRubricComponent } from "src/app/modules/dialogs/custom-modules/custom-module-rubric/custom-module-rubric.component";
@Component({
  selector: "app-custom-module",
  templateUrl: "./custom-module.component.html",
  styleUrls: ["./custom-module.component.scss"],
})
export class CustomModuleComponent implements OnInit {
  cardsModulosPers: Module[] = [
    {
      id: 1,
      nombreModulo: "exposition 1",
      rubrica: 30,
      idColor: 1,
      idImagen: 1,
      estado: 1,
      idTipoModulo: 1,
      idCurso: 1,
    },
    {
      id: 1,
      nombreModulo: "exposition 2",
      rubrica: 30,
      idColor: 1,
      idImagen: 1,
      estado: 1,
      idTipoModulo: 1,
      idCurso: 1,
    },
    {
      id: 1,
      nombreModulo: "exposition 3",
      rubrica: 40,
      idColor: 1,
      idImagen: 1,
      estado: 1,
      idTipoModulo: 1,
      idCurso: 1,
    },
  ];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private data: DeleteItemService
  ) {}

  ngOnInit(): void {}

  agregarModulo() {}
  eliminarCustom() {}
  verlistar() {
    this.router.navigate(["detail"], { relativeTo: this.route });
  }

  editarPorcentajes() {
    const dialogRef = this.dialog.open(CustomModuleRubricComponent, {
      width: "400px",
    });
  }

  editarCard() {
    const dialogRef = this.dialog.open(EditCardComponent, {
      width: "400px",
    });
  }
  eliminarCard() {
    const dialogRef = this.dialog.open(DeleteCardComponent, {
      width: "400px",
    });
  }
  sacarColor(id) {}
}
