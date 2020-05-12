import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { SharedService } from "../../shared.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  isSidebarOpen: boolean = true;
  mylogo: string = "assets/logo.png";
  message: String = "link";

  @Output() openEvent = new EventEmitter<boolean>();
  onSidebarMenuToggle() {
    console.log("toogle : ", this.isSidebarOpen);
    this.isSidebarOpen = !this.isSidebarOpen;
    this.openEvent.emit(this.isSidebarOpen);
  }
  constructor(private data: SharedService) {}
  // constructor() {}
  // ngOnInit(): void {}
  ngOnInit() {
    this.data.currentMessage.subscribe((message) => (this.message = message));
  }
  newMessage(link:string) {
    this.data.changeMessage(link);
  }
}
