import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from "@angular/material/dialog";
@Component({
  selector: "app-error-dialog",
  templateUrl: "./error-dialog.component.html",
  styleUrls: ["./error-dialog.component.scss"],
})
export class ErrorDialogComponent implements OnInit {
  message: string = "Account or password not found";
  buttonMessage: string = "Try it again";
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dataDialog: any,
    private dialogRef: MatDialogRef<ErrorDialogComponent>
  ) {}

  ngOnInit(): void {
    this.message = this.dataDialog["messageDialog"];
    this.buttonMessage = this.dataDialog["buttonMessage"];
  }
  clearAll() {
    this.dialogRef.close();
  }
}
