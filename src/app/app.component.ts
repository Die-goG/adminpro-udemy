import { Component } from '@angular/core';
// import { SettingsService } from './services/settings.service';
import { SettingsService} from './services/service.index';
// importamos el archivo /services/service.index xq alli estan exportando todos los servicios
/*     SettingsService
       SharedService
       SidebarService      */


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
              // tslint:disable-next-line: variable-name
              constructor( public _ajustes: SettingsService ) {
              }
}

