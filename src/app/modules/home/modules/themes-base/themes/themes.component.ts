import { Component, OnInit } from "@angular/core";
import { CardThemes } from "src/app/models/CardThemes";
import { Router, ActivatedRoute } from "@angular/router";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { DeleteCardComponent } from "../../../../dialogs/delete-card/delete-card.component";
import { AddThemeComponent } from "../../../../dialogs/themes/add-theme/add-theme.component";
import { DeleteItemService } from "../../../../../services/dialogs/delete-item.service";
import { ConfigureThemeComponent } from "../../../../dialogs/themes/configure-theme/configure-theme.component";
@Component({
  selector: "app-themes",
  templateUrl: "./themes.component.html",
  styleUrls: ["./themes.component.scss"],
})
export class ThemesComponent implements OnInit {
  //----variables-----
  tema = "Theme 1";
  descripcion = "Present";
  item = "theme";

  themeCards: CardThemes[] = [
    {
      id: 1,
      titulo: "Theme 1",
      subtitulo: "Fruits",
      color: "#D77A61",
    },
    {
      id: 2,
      titulo: "Theme 2",
      subtitulo: "Vegetables",
      color: "#D77A61",
    },
    {
      id: 3,
      titulo: "Theme 3",
      subtitulo: "Animals",
      color: "#D77A61",
    },
    { id: 4, titulo: "Theme 4", subtitulo: "Cellphones", color: "#D77A61" },

    {
      id: 5,
      titulo: "Theme 5",
      subtitulo: "Services",
      color: "#D77A61",
    },
  ];
  cardTheme: CardThemes = {
    id: 0,
    titulo: "",
    subtitulo: "",
    color: "",
  };
  constructor(
    public dialog: MatDialog,
    private data: DeleteItemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.data.changeMessage(this.item);
  }
  //----#variables-----
  //-----funciones-----

  agregarTemas() {
    const dialogRef = this.dialog.open(AddThemeComponent, { width: "400px" });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  configuraciones() {
    const dialogRef = this.dialog.open(ConfigureThemeComponent, {
      width: "400px",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  verContenido(id: number) {
    //[where i wanna go] ,{where i am}
    this.router.navigate(["/themes", id], { relativeTo: this.route });
  }
  eliminar() {
    const dialogRef = this.dialog.open(DeleteCardComponent, { width: "400px" });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  //-----#funciones-----
}
