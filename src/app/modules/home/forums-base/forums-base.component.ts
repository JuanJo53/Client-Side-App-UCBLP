import { Component, OnInit } from "@angular/core";
import { SharedService } from "src/app/shared/shared.service";

@Component({
  selector: "app-forums-base",
  templateUrl: "./forums-base.component.html",
  styleUrls: ["./forums-base.component.scss"],
})
export class ForumsBaseComponent implements OnInit {
  link: string = "Forums";
  constructor(private data: SharedService) {}

  ngOnInit(): void {
    this.data.changeMessage(this.link);
  }
}
