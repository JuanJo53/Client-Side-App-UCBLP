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
import { ConfigureThemeComponent } from "../../../../dialogs/themes/configure-theme/configure-theme.component";
import { DeleteItemService } from "../../../../../services/dialogs/delete-item.service";

import { Theme } from "src/app/models/Teacher/Modules/Theme";
import { CardImage } from "src/app/models/CardImage";
import { LoadingService } from 'src/app/_services/loading.service';
@Component({
  selector: "app-themes",
  templateUrl: "./themes.component.html",
  styleUrls: ["./themes.component.scss"],
})
export class ThemesComponent implements OnInit {
  //----variables-----
  cardStatus: boolean = false;
  tema = "Theme 1";
  descripcion = "Present";

  item = "theme";
  idCurso: string;
  themeCards: Theme[] = [];
  themeImages: CardImage[] = [];
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
    private route: ActivatedRoute,
    private loading:LoadingService
  ) {}
  addThemesImages(data) {
    for (let i in data) {
      let newImgT = new CardImage();
      newImgT.idImagen = data[i].id_imagen;
      newImgT.url = data[i].imagen;
      this.themeImages.push(newImgT);
    }
  }
  addThemesCards(data, idCurso: string) {
    this.themeCards = [];
    for (let i in data) {
      let newCardTheme = new Theme();
      newCardTheme.idImagen = data[i].id_imagen;
      newCardTheme.idTema = data[i].id_tema;
      newCardTheme.nombreTema = data[i].nombre_tema;
      newCardTheme.numeroTema = data[i].numero_tema;
      newCardTheme.idCurso = idCurso;
      newCardTheme.estado = data[i].estado_tema;
      this.themeCards.push(newCardTheme);
    }
  }
  ngOnInit(): void {
    this.data.changeMessage(this.item);
    this.route.parent.parent.parent.params.subscribe((param) => {
      this.idCurso = param["idCurso"];
      console.log(param);
      this.route.data.subscribe({
        next: (data) => {
          this.addThemesCards(data.themes.body, this.idCurso);
          this.addThemesImages(data.images.body);
        },
        error: (error) => {
          console.log(error.error);
        },
      });
    });
  }
  //----#variables-----
  //-----funciones-----

  agregarTemas() {
    const dialogRef = this.dialog.open(AddThemeComponent, {
      width: "400px",
      data: {
        idCurso: this.idCurso,
        images: this.themeImages,
        numero_tema: this.themeCards.length+1,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      var route = this.route;
      console.log(result);
      if (result !== "" && result != null && result !== "undefined") {
        route.data.subscribe({
          next: (data) => {
            data.themes.body = result;
            console.log(data);
            this.addThemesCards(result, this.idCurso);
          },
          error: (error) => {
            console.log("No se pudieron obtener las lecciones");
          },
        });
      }
      console.log(`Dialog result: ${result}`);
    });
  }
  configuraciones(tema) {
    const dialogRef = this.dialog.open(ConfigureThemeComponent, {
      width: "400px",
      data: {
        tema: tema,
        idCurso: this.idCurso,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result != "") {
        this.route.data.subscribe({
          next: (data) => {
            console.log(data.themes.body);
            console.log(result);
            data.themes.body = result;
          },
          error: (error) => {
            console.log("no se pudo modificar el tema");
          },
        });
      }
    });
  }
  verContenido(id: number) {
    //[where i wanna go] ,{where i am}
    this.loading.activar();

    const route=this.router.navigate([id], { relativeTo: this.route });
    route.then((result)=>{
      this.loading.desactivar();
    })
  }
  eliminar(idTema) {
    const dialogRef = this.dialog.open(DeleteCardComponent, {
      width: "400px",
      data: {
        idTema: idTema,
        tipo: "theme",
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      var temas = this.themeCards;
      var route = this.route;
      if (result != "") {
        route.data.subscribe({
          next: (data) => {
            data.themes.body.find(function (valor, index) {
              console.log(valor.id_tema);
              if (valor.id_tema == idTema) {
                data.themes.body.splice(index, 1);
                temas.splice(index, 1);
                return true;
              }
            });
          },
          error: (error) => {
            console.log("No se pudieron obtener las lecciones");
          },
        });
      }
      console.log(`Dialog result: ${result}`);
    });
  }
  //-----#funciones-----
}
