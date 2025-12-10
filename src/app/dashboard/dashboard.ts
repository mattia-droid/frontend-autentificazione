import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-container">
      <h1>Benvenuto</h1>
      <p>Sei arrivato nella nostra piattaforma</p>
    </div>
  `,

})
export class DashboardComponent {}
