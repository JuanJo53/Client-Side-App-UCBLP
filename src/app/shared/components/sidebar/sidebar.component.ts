import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { SharedService } from "../../shared.service";
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from 'src/app/_services/loading.service';

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  mPersonalizados:any[]=[];
  isSidebarOpen: boolean = true;
  mylogo: string = "assets/logo.png";
  message: String = "link";

  @Output() openEvent = new EventEmitter<boolean>();
  onSidebarMenuToggle() {
    console.log("toogle : ", this.isSidebarOpen);
    this.isSidebarOpen = !this.isSidebarOpen;
    this.openEvent.emit(this.isSidebarOpen);
  }
  constructor(
    private data: SharedService,
    private route:ActivatedRoute,
    private router:Router,
    private servLoading:LoadingService) {}
  // constructor() {}
  // ngOnInit(): void {}
  agregarModulos2(data){
    this.mPersonalizados=[];
    for(let datos of data){
      if(datos.id_tipo_modulo==2&&datos.estado_modulo==1){
        this.mPersonalizados.push({
          id:datos.id_modulo,
          nombre:datos.nombre_modulo
        })
      }
    }
  } 
  getModulos(){
    return this.mPersonalizados;
  }
  modificarModulo(data,index){
    this.mPersonalizados[index]=data;
  }
  eliminarModulo(index){
    this.mPersonalizados.splice(index,1)
  }
  agregarModulos(data){
    console.log(data)
    this.mPersonalizados=[];
    for(let datos of data){
      this.mPersonalizados.push({
        id:datos.id_modulo,
        nombre:datos.nombre_modulo
      })
    }
  }
  decirHola(){
    console.log("hola");
  }
  navigateCustom(modulo){
    this.servLoading.activar();
    console.log(modulo);
    this.route.params.subscribe(
      (params)=>{      
        const nav=this.router.navigate(['teacher',params['idCurso'],"modules","custom",modulo.id]); 
        nav.then((data)=>{
          
          this.servLoading.desactivar();
        })
      }
    );
  }
  ngOnInit() {
    this.data.currentMessage.subscribe((message) => (this.message = message));
    this.route.data.subscribe({
      next:(data)=>{
        this.agregarModulos(data.modules.body);
      },
     error:(err)=>{
       console.log(err);
     }
    });
  }
  navigateGeneral(link:string) {
    this.servLoading.activar();
    this.data.changeMessage(link);
    this.route.params.subscribe(
      (params)=>{      
        const nav=this.router.navigate(['teacher',params['idCurso'],link.toLowerCase()]); 
        nav.then((data)=>{
          
          this.servLoading.desactivar();
        })
        
      }
    );
  }
  navigateModules(link:string) {
    this.servLoading.activar();
    this.data.changeMessage(link);
    this.route.params.subscribe(
      (params)=>{      
        const nav=this.router.navigate(['teacher',params['idCurso'],"modules",link.toLowerCase()]); 
        nav.then((data)=>{
          
          this.servLoading.desactivar();
        })
      }
    );
  }
  navigationMyClass(link:string) {
    this.servLoading.activar();
    this.data.changeMessage(link);
    this.route.params.subscribe(
      (params)=>{      
        const nav=this.router.navigate(['teacher',params['idCurso'],"my-class",link.toLowerCase()]); 
        nav.then((data)=>{
          
          this.servLoading.desactivar();
        })
      }
    );
  }
}
