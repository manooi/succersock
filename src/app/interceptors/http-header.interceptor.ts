import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = req.headers
      .set('x-api-key', 'pHX9SEM9IqwgC9Aplzz21JqAAPuubtlaQ5Rfu6xa');

    const modifiedReq = req.clone({ headers });
    return next.handle(modifiedReq);
  }
}