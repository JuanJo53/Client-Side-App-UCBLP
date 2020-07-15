import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-edit-card",
  templateUrl: "./edit-card.component.html",
  styleUrls: ["./edit-card.component.scss"],
})
export class EditCardComponent implements OnInit {
  nombreCard: string = "nombre del card";
  disableTextbox = true;
  constructor() {}

  ngOnInit(): void {}
  toggleDisable() {
    this.disableTextbox = !this.disableTextbox;
  }
  accept() {}
}
