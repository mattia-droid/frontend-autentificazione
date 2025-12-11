import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // 1. RIMUOVI `<app-login></app-login>`
  // 2. SOSTITUISCI con `<router-outlet></router-outlet>`
  template: `<router-outlet></router-outlet>`, 
  styleUrls: ['./app.scss'],
  // 3. Rimuovi LoginComponent dall'array imports, lascia solo RouterOutlet
  imports: [RouterOutlet] 
})
export class App {
  protected readonly title = signal('login');
}