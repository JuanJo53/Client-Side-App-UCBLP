import { Component, HostListener, OnInit, ViewChild } from "@angular/core";
import { SideBarControlService } from "src/app/_services/side-bar-control.service";
import { SidebarComponent } from "src/app/shared/components/sidebar/sidebar.component";
import { LoadingService } from "src/app/_services/loading.service";
import { LoadingComponent } from "src/app/shared/components/loading/loading.component";
//import {MediaObserver , MediaChange} from '@angular/flex-layout';
//import {Subscription} from 'rxjs';
import { Location } from "@angular/common";
@Component({
  selector: "app-default",
  templateUrl: "./default.component.html",
  styleUrls: ["./default.component.scss"],
})
export class DefaultComponent implements OnInit {
  cargando: boolean = true;

  @ViewChild("sidenav") public sidenav: SidebarComponent;
  @ViewChild("loading") public loading: LoadingComponent;

  isSidebarOpen2: boolean = true;
  contentMargin = 0;
  public innerWidth: number;

  constructor(
    private serv: SideBarControlService,
    private servLoading: LoadingService,
    private _location: Location
  ) {}
  ngOnInit() {}
  @HostListener("window:resize", ["$event"])
  receiveOpen(event) {
    this.isSidebarOpen2 = event;
    if (!this.isSidebarOpen2) {
      this.contentMargin = 9; //css when it's close
      //this.isSidebarOpen3 = true;
    } else {
      this.contentMargin = 26; //css when it's open
      //this.isSidebarOpen3 = false;
    }
  }

  ngAfterViewInit(): void {
    this.serv.setSidenav(this.sidenav);
    this.servLoading.setLoading(this.loading);
  }

  backClicked() {
    console.log("atras");
    this._location.back();
  }
}
