import { Component, OnInit } from "@angular/core";
import { SimpleCard } from "src/app/models/simpleCard";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-custom-module",
  templateUrl: "./custom-module.component.html",
  styleUrls: ["./custom-module.component.scss"],
})
export class CustomModuleComponent implements OnInit {
  customCards: SimpleCard[] = [
    {
      id: 1,
      titulo: "Practice 1",
      color: "#D77A61",
    },
    {
      id: 2,
      titulo: "Practice 2",
      color: "#D77A61",
    },
    {
      id: 3,
      titulo: "Practice 3",
      color: "#D77A61",
    },
    {
      id: 4,
      titulo: "Practice 4",
      color: "#D77A61",
    },
  ];
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
  editarPorcentajes() {}
  agregarModulo() {}
  eliminarCustom() {}
  verlistar() {
    this.router.navigate(["detail"], { relativeTo: this.route });
  }
  eliminar() {}
  configuraciones() {}
}
