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
    let errorMsg = 'Errore di rete';

    // se arriva un 400 con JSON: { error: "..."}
    if (err.status === 400 && err.error?.error) {
        errorMsg = err.error.error;
    }

    // se arriva un 401 senza body
    else if (err.status === 401) {
        errorMsg = 'Non autorizzato: credenziali non valide';
    }

    // altri tipi di messaggi dal server
    else if (err.error?.message) {
        errorMsg = err.error.message;
    }
        return of({ success: false, message: errorMsg });
      })
    );
  }
}
