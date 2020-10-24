import { Component, OnInit } from "@angular/core";
import { SimpleCard } from "src/app/models/SimpleCard";
import { ActivatedRoute, Router } from "@angular/router";
import { DeleteCardComponent } from "src/app/modules/dialogs/delete-card/delete-card.component";
import { DeleteItemService } from "src/app/services/dialogs/delete-item.service";
import { MatDialog } from "@angular/material/dialog";
import { EditCardComponent } from "src/app/modules/dialogs/custom-modules/edit-card/edit-card.component";
import { Module } from "src/app/models/Teacher/Evaluation/Module";
import { CustomModuleRubricComponent } from "src/app/modules/dialogs/custom-modules/custom-module-rubric/custom-module-rubric.component";
import { AddCardComponent } from "src/app/modules/dialogs/custom-modules/add-card/add-card.component";
import { ContentModule } from 'src/app/models/Teacher/Modules/ContentModule';
import { SideBarControlService } from 'src/app/_services/side-bar-control.service';
import { CardColor } from 'src/app/models/CardColor';
@Component({
  selector: "app-custom-module",
  templateUrl: "./custom-module.component.html",
  styleUrls: ["./custom-module.component.scss"],
})
export class CustomModuleComponent implements OnInit {
  idModulo:number;
  nombreModulo:string="";
  cardsModulosPers: Module[] = [
  ];
  colores: CardColor[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private data: DeleteItemService,
    private sideBar:SideBarControlService
  ) {}
    cargarContenidoModulo(contenido){
      this.cardsModulosPers=[];
      for(let cont of contenido){
        let newCon= new Module();
        newCon.id=cont.id_contenido_mod_per;
        newCon.nombreModulo=cont.nombre_contenido;
        newCon.rubrica=cont.rubrica_contenido;
        newCon.idColor=cont.id_color;
        this.cardsModulosPers.push(newCon);
      }
    }
    cargarColores(data) {
      for (let i in data) {
        let newCol = new CardColor();
        newCol.idColor = data[i].id_color;
        newCol.color = data[i].valor;
        this.colores.push(newCol);
      }
      console.log(this.colores);
    }
    cargarNombreModulo(){
      this.route.parent.parent.parent.data.subscribe({
        next:(data)=>{
          if(data.modules.status==200){
            for(let modulo of data.modules.body){
              if(modulo.id_modulo==this.idModulo){
                this.nombreModulo=modulo.nombre_modulo;
              }
            }
          }
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }
  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      this.idModulo=param["idModulo"];
      console.log("idMOdulo"+String(this.idModulo));
      this.cargarNombreModulo();
    })
    this.route.data.subscribe({
      next:(data)=>{
          if(data.content.status==200){
            this.cargarContenidoModulo(data.content.body);
            this.cargarColores(data.colors.body);
          }else
          {
            console.log("error");
          }
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  agregarModulo() {
    const dialogRef = this.dialog.open(AddCardComponent, {
      width: "400px",
      data:{
        idModulo:this.idModulo
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result !== "" && result != null && result !== "undefined") {
        this.cardsModulosPers.push(result);
      }
    });
    
  }
  eliminarCustom() {}
  verlistar(contenidoModulo:ContentModule) {
    this.router.navigate(["detail",contenidoModulo.id], { relativeTo: this.route });
  }

  editarPorcentajes() {
    this.route.data.subscribe({
      next: (data) => {
        const dialogRef = this.dialog.open(CustomModuleRubricComponent, {
          width: "400px",
          data: {
            rubricas: this.cardsModulosPers,
            idModulo:this.idModulo
          },
        });
        dialogRef.afterClosed().subscribe((result) => {
          if (result !== "" && result != null && result !== "undefined") {
            this.cardsModulosPers=result;
          }
        });
      },

      error: (err) => {},
    });
  }

  editarCard(contenido) {
    const dialogRef = this.dialog.open(EditCardComponent, {
      width: "400px",
      data:{
        contenido:contenido
      }
    });
  }
  eliminarCard(contenido:ContentModule,index) {
    const dialogRef = this.dialog.open(DeleteCardComponent, {
      width: "400px",
      data:{
        id:contenido.id,
        tipo:"Custom Module Content",
        idModulo:this.idModulo
      }
    });
    dialogRef.afterClosed().subscribe((result)=>{
      if(result==="ok"){
        this.cardsModulosPers.splice(index,1);
      }
    })
  }
  
  sacarColor(id) {
    for (let color of this.colores) {
      if (color.idColor == id) {
        return color.color;
      }
    }
  }
}
