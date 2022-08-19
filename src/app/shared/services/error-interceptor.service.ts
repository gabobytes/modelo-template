import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error:HttpErrorResponse) =>{
          let errorMessage = ''
          if(error.error instanceof ErrorEvent){
            //client error
            errorMessage = `Error: ${error.error.message}`;
          }else{
            //server error
            errorMessage = `Error: ${error.status}\nMessage: ${error.message}`
          }
          console.log("App Error: "+error.status);
        return throwError(errorMessage)
      })
     )
    }
}
