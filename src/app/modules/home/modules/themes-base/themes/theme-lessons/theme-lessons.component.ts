import { Component, OnInit } from "@angular/core";
import { SimpleCard } from "src/app/models/simpleCard";
import { InitialInformationComponent } from "../../../../../dialogs/create-practice/initial-information/initial-information.component";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
@Component({
  selector: "app-theme-lessons",
  templateUrl: "./theme-lessons.component.html",
  styleUrls: ["./theme-lessons.component.scss"],
})
export class ThemeLessonsComponent implements OnInit {
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
  practices: SimpleCard[] = [
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

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  //-----funciones-----

  agregarTemas() {
    // const dialogRef = this.dialog.open(AddThemeComponent, { width: "400px" });
    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
  configuraciones() {
    // const dialogRef = this.dialog.open(ConfigureThemeComponent, {
    //   width: "400px",
    // });
    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
  listar() {
    console.log("click on list");
  }
  verContenido(id: number) {
    //[where i wanna go] ,{where i am}
    //this.router.navigate(["/themes", id], { relativeTo: this.route });
  }
  eliminar() {
    // const dialogRef = this.dialog.open(DeleteCardComponent, { width: "400px" });
    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
  verLecciones() {
    //[where i wanna go] ,{where i am}
    //this.router.navigate(["lessons"], { relativeTo: this.route });
  }
  agregarPractica() {
    const dialogRef = this.dialog.open(InitialInformationComponent, {
      width: "1000px",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  //-----#funciones-----
}
