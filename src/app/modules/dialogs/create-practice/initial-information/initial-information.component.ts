import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-initial-information",
  templateUrl: "./initial-information.component.html",
  styleUrls: ["./initial-information.component.scss"],
})
export class InitialInformationComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  constructor() {}

  ngOnInit(): void {}
  next() {
    console.log("next");
  }
  previous() {
    console.log("previous");
  }
}
