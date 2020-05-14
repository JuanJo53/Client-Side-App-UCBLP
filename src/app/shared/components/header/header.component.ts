import { Component, OnInit } from "@angular/core";
import { SharedService } from "../../shared.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  message: string;
  tituloNavbar: string;
  constructor(private data: SharedService) {}
  ngOnInit() {
    this.data.currentMessage.subscribe((message) => (this.message = message));
  }
}
