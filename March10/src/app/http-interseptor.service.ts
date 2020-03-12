import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterseptorService implements HttpInterceptor{


  constructor(public auth:AuthService) { }

  //REQUEST GENERATED WILL BE AUTO INTERCEPTED AND INFO ABOUT REQUEST IS AVAILABLE IN REQ OBJECT

  intercept(request:HttpRequest<any>,next :HttpHandler) {

    console.log("Inside interseptor");
    if(this.auth.getAuthenticationToken()) {
      //request object cannot be directly manipulated
//it has to be cloned




    }

  }
}
