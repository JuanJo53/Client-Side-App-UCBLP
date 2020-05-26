import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { SharedService } from "../../shared.service";
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(private data: SharedService,private route:ActivatedRoute,private router:Router) {}
  // constructor() {}
  // ngOnInit(): void {}
  ngOnInit() {
    this.data.currentMessage.subscribe((message) => (this.message = message));
  }
  navigateGeneral(link:string) {
    this.data.changeMessage(link);
    this.route.params.subscribe(
      (params)=>{      
        this.router.navigate(['teacher',params['idCurso'],link.toLowerCase()]); 
        
      }
    );
  }
  navigateModules(link:string) {
    this.data.changeMessage(link);
    this.route.params.subscribe(
      (params)=>{      
        this.router.navigate(['teacher',params['idCurso'],"modules",link.toLowerCase()]); 
        
      }
    );
  }
  navigationMyClass(link:string) {
    this.data.changeMessage(link);
    this.route.params.subscribe(
      (params)=>{      
        this.router.navigate(['teacher',params['idCurso'],"my-class",link.toLowerCase()]); 
        
      }
    );
  }
}
