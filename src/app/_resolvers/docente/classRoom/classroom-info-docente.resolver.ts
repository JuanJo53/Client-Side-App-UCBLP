import { Injectable } from '@angular/core';
import { UserService } from '../../../_services/general_services/user.service';
import { TokenStorageService } from 'src/app/_services/general_services/token-storage.service';
import { Router } from '@angular/router';
import { ClassroomService } from 'src/app/_services/teacher_services/classroom.service';

@Injectable({
  providedIn: 'root'
})
export class ClassroomDocenteResolver{

  constructor(private classroomService:ClassroomService,private tokenService:TokenStorageService,private router:Router) { }
  resolve(){
    
    if(this.tokenService.getToken()==="undefined"||this.tokenService.getToken()==null){
      this.router.navigate(['/']);

    }
    else{      
      return this.classroomService.getClassRoomInformation();
      /*return [{
        id_curso:"1",
        nombre_curso:"English 2",
        semestre:"Semestre 1",
        cant_alumnos:"15",
        dias:{
          dia1:{dia:"Mon",horai:"16:00",horaf:"18:00"},
          dia2:{dia:"Tue",horai:"16:00",horaf:"18:00"},
          dia3:{dia:"Wed",horai:"16:00",horaf:"18:00"},
          dia4:{dia:"Thu",horai:"16:00",horaf:"18:00"},
        }
        
      }];*/
    }
  }
}
