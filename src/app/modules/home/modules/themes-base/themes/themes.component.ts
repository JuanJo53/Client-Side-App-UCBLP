import { Component, OnInit } from "@angular/core";
import { CardThemes } from "src/app/models/CardThemes";
import { Router, ActivatedRoute } from "@angular/router";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { DeleteCardComponent } from "../../../../dialogs/delete-card/delete-card.component";
import { AddThemeComponent } from "../../../../dialogs/add-theme/add-theme.component";
import { DeleteItemService } from "../../../../../services/dialogs/delete-item.service";
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
      titulo: "Theme 1",
      subtitulo: "Fruits",
    },
    {
      titulo: "Theme 2",
      subtitulo: "Vegetables",
    },
    {
      titulo: "Theme 3",
      subtitulo: "Animals",
    },
    {
      titulo: "Theme 4",
      subtitulo: "Cellphones",
    },
    {
      titulo: "Theme 5",
      subtitulo: "Services",
    },
    {
      titulo: "Theme 6",
      subtitulo: "Games",
    },
    {
      titulo: "Theme 7",
      subtitulo: "Music",
    },
    {
      titulo: "Theme 8",
      subtitulo: "Movies",
    },
    {
      titulo: "Theme 9",
      subtitulo: "Houses",
    },
    {
      titulo: "Theme 10",
      subtitulo: "Family",
    },
    {
      titulo: "Theme 11",
      subtitulo: "Professions",
    },
    {
      titulo: "Theme 12",
      subtitulo: "University",
    },
    {
      titulo: "Theme 13",
      subtitulo: "Education",
    },
  ];
  cardTheme: CardThemes = {
    titulo: "",
    subtitulo: "",
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
  delete() {
    const dialogRef = this.dialog.open(DeleteCardComponent, { width: "400px" });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  add() {
    const dialogRef = this.dialog.open(AddThemeComponent, { width: "400px" });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  setting() {
    console.log("click on settings");
  }
  list() {
    console.log("click on list");
  }
  cargarContenido() {
    //[where i wanna go] ,{where i am}
    this.router.navigate(["theme-content"], { relativeTo: this.route });
  }
  //-----#funciones-----
}
