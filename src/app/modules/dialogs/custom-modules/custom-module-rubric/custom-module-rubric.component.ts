import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-custom-module-rubric",
  templateUrl: "./custom-module-rubric.component.html",
  styleUrls: ["./custom-module-rubric.component.scss"],
})
export class CustomModuleRubricComponent implements OnInit {
  disableTextbox = true;
  listaRubricas: any[] = ["a", "b"];
  porcentajes: any[] = [100, 100];
  total = 100;
  constructor() {}

  ngOnInit(): void {}
  aceptar(): void {}

  cancelar() {}
  toggleDisable() {
    this.disableTextbox = !this.disableTextbox;
  }
}
