import { Component, OnInit } from "@angular/core";
import { EvaluationCard } from "src/app/models/Teacher/EvaluationCard";
import { Router, ActivatedRoute } from "@angular/router";
import { ListaEstudiante } from "src/app/models/Teacher/MyClass/ListaEstudiante";
import { Module } from "src/app/models/Teacher/Evaluation/Module";
import { CardColor } from "src/app/models/CardColor";
import { CardImage } from "src/app/models/CardImage";
@Component({
  selector: "app-students-profile",
  templateUrl: "./students-profile.component.html",
  styleUrls: ["./students-profile.component.scss"],
})
export class StudentsProfileComponent implements OnInit {
  //variables
  estudiante: ListaEstudiante = new ListaEstudiante();
  imagenesPred: string[] = [
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1564144006388-615f4f4abb6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1009&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  ];
  coloresPred: string[] = ["9c5faf", "be8383", "498161", "403837", "27649b"];
  colores: CardColor[] = [];
  images: CardImage[] = [];
  defaultCard: Module[] = [];
  customCards: Module[] = [];
  getImageUrl(image) {
    return "url(" + image + ")";
  }
  getImageIndex(index: string) {
    for (let image of this.images) {
      if (image.idImagen === index) {
        return image.url;
      }
    }
  }
  sacarColor(id) {
    for (let color of this.colores) {
      if (color.idColor == id) {
        return color.color;
      }
    }
  }

  llenarModulos(modulos) {
    var promedio = 0;
    for (let modulo of modulos) {
      let newEvaluationCard = new Module();
      promedio += (modulo.nota_modulo * modulo.rubrica) / 100;
      newEvaluationCard.id = modulo.id_modulo;
      newEvaluationCard.idImagen = modulo.id_imagen;
      newEvaluationCard.idColor = modulo.id_color;
      newEvaluationCard.nombreModulo = modulo.nombre_modulo;
      newEvaluationCard.rubrica = (modulo.nota_modulo * modulo.rubrica) / 100;
      if (modulo.id_tipo_modulo == 1) {
        this.defaultCard.push(newEvaluationCard);
      } else {
        this.customCards.push(newEvaluationCard);
      }
    }
    this.estudiante.promedio = Number(promedio.toPrecision(3));
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
  cargarImagenes(data) {
    for (let i in data) {
      let newImg = new CardImage();
      newImg.idImagen = data[i].id_imagen;
      newImg.url = data[i].imagen;
      this.images.push(newImg);
    }
    console.log(this.images);
  }
  agregarDatos(data, param) {
    console.log(data);
    this.estudiante.id = data.id_alumno;
    this.estudiante.nombre =
      data.ap_paterno_alumno +
      " " +
      data.ap_materno_alumno +
      " " +
      data.nombre_alumno;
    this.estudiante.correo = data.correo_alumno;

    this.estudiante.id_alumno_curso = param["idAlumnoCurso"];
    this.llenarModulos(data.modulos);
  }
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.data.subscribe({
      next: (data) => {
        this.route.params.subscribe((param) => {
          this.agregarDatos(data.students.body, param);
          this.cargarColores(data.colors.body);
          this.cargarImagenes(data.images.body);
        });
      },
      error: (error) => {},
    });
  }
  verContenido(idCard) {
    if (idCard == 1) {
      this.router.navigate(["attendance-score"], { relativeTo: this.route });
    } else {
      this.router.navigate(["others-score"], { relativeTo: this.route });
    }
    //console.log("ver ceontenido card");
  }
  verContenido2() {}
}
