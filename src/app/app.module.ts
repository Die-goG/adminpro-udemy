import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*Importamos el archivo app.Routes.ts de en donde estan definidas las Rutas*/
import { APP_ROUTES } from './app.routes';

/* Modulos*/
import { PagesModule } from './pages/pages.module';


/* Componentes*/
import { AppComponent } from './app.component';


/* Temporal*/
import { FormsModule } from '@angular/forms';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { GraficoDonaComponent } from './components/grafico-dona/grafico-dona.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,    /*Importamos la variable que contiene las rutas, esta variable esta definida en app.routes.ts*/
    PagesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } /*declaramos el nombre que tendra este modulo*/
