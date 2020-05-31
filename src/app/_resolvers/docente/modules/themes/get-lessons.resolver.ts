import { Injectable } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/general_services/token-storage.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { ClassroomService } from 'src/app/_services/teacher_services/classroom.service';
import { MyClassService } from 'src/app/_services/teacher_services/my-class.service';
import { ModulesService } from 'src/app/_services/teacher_services/modules.service';

@Injectable({
  providedIn: 'root'
})
export class GetLessonsResolver{

  constructor(private lessonService:ModulesService,private tokenService:TokenStorageService,private router:Router) { }
  resolve(route:ActivatedRouteSnapshot){
    const idCurso=route.parent.parent.params['idCurso'];
    const idTema=route.parent.params['idTema'];
    console.log(idTema); 
    if(this.tokenService.getToken()==="undefined"||this.tokenService.getToken()==null){
      this.router.navigate(['/']);
    }
    else{      
      return this.lessonService.getLessons(idTema);
    }
  }
}



