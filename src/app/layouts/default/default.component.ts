import { Component, OnInit } from "@angular/core";
//import {MediaObserver , MediaChange} from '@angular/flex-layout';
//import {Subscription} from 'rxjs';

@Component({
  selector: "app-default",
  templateUrl: "./default.component.html",
  styleUrls: ["./default.component.scss"],
})
export class DefaultComponent implements OnInit {
  isSidebarOpen2: boolean = true;
  contentMargin = 25;
  constructor() {}
  ngOnInit() {}
  receiveOpen(event) {
    this.isSidebarOpen2 = event;
    console.log(
      "inside burgerClicked: pls. change showMenu to be:",
      this.isSidebarOpen2
    );
    if (!this.isSidebarOpen2) {
      this.contentMargin = 9; //css when it's close
    } else {
      this.contentMargin = 25; //css when it's open
    }
  }
}
