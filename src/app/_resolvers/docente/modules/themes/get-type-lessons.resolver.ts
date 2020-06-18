import { Injectable } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/general_services/token-storage.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { ClassroomService } from 'src/app/_services/teacher_services/classroom.service';
import { MyClassService } from 'src/app/_services/teacher_services/my-class.service';
import { LessonService } from 'src/app/_services/teacher_services/lesson.service';

@Injectable({
  providedIn: 'root'
})
export class GetTypeLessonsResolver{

  constructor(private lessonService:LessonService,private tokenService:TokenStorageService,private router:Router) { }
  resolve(route:ActivatedRouteSnapshot){
    if(this.tokenService.getToken()==="undefined"||this.tokenService.getToken()==null){
      this.router.navigate(['/']);
    }
    else{      
      return this.lessonService.getTypeLesson();
    }
  }
}



