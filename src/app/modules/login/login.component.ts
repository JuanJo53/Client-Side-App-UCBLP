import { Component, OnInit } from "@angular/core";
import { TeacherLogin } from 'src/app/models/TeacherLogin';
import { from } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
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
  loginTeacher:TeacherLogin={
    contrasenia_docente:"",
    correo_docente:""
  };
  //-----#variables
  //-----funciones
  LoginDocente(){
   this.authService.loginDocente(this.loginTeacher)
   .subscribe(
     {
       next:data=>{
        this.tokenStorage.saveToken(data.token); 
        console.log(this.tokenStorage.getToken());
        console.log(data.user)},
       error:error=>console.log(error)
     }
   )
  }
  //-----#funciones
  constructor(private authService:AuthService,private tokenStorage:TokenStorageService) {}
  ngOnInit() {
  }

}
