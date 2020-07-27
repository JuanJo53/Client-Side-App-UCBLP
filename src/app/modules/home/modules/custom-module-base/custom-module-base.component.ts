import { Component, OnInit } from "@angular/core";
import { SharedService } from "src/app/shared/shared.service";

@Component({
  selector: "app-custom-module-base",
  templateUrl: "./custom-module-base.component.html",
  styleUrls: ["./custom-module-base.component.scss"],
})
export class CustomModuleBaseComponent implements OnInit {
  link: string = "My Modules / Custom";
  constructor(private data: SharedService) {}

  ngOnInit(): void {
    this.data.changeMessage(this.link);
  }
}
