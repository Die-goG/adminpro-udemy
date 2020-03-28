import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { RegisterComponent } from './login/register.component';


// Aqui definimos las rutas en la variable constante appRoutes

const appRoutes: Routes = [
    {path: '', component: PagesComponent,
        children: [
            {path: 'dashboard', component: DashboardComponent },
            {path: 'progress', component: ProgressComponent },
            {path: 'graficas1', component: Graficas1Component },
            {path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },
    {path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent },
    {path: '**', component: NopagefoundComponent }
];

// const appRoutes: Routes = [
//     {path: '', component: PagesComponent }, /* path: '' significa sin ruta*/
//     {path: 'dashboard', component: DashboardComponent },
//     {path: 'login', component: LoginComponent },
//     {path: 'register', component: LoginComponent },
//     {path: 'progress', component: ProgressComponent },
//     {path: 'graficas1', component: Graficas1Component },
//     // {path: '', redirectTo: '/dashboard', pathMatch: 'full' }, /* ruta para cuando no exista ninguna ruta */
//     {path: '**', component: NopagefoundComponent } /* cualquier ruta que no este definida aqui, nos muestra nopagefound */
// ];

/* vamos a exportar el arreglo Routes que contiene las rutas definidas
La variable Routes debe estar referenciada en app.Modules.ts*/
export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash : true});

