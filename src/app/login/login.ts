import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    // Validazione semplice: richiedi username e password
    if (!this.username || !this.username.trim() || !this.password) {
      this.errorMessage = 'Inserisci username e password.';
      return;
    }

    // reset messaggio precedente
    this.errorMessage = null;

    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        // Supponendo che 'response' contenga un token o una conferma di successo
        console.log('Login riuscito:', response);
        // Reindirizza l'utente alla pagina protetta
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Errore di login:', err);
        this.errorMessage = 'Credenziali non valide. Riprova.';
      }
    });
  }
}