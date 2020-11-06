import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { CardThemes } from "src/app/models/CardThemes";
import { SimpleCard } from "src/app/models/SimpleCard";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { DeleteCardComponent } from "../../../../../dialogs/delete-card/delete-card.component";
import { AddLessonComponent } from "../../../../../dialogs/lesson/add-lesson/add-lesson.component";
import { DeleteItemService } from "../../../../../../services/dialogs/delete-item.service";
import { ConfigureLessonComponent } from "../../../../../dialogs/lesson/configure-lesson/configure-lesson.component";

import { Lesson } from "src/app/models/Teacher/Modules/Lesson";
import { CardImage } from "src/app/models/CardImage";
import { TypeLesson } from "src/app/models/Teacher/Modules/TypeLesson";
import { LoadingService } from 'src/app/_services/loading.service';
@Component({
  selector: "app-theme-content",
  templateUrl: "./theme-content.component.html",
  styleUrls: ["./theme-content.component.scss"],
})
export class ThemeContentComponent implements OnInit {
  theme: {
    id: number;
    titulo: string;
    subtitulo: string;
  };
  //----variables-----
  tema = "Theme 1";
  descripcion = "Present";
  item = "theme";
  idCurso = "";
  idTema = "";
  lessonCards: Lesson[] = [];
  cardImages: CardImage[] = [];
  typesofLessons: TypeLesson[] = [];
  addImages(data) {
    for (let i in data) {
      let newImgT = new CardImage();
      newImgT.idImagen = data[i].id_imagen;
      newImgT.url = data[i].imagen;
      this.cardImages.push(newImgT);
    }
  }
  addTypeLesson(data) {
    for (let i in data) {
      let newTLes = new TypeLesson();
      newTLes.idTipo = data[i].id_tipo_leccion;
      newTLes.tipo = data[i].tipo_leccion;
      this.typesofLessons.push(newTLes);
    }
  }
  simpleCards: SimpleCard[] = [
    {
      id: 1,
      titulo: "Theme Test 1",
      color: "#D77A61",
    },
    {
      id: 2,
      titulo: "Theme Test 2",
      color: "#D77A61",
    },
  ];
  lessonCard: CardThemes = {
    id: 0,
    titulo: "",
    subtitulo: "",
    color: "",
  };
  simpleCard: SimpleCard = {
    id: 0,
    titulo: "",
    color: "",
  };

  //----#variables-----
  constructor(
    public dialog: MatDialog,
    private data: DeleteItemService,
    private router: Router,
    private route: ActivatedRoute,
    private loading:LoadingService
  ) {}

  agregarCardsLecciones(datales) {
    for (let i in datales) {
      let newLesson = new Lesson();
      newLesson.id = datales[i].id_leccion;
      newLesson.idImagen = datales[i].id_imagen;
      newLesson.numeroLeccion = datales[i].numero_leccion;
      newLesson.nombre = datales[i].nombre_leccion;
      newLesson.idTipoLeccion = datales[i].id_tipo_leccion;
      newLesson.estado = datales[i].estado_leccion;
      this.lessonCards.push(newLesson);
    }
  }
  agregarDatos() {
    this.route.data.subscribe({
      next: (data) => {
        if (data.lessons.status == 200) {
          var datales = data.lessons.body;
          var images = data.images.body;
          var types = data.types.body;
          console.log(datales);
          this.agregarCardsLecciones(datales);
          this.addImages(images);
          this.addTypeLesson(types);
        } else {
          console.log("No se pudieron obtener las lecciones");
        }
      },
      error: (error) => {
        console.log("No se pudieron obtener las lecciones");
      },
    });
  }
  cargarId() {
    this.route.parent.parent.parent.parent.params.subscribe((param) => {
      this.idCurso = param["idCurso"];
    });
    this.route.parent.params.subscribe((param) => {
      this.idTema = param["idTema"];
    });
  }
  ngOnInit(): void {
    this.cargarId();
    this.agregarDatos();
    this.theme = {
      id: this.route.snapshot.params["id"],
      titulo: this.route.snapshot.params["id"],
      subtitulo: this.route.snapshot.params["id"],
    };
    this.route.params.subscribe((params: Params) => {
      this.theme.id = params["id"];
    });
    this.data.changeMessage(this.item);
  }
  //-----funciones-----

  agregarLeccion() {
    console.log(this.idTema);
    const dialogRef = this.dialog.open(AddLessonComponent, {
      width: "400px",
      data: {
        types: this.typesofLessons,
        images: this.cardImages,
        numero: this.lessonCards.length + 1,
        idTema: this.idTema,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result != "") {
        this.route.data.subscribe({
          next: (data) => {
            if(result!=null&&result!=="undefined"&&result!==""){
              data.lessons.body = result;
              this.lessonCards = [];
              this.agregarCardsLecciones(result);
            }
          },
          error: (error) => {
            console.log("no se pudo añadir el tema");
          },
        });
      }
    });
  }
  configuraciones(leccion) {
    const dialogRef = this.dialog.open(ConfigureLessonComponent, {
      width: "400px",
      data: {
        leccion: leccion,
        idCurso: this.idCurso,
        images: this.cardImages,
        types: this.typesofLessons,
        idTema: this.idTema,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result != "") {
        this.route.data.subscribe({
          next: (data) => {
            data.lessons.body = result;
          },
          error: (error) => {
            console.log("no se pudo modificar el tema");
          },
        });
      }
    });
  }
  listar() {
    console.log("click on list");
  }
  verContenido(id: number) {
    //[where i wanna go] ,{where i am}this.loading.activar();
      this.loading.activar();

    const route=this.router.navigate(["/themes", id], { relativeTo: this.route });
    route.then((result)=>{
      this.loading.desactivar();
    })
    
  }

  eliminar(idLec) {
    const dialogRef = this.dialog.open(DeleteCardComponent, {
      width: "400px",
      data: {
        idLec: idLec,
        tipo: "lesson",
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      var lessons = this.lessonCards;
      var route = this.route;
      if (result != "") {
        route.data.subscribe({
          next: (data) => {
            this.lessonCards.find(function (valor, index) {
              if (valor.id === idLec) {
                lessons.splice(index, 1);
                data.lessons.body.splice(index, 1);
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
  verLecciones(idLeccion) {
    //[where i wanna go] ,{where i am}
    this.loading.activar();

    const route=this.router.navigate([idLeccion], { relativeTo: this.route });
    route.then((result)=>{
      this.loading.desactivar();
    })
  }
  eliminarThemeTest() {
    const dialogRef = this.dialog.open(DeleteCardComponent, {
      width: "400px",
      data: {
        tipo: "theme test",
      },
    });
  }

  //-----#funciones-----
}
