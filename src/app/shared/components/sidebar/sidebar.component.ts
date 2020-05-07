import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  isSidebarOpen: boolean = true;
  mylogo: string = "assets/logo.png";

  @Output() openEvent = new EventEmitter<boolean>();
  onSidebarMenuToggle() {
    console.log("toogle : ", this.isSidebarOpen);
    this.isSidebarOpen = !this.isSidebarOpen;
    this.openEvent.emit(this.isSidebarOpen);
  }

  constructor() {}

  ngOnInit(): void {}
}
