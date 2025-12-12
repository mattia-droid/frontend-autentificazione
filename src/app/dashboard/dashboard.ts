import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../utenti.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-container">
      <div class="welcome-card">
        <h1>Benvenuto {{ username }}!</h1>
        <p class="subtitle">Sei arrivato nella nostra piattaforma.</p>
        
        <div class="cta-section">
            <button class="btn-primary">Inizia la navigazione</button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./dashboard.scss'] 
})
export class DashboardComponent implements OnInit {
  username: string | null = null;

  constructor(private userService: UserService) {}

  ngOnInit() {
    // Recupera i dati dell'utente direttamente dal server
    this.userService.getCurrentUser().subscribe(user => {
      this.username = user.username; // o user.nome secondo API
    });
  }
}
