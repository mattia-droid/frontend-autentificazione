import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
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
    // Validazione dettagliata: controlla username e password singolarmente
    const usernameEmpty = !this.username || !this.username.trim();
    const passwordEmpty = !this.password;

    if (usernameEmpty && passwordEmpty) {
      this.errorMessage = 'Inserisci username e password.';
      return;
    }

    if (usernameEmpty) {
      this.errorMessage = 'Inserisci l\'username.';
      return;
    }

    if (passwordEmpty) {
      this.errorMessage = 'Inserisci la password.';
      return;
    }

    // reset messaggio precedente
    this.errorMessage = null;

     this.authService.login(this.username, this.password).subscribe(result => {
      if (result.success) {
        this.authService.setLogged(true);
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = result.message || 'Credenziali non valide. Riprova.';
      }
    });
  }
}