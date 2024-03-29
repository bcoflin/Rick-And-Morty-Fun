import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable <HttpEvent<any>> {
        const authHeader = req.clone({ headers: req.headers.set('Authorization', `${sessionStorage.getItem('token')}`)});
        console.log(authHeader);
        return next.handle(authHeader);
    }
}
