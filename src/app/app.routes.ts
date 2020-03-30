import { RouterModule, Routes } from '@angular/router';

import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


// Aqui definimos las rutas en la variable constante appRoutes

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent },
    {path: '**', component: NopagefoundComponent }
];

/* vamos a exportar el arreglo Routes que contiene las rutas definidas
La variable Routes debe estar referenciada en app.Modules.ts*/
export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash : true});

