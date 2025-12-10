import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'any',
})
export class AuthService {
  // SOSTITUISCI QUESTO URL CON L'ENDPOINT DEL TUO COLLEGA
  private apiUrl = 'https://localhost:5001/api/auth/login'; 
  private _isLogged = false;
  get isLogged() { return this._isLogged; }
  setLogged(value: boolean) { this._isLogged = value; }

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<{ success: boolean; message?: string }> {
    return this.http.post<any>(this.apiUrl, { username, password }).pipe(
      map(body => {
        // Il backend ritorna { success: true } o { authenticated: true } o simile
        const success = !!(body && (body.success || body.authenticated || body.ok || body.auth));
        const message = body?.message || body?.error || undefined;
        return { success, message };
      }),
      catchError(err => {
        const errorMsg = err?.error?.message || err?.error?.error || 'Errore di rete';
        return of({ success: false, message: errorMsg });
      })
    );
  }
}
