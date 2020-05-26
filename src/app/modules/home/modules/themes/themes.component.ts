import { Component, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { DeleteCardComponent } from "../../../dialogs/delete-card/delete-card.component";
import { AddThemeComponent } from "../../../dialogs/add-theme/add-theme.component";
import { DeleteItemService } from "../../../../services/dialogs/delete-item.service";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: "app-themes",
  templateUrl: "./themes.component.html",
  styleUrls: ["./themes.component.scss"],
})
export class ThemesComponent implements OnInit {
  tema = "Theme 1";
  descripcion = "Present";
  item = "theme";

  constructor( 
    public dialog: MatDialog, 
    private data: DeleteItemService,
    private thService: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    this.data.changeMessage(this.item);
    this.thService.data.subscribe({
      next:(data)=>{ 
        console.log(data);
      },
      error:(error)=>{

      }
      
    });
  }
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
  //-----#funciones-----
}
