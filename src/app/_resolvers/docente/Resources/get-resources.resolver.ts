import { Injectable } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/general_services/token-storage.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { ClassroomService } from 'src/app/_services/teacher_services/classroom.service';
import { MyClassService } from 'src/app/_services/teacher_services/my-class.service';
import { LessonService } from 'src/app/_services/teacher_services/lesson.service';
import { ResourcesService } from 'src/app/_services/teacher_services/resources.service';
import { SectionsService } from 'src/app/_services/teacher_services/sections.service';

@Injectable({
  providedIn: 'root'
})
export class GetResourcesResolver{

  constructor(private resService:SectionsService,private tokenService:TokenStorageService,private router:Router) { }
  resolve(route:ActivatedRouteSnapshot){
    const idCurso=route.parent.params['idCurso'];
    if(this.tokenService.getToken()==="undefined"||this.tokenService.getToken()==null){
      this.router.navigate(['/']);
    }
    else{ 
        var result=this.resService.getSections(idCurso);
      return result;
    }
  }
}



