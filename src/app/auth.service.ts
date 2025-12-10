import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Metodo fittizio di login che simula una chiamata HTTP
  login(username: string, password: string): Observable<any> {
    if (username === 'admin' && password === 'admin') {
      return of({ success: true, token: 'fake-jwt-token' }).pipe(delay(300));
    }
    return of({ success: false }).pipe(delay(300));
  }
}
