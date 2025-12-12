// src/app/auth.interceptor.ts
import { Observable } from 'rxjs';
import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
  HttpEvent
} from '@angular/common/http';

export const authInterceptorFn: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const token = localStorage.getItem('jwt');

  // Se non c'è token, continua normalmente
  if (!token) {
    return next(req);
  }

  // Clona la richiesta aggiungendo l'header Authorization
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  // N.B. qui si chiama next(authReq) (non next.handle)
  return next(authReq);
};
