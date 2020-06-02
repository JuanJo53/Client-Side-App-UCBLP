import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { CardThemes } from "src/app/models/CardThemes";
import { SimpleCard } from "src/app/models/simpleCard";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { DeleteCardComponent } from "../../../../../dialogs/delete-card/delete-card.component";
import { AddThemeComponent } from "../../../../../dialogs/themes/add-theme/add-theme.component";
import { DeleteItemService } from "../../../../../../services/dialogs/delete-item.service";
import { ConfigureThemeComponent } from "../../../../../dialogs/themes/configure-theme/configure-theme.component";
import { Lesson } from 'src/app/models/Teacher/Modules/Lesson';
import { CardImage } from 'src/app/models/Teacher/Modules/CardImage';
import { TypeLesson } from 'src/app/models/Teacher/Modules/TYpeLesson';
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
  idCurso="";
  idTema="";
  lessonCards: Lesson[] = [
    
  ];
  cardImages:CardImage[]=[];
  typesofLessons:TypeLesson[]=[];
  addImages(data){
    for(let i in data){
     let newImgT=new CardImage();
     newImgT.idTemaImagen=data[i].id_imagen;
     newImgT.url=data[i].imagen;
     this.cardImages.push(newImgT);
    }
  }
  addTypeLesson(data){
    for(let i in data){
     let newTLes=new TypeLesson();
     newTLes.idTipo=data[i].id_tipo_leccion;
     newTLes.tipo=data[i].tipo_leccion;
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
    private route: ActivatedRoute
  ) {}

  agregarCardsLecciones(datales){
    for(let i in datales)
          {
            let newLesson=new Lesson();
            newLesson.id=datales[i].id_leccion;
            newLesson.idImagen=datales[i].id_imagen;
            newLesson.numeroLeccion=datales[i].numero_leccion;
            newLesson.nombre=datales[i].nombre_leccion;
            newLesson.idTipoLeccion=datales[i].id_tipo_leccion;
            newLesson.estado=datales[i].estado_leccion;
            this.lessonCards.push(newLesson);
          }
  }
  agregarDatos(){
    this.route.data.subscribe({
      next:(data)=>{
        if(data.lessons.status==200){
          var datales=data.lessons.body;
          var images=data.images.body;
          var types=data.types.body;
          console.log(datales);
          this.agregarCardsLecciones(datales);
          this.addImages(images);
          this.addTypeLesson(types);
          
        }
        else{
          console.log("No se pudieron obtener las lecciones");

        }
      },
      error:(error)=>{
        console.log("No se pudieron obtener las lecciones");
      }
    });
  }
  cargarId(){
    this.route.parent.parent.parent.parent.params.subscribe((param)=>{
      this.idCurso=param['idCurso'];
    })
    this.route.parent.params.subscribe((param)=>{
      this.idTema=param['idTema'];
    })
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

  agregarTemas() {
    const dialogRef = this.dialog.open(AddThemeComponent, { width: "400px" });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  configuraciones(leccion) {
    const dialogRef = this.dialog.open(ConfigureThemeComponent, {
      width: "400px",
      data:{
        leccion:leccion,
        idCurso:this.idCurso,
        images:this.cardImages,
        types:this.typesofLessons,
        idTema:this.idTema,
        tipo:"Lesson"
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if(result!=""){
        this.route.data.subscribe({
          next:(data)=>{
            data.lessons.body=result;
          },
          error:(error)=>{
            console.log("no se pudo modificar el tema");
          }
        })
      }
    });
  }
  listar() {
    console.log("click on list");
  }
  verContenido(id: number) {
    //[where i wanna go] ,{where i am}
    this.router.navigate(["/themes", id], { relativeTo: this.route });
  }
  
  eliminar(idLec) {
    const dialogRef = this.dialog.open(DeleteCardComponent, { width: "400px" 
    ,data:{
      idLec:idLec,
      tipo:"lesson"
    }  
  });
  dialogRef.afterClosed().subscribe((result)  => {
    var lessons=this.lessonCards;
    var route=this.route;
    if(result!=""){
      route.data.subscribe({
        next:(data)=>{
          this.lessonCards.find(function(valor,index){
            if(valor.id===idLec){
              lessons.splice(index,1);
              data.lessons.body.splice(index,1);
            }
          });
        },
        error:(error)=>{
          console.log("No se pudieron obtener las lecciones");
        }
      });
      

    }
    console.log(`Dialog result: ${result}`);
  });
  }
  verLecciones() {
    //[where i wanna go] ,{where i am}

    this.router.navigate(["lessons"], { relativeTo: this.route });
  }

  //-----#funciones-----
 
}
