import { Routes } from '@angular/router';

export const routes: Routes = [
	// Route di default che carica il componente di login (standalone)
	{ path: '', loadComponent: () => import('./login/login').then(m => m.LoginComponent) },
	{ path: 'dashboard', loadComponent: () => import('./dashboard/dashboard').then(m => m.DashboardComponent) },
 	// Puoi aggiungere altre rotte qui
];
