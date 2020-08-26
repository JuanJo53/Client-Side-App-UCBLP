import { Component, OnInit } from "@angular/core";
import { SimpleCard } from "src/app/models/simpleCard";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { InitialInformationComponent } from "../../../../../../dialogs/create-practice/initial-information/initial-information.component";
import { AddLessonComponent } from "../../../../../../dialogs/lesson/add-lesson/add-lesson.component";
import { DeleteItemService } from "../../../../../../../services/dialogs/delete-item.service";
import { ConfigureLessonContentComponent } from "../../../../../../dialogs/lesson/configure-lesson-content/configure-lesson-content.component";

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { DeleteCardComponent } from "src/app/modules/dialogs/delete-card/delete-card.component";
import { LoadingService } from 'src/app/_services/loading.service';
@Component({
  selector: "app-theme-lessons",
  templateUrl: "./theme-lessons.component.html",
  styleUrls: ["./theme-lessons.component.scss"],
})
export class ThemeLessonsComponent implements OnInit {
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
  practices: SimpleCard[] = [];

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private loading:LoadingService
  ) {}
  agregarPracticas(data) {
    this.practices = [];
    for (let practica of data) {
      this.practices.push({
        color: "#D77A61",
        titulo: practica.nombre_practica,
        id: practica.id_practica,
      });
    }
  }
  ngOnInit(): void {
    this.route.data.subscribe({
      next: (data) => {
        if (data.practicas.status == 200) {
          this.agregarPracticas(data.practicas.body);
        } else {
          console.log("error");
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  //-----funciones-----

  agregarTemas() {
    // const dialogRef = this.dialog.open(AddThemeComponent, { width: "400px" });
    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
  configuraciones() {
    const dialogRef = this.dialog.open(ConfigureLessonContentComponent, {
      width: "400px",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  verDetalle(practice: SimpleCard) {
    this.router.navigate(["detail", practice.id], { relativeTo: this.route });
    console.log("click on list");
  }
  verContenido(id: number) {
    //[where i wanna go] ,{where i am}
    //this.router.navigate(["/themes", id], { relativeTo: this.route });
  }
  eliminarLessonContent() {
    const dialogRef = this.dialog.open(DeleteCardComponent, {
      width: "400px",
      data: {
        tipo: "lesson Content",
      },
    });
  }
  eliminarPractica() {
    const dialogRef = this.dialog.open(DeleteCardComponent, {
      width: "400px",
      data: {
        tipo: "practice",
      },
    });
  }

  verLecciones() {
    //[where i wanna go] ,{where i am}
    //this.router.navigate(["lessons"], { relativeTo: this.route });
  }
  agregarPractica() {
    // const dialogRef = this.dialog.open(ProgressBarComponent, {
    //   width: "1000px",
    // });
    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });
    this.loading.activar();

    const route=
    this.router.navigate(["practice"], { relativeTo: this.route });
    console.log("clicked");
    route.then((result)=>{
      this.loading.desactivar();
    })
  }
  configuracionPractica(idPractica) {
    console.log(idPractica);
    this.router.navigate(["edit-practice",idPractica], { relativeTo: this.route });
  }
  //-----#funciones-----
}
