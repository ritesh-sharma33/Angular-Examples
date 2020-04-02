import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor {

  constructor(private loginService: LoginService) {
    
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ) : Observable<HttpEvent<any>> {
    console.log("INTERCEPTOR");

    const token = this.loginService.getAuthToken();
    let newHeaders = req.headers;
    if (token) {
      newHeaders = newHeaders.append('authtoken', token);
    }

    const authReq = req.clone({headers: newHeaders});

    return next.handle(authReq).pipe(
      map(resp => {
        if (resp instanceof HttpResponse) {
          return resp.clone({ body: [{ title: 'Replaced data in interceptor' }] })
        }
      })
    );
  }
}
