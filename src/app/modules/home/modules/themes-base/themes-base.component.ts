import { Component, OnInit } from "@angular/core";
import { SharedService } from "src/app/shared/shared.service";

@Component({
  selector: "app-themes-base",
  templateUrl: "./themes-base.component.html",
  styleUrls: ["./themes-base.component.scss"],
})
export class ThemesBaseComponent implements OnInit {
  link: string = "My Modules / Themes";
  constructor(private data: SharedService) {}

  ngOnInit(): void {
    this.data.changeMessage(this.link);
  }
}
