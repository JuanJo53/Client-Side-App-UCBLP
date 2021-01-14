import { Injectable } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/general_services/token-storage.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { ClassroomService } from 'src/app/_services/teacher_services/classroom.service';
import { MyClassService } from 'src/app/_services/teacher_services/my-class.service';
import { PracticesService } from 'src/app/_services/teacher_services/practices.service';

@Injectable({
  providedIn: 'root'
})
export class GetPracticesResolver{

  constructor(private practi:PracticesService,private tokenService:TokenStorageService,private router:Router) { }
  resolve(route:ActivatedRouteSnapshot){
    const idLeccion=route.parent.params['idLeccion'];
    if(this.tokenService.getToken()==="undefined"||this.tokenService.getToken()==null){
      this.router.navigate(['/']);

    }
    else{      
      return this.practi.getPractica(idLeccion)
      
    }
  }
}

