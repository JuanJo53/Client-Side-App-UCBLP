import { Injectable } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/general_services/token-storage.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { ClassroomService } from 'src/app/_services/teacher_services/classroom.service';
import { MyClassService } from 'src/app/_services/teacher_services/my-class.service';
import { ThemesService } from 'src/app/_services/teacher_services/themes.service';
import { ContenidoModuloService } from 'src/app/_services/teacher_services/contenido-modulo.service';

@Injectable({
  providedIn: 'root'
})
export class GetScoreContentModuleResolver{

  constructor(private servCon:ContenidoModuloService,private tokenService:TokenStorageService,private router:Router) { }
  resolve(route:ActivatedRouteSnapshot){
    const idContenidoModulo=route.params['idContenidoModulo'];
    console.log(idContenidoModulo); 
    if(this.tokenService.getToken()==="undefined"||this.tokenService.getToken()==null){
      this.router.navigate(['/']);

    }
    else{      
      return this.servCon.getNotasContenidoModulos(idContenidoModulo);
    }
  }
}



