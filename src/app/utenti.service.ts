import { Injectable } from '@angular/core';           // Per dichiarare il servizio come injectable
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Per fare richieste HTTP
import { Observable, of } from 'rxjs';                // Per gestire gli stream di dati
import { catchError, map } from 'rxjs/operators';    // Per trasformazioni e gestione errori opzionale




@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'https://localhost:5001/api/Utenti';

  constructor(private http: HttpClient) {}

  getCurrentUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/me`);
  }

}
