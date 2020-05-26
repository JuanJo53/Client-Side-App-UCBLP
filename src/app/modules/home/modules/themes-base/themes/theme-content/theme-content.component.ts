import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { CardThemes } from "src/app/models/CardThemes";
import { SimpleCard } from "src/app/models/simpleCard";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { DeleteCardComponent } from "../../../../../dialogs/delete-card/delete-card.component";
import { AddThemeComponent } from "../../../../../dialogs/themes/add-theme/add-theme.component";
import { DeleteItemService } from "../../../../../../services/dialogs/delete-item.service";
import { ConfigureThemeComponent } from "../../../../../dialogs/themes/configure-theme/configure-theme.component";
@Component({
  selector: "app-theme-content",
  templateUrl: "./theme-content.component.html",
  styleUrls: ["./theme-content.component.scss"],
})
export class ThemeContentComponent implements OnInit {
  theme: {
    id: number;
    titulo: string;
    subtitulo: string;
  };
  //----variables-----
  tema = "Theme 1";
  descripcion = "Present";
  item = "theme";

  lessonCards: CardThemes[] = [
    {
      id: 1,
      titulo: "Lesson 1",
      subtitulo: "Fruits",
      color: "#D77A61",
    },
    {
      id: 2,
      titulo: "Lesson 2",
      subtitulo: "Vegetables",
      color: "#D77A61",
    },
    {
      id: 3,
      titulo: "Lesson 3",
      subtitulo: "Animals",
      color: "#D77A61",
    },
  ];
  simpleCards: SimpleCard[] = [
    {
      id: 1,
      titulo: "Theme Test 1",
      color: "#D77A61",
    },
    {
      id: 2,
      titulo: "Theme Test 2",
      color: "#D77A61",
    },
  ];
  lessonCard: CardThemes = {
    id: 0,
    titulo: "",
    subtitulo: "",
    color: "",
  };
  simpleCard: SimpleCard = {
    id: 0,
    titulo: "",
    color: "",
  };

  //----#variables-----
  constructor(
    public dialog: MatDialog,
    private data: DeleteItemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.theme = {
      id: this.route.snapshot.params["id"],
      titulo: this.route.snapshot.params["id"],
      subtitulo: this.route.snapshot.params["id"],
    };
    this.route.params.subscribe((params: Params) => {
      this.theme.id = params["id"];
    });
    this.data.changeMessage(this.item);
  }
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
  listar() {
    console.log("click on list");
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
