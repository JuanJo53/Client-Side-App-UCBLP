import { Component, OnInit } from "@angular/core";
import { SharedService } from "src/app/shared/shared.service";

@Component({
  selector: "app-assessments-base",
  templateUrl: "./assessments-base.component.html",
  styleUrls: ["./assessments-base.component.scss"],
})
export class AssessmentsBaseComponent implements OnInit {
  link: string = "My Modules / Assessments";
  constructor(private data: SharedService) {}

  ngOnInit(): void {
    this.data.changeMessage(this.link);
  }
}
