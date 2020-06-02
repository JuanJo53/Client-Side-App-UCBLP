import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-progress-bar",
  templateUrl: "./progress-bar.component.html",
  styleUrls: ["./progress-bar.component.scss"],
})
export class ProgressBarComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  endDate = new Date(1990, 0, 1);

  constructor() {}

  ngOnInit(): void {}
  next() {
    console.log("next");
  }
  previous() {
    console.log("previous");
  }
}
