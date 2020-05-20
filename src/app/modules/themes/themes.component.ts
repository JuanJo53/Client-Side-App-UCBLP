import { Component, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { DeleteCardComponent } from "../dialogs/delete-card/delete-card.component";
import { AddThemeComponent } from "../dialogs/add-theme/add-theme.component";
@Component({
  selector: "app-themes",
  templateUrl: "./themes.component.html",
  styleUrls: ["./themes.component.scss"],
})
export class ThemesComponent implements OnInit {
  tema = "Theme 1";
  descripcion = "Present";
  link = "Themes";

  ngOnInit(): void {}
  constructor(public dialog: MatDialog) {}
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
}
