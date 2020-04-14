import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
// import { SettingsService } from 'src/app/services/settings.service';
import { SettingsService } from 'src/app/services/service.index';
// importamos el archivo /services/service.index xq alli estan exportando todos los servicios
/*     SettingsService
       SharedService
       SidebarService      */


// import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor( public _ajustes: SettingsService) { }

  /* ngOnInit(): void {
    this.colocaCheck();
  } */

  ngOnInit() {
    this.colocaCheck();
  }

  cambiarColor( tema: string, link: any ) {

    this.aplicarCheck (link);
    this._ajustes.aplicarTema( tema );

  }

  aplicarCheck( link: any ) {
      // tslint:disable-next-line: prefer-const
      let selectores: any = document.getElementsByClassName('selector');
      // tslint:disable-next-line: prefer-const
      for ( let ref of selectores) {
         ref.classList.remove('working');
      }
      link.classList.add('working');
  }

  colocaCheck() {
    // tslint:disable-next-line: prefer-const
    let selectores: any  = document.getElementsByClassName('selector');
    // tslint:disable-next-line: prefer-const
    let tema = this._ajustes.ajustes.tema;
    // tslint:disable-next-line: prefer-const
    for ( let ref of selectores ) {
      if ( ref.getAttribute('data-theme') === tema ) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
