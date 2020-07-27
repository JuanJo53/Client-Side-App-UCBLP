import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-warning-dialog",
  templateUrl: "./warning-dialog.component.html",
  styleUrls: ["./warning-dialog.component.scss"],
})
export class WarningDialogComponent implements OnInit {
  message: string = "Warning";
  buttonMessage: string = "Ok";
  constructor() {}

  ngOnInit(): void {}
  accept() {}
}
