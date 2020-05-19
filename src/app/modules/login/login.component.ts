import { Component, OnInit } from "@angular/core";
import { TeacherLogin } from 'src/app/models/TeacherLogin';
import { from } from 'rxjs';
import { AuthService } from 'src/app/_services/general_services/auth.service';
import { TokenStorageService } from 'src/app/_services/general_services/token-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
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
    idDocente:0 ,
    contraseniaDocente:"",
    correoDocente:""
  };
  //-----#variables
  //-----funciones
  LoginDocente(){
   this.authService.loginDocente(this.loginTeacher)
   .subscribe(
     {
       next:data=>{
        this.tokenStorage.saveToken(data.token); 
        if(this.tokenStorage.getToken()==='undefined'||this.tokenStorage.getToken()==null){
         console.log("No se pudo iniciar sesión");
        }
        else{
          this.router.navigate(['/classroom']);
        }
       
        },
       error:error=>console.log(error)
     }
   )
  }
  //-----#funciones
  constructor(private authService:AuthService,private tokenStorage:TokenStorageService,private router:Router) {}
  ngOnInit() {    
    console.log(this.tokenStorage.getToken());
    if(this.tokenStorage.getToken()==='undefined'||this.tokenStorage.getToken()==null){
    }
    else{      
      this.router.navigate(['/classroom']);
      return false;
    }
  }

}
