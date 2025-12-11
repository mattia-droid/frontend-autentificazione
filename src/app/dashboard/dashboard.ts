import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-container">
      <div class="welcome-card">
        <h1>Benvenuto!</h1>
        <p class="subtitle">Sei arrivato nella nostra piattaforma.</p>
        
        <div class="cta-section">
            <button class="btn-primary">Inizia la navigazione</button>
            
        </div>
      </div>
    </div>
  `,
  
  styleUrls: ['./dashboard.scss'] 
})
export class DashboardComponent {}