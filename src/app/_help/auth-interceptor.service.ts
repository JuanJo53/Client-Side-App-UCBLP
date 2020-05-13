import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'
import { Token } from '@angular/compiler/src/ml_parser/lexer';
const TOKEN_DOCENTE="token_doc";
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private router:Router,private tokenT:TokenStorageService){}
    intercept(req:HttpRequest<any>,next:HttpHandler){
        const token: string=this.tokenT.getToken();
        let request=req;
        if(token){
          console.log("hay token");
          request=req.clone({
            setHeaders:{
              authorization:`Bearer${token}`
            }
          });
        }
        console.log(request);
        return next.handle(request).pipe(
          catchError((err:HttpErrorResponse)=>{
            if(err.status===401){
              this.router.navigateByUrl('/login');
            }
            return throwError(err);
          })
        );

    }
}