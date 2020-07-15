import { Component, OnInit } from "@angular/core";
import { SimpleCard } from "src/app/models/simpleCard";
import { ActivatedRoute, Router } from "@angular/router";
import { DeleteCardComponent } from "src/app/modules/dialogs/delete-card/delete-card.component";
import { DeleteItemService } from "src/app/services/dialogs/delete-item.service";
import { MatDialog } from "@angular/material/dialog";
import { EditCardComponent } from "src/app/modules/dialogs/edit-card/edit-card.component";
@Component({
  selector: "app-custom-module",
  templateUrl: "./custom-module.component.html",
  styleUrls: ["./custom-module.component.scss"],
})
export class CustomModuleComponent implements OnInit {
  customCards: SimpleCard[] = [
    {
      id: 1,
      titulo: "Practice 1",
      color: "#D77A61",
    },
    {
      id: 2,
      titulo: "Practice 2",
      color: "#D77A61",
    },
    {
      id: 3,
      titulo: "Practice 3",
      color: "#D77A61",
    },
    {
      id: 4,
      titulo: "Practice 4",
      color: "#D77A61",
    },
  ];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private data: DeleteItemService
  ) {}

  ngOnInit(): void {}
  editarPorcentajes() {}
  agregarModulo() {}
  eliminarCustom() {}
  verlistar() {
    this.router.navigate(["detail"], { relativeTo: this.route });
  }

  editarCard() {
    const dialogRef = this.dialog.open(EditCardComponent, {
      width: "400px",
    });
  }
  eliminarCard(idTema) {
    const dialogRef = this.dialog.open(DeleteCardComponent, {
      width: "400px",
      data: {
        idTema: idTema,
        tipo: "custom module name",
      },
    });
  }
}
