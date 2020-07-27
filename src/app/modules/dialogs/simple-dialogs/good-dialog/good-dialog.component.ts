import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-good-dialog",
  templateUrl: "./good-dialog.component.html",
  styleUrls: ["./good-dialog.component.scss"],
})
export class GoodDialogComponent implements OnInit {
  message: string = "Good";
  buttonMessage: string = "Ok";
  constructor() {}
  ngOnInit(): void {}
  accept() {}
}
