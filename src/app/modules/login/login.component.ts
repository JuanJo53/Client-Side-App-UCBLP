import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  //-----variables
  textoLogo: string = "UCB English";
  imagenLogo: string = "assets/logo.png";
  usuario = "teacher";
  correoAcademicoUsuario: string;
  contraseniaUsuario: string;
  //-----#variables
  //-----funciones
  btnLogin() {
    console.log("login button presionado");
    console.log(this.correoAcademicoUsuario);
    console.log(this.contraseniaUsuario);
  }
  //-----#funciones
  constructor() {}
  ngOnInit() {}
}
