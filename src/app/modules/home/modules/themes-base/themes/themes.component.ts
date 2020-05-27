import { Component, OnInit } from "@angular/core";
import { CardThemes } from "src/app/models/CardThemes";
import { Router, ActivatedRoute } from "@angular/router";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { DeleteCardComponent } from "../../../../dialogs/delete-card/delete-card.component";
import { AddThemeComponent } from "../../../../dialogs/themes/add-theme/add-theme.component";
import { DeleteItemService } from "../../../../../services/dialogs/delete-item.service";
import { ConfigureThemeComponent } from "../../../../dialogs/themes/configure-theme/configure-theme.component";
import { Theme } from 'src/app/models/Teacher/Modules/Theme';
import { ThemeImage } from 'src/app/models/Teacher/Modules/ThemeImage';
@Component({
  selector: "app-themes",
  templateUrl: "./themes.component.html",
  styleUrls: ["./themes.component.scss"],
})
export class ThemesComponent implements OnInit {
  //----variables-----
  tema = "Theme 1";
  descripcion = "Present";

  item = "theme";
  idCurso:string;
  themeCards: Theme[] = [    
  ];
  themeImages: ThemeImage[] = [    
  ];
  cardTheme: CardThemes = {
    id: 0,
    titulo: "",
    subtitulo: "",
    color: "",
  };
  constructor(
    public dialog: MatDialog,
    private data: DeleteItemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  addThemesImages(data){
    for(let i in data){
     let newImgT=new ThemeImage();
     newImgT.idTemaImagen=data[i].id_imagen;
     newImgT.url=data[i].imagen;
     this.themeImages.push(newImgT);
    }
  }
  addThemesCards(data,idCurso:string){
    this.themeCards=[];
    for(let i in data){
      let newCardTheme=new Theme();
      newCardTheme.idImagen=data[i].id_imagen;
      newCardTheme.idTema=data[i].id_tema;
      newCardTheme.nombreTema=data[i].nombre_tema;
      newCardTheme.numeroTema=data[i].numero_tema;
      newCardTheme.idCurso=idCurso;
      newCardTheme.estado=data[i].tema_habilitado;
      this.themeCards.push(newCardTheme);
    }
  }
  ngOnInit(): void {
    
    this.data.changeMessage(this.item);
    this.route.parent.parent.parent.params.subscribe((param)=>{
      this.idCurso=param['idCurso'];
      console.log(param);
      this.route.data.subscribe({
        next:(data)=>{
          this.addThemesCards(data.themes.body,this.idCurso);
          this.addThemesImages(data.images.body);
        },
        error:(error)=>{
          console.log(error.error);
        }
      })
    })
    
    
  }
  //----#variables-----
  //-----funciones-----

  agregarTemas() {
    const dialogRef = this.dialog.open(AddThemeComponent, { width: "400px" ,
    data:{
      idCurso:this.idCurso,
      images:this.themeImages,
      numero_tema:this.themeCards.length
    }
  });
    dialogRef.afterClosed().subscribe((result) => {
      if(result!==""){
        this.addThemesCards(result,this.idCurso);
      }
      console.log(`Dialog result: ${result}`);
    });
  }
  configuraciones(tema) {
    const dialogRef = this.dialog.open(ConfigureThemeComponent, {
      width: "400px",
      data:{
        tema:tema
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if(result!=""){
        tema=result;
      }
    });
  }
  verContenido(id: number) {
    //[where i wanna go] ,{where i am}
    
    this.router.navigate([id], { relativeTo: this.route });
  }
  eliminar(idTema) {
    const dialogRef = this.dialog.open(DeleteCardComponent, { width: "400px" 
    ,data:{
      idTema:idTema,
      tipo:"Temas"
    }  
  });
    dialogRef.afterClosed().subscribe((result) => {
      var temas=this.themeCards;
      if(result!=""){
        this.themeCards.find(function(valor,index){
          if(valor.idTema===idTema){
            temas.splice(index,1);

          }
        });
        

      }
      console.log(`Dialog result: ${result}`);
    });
  }
  //-----#funciones-----
}
