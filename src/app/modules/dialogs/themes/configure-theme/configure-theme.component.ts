import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-configure-theme",
  templateUrl: "./configure-theme.component.html",
  styleUrls: ["./configure-theme.component.scss"],
})
export class ConfigureThemeComponent implements OnInit {
  nombreTema: string = "";
  radioButtonValue: string = "";
  constructor() {}
  ngOnInit(): void {}
  accept() {
    console.log(
      "\n nombre :" + this.nombreTema + "\n estado :" + this.radioButtonValue
    );
  }
}
