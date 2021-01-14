import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { TokenStorageService } from '../_services/general_services/token-storage.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'
import { Token } from '@angular/compiler/src/ml_parser/lexer';
const TOKEN_DOCENTE="token_doc";
@Injectable()
//esta parte sirve para poder interceptar las peticiones que se le hacen al servidor
//cada vez que se hace una peticion el servidor se le agrega el token a la peticion
export class AuthInterceptor implements HttpInterceptor{
    constructor(private router:Router,private tokenT:TokenStorageService){}
    intercept(req:HttpRequest<any>,next:HttpHandler){

        const token: string=this.tokenT.getToken();
        let request=req;
        //se verifica si el toquen es vacio o nullo
        if(token==='undefined'||token==null){
          this.router.navigate(['/']);
        }
        else{
          //aqui se agrega el token al header
          request=req.clone({
            setHeaders:{
              authorization:`${token}`
            }
          });
        }
        //aqui se returna el request pero con el token añadido
        return next.handle(request).pipe(
          catchError((err:HttpErrorResponse)=>{
            if(err.status===401){
              this.router.navigate(['/']);
            }
            return throwError(err);
          })
        );

    }
}