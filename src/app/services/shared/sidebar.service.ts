import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

// /dashboard,/progress,/graficas1 sacamos de pages.routes.ts

// sub items
  menu: any = [
    {
       titulo: 'Principal',
       icono: 'mdi mdi-gauge',
       submenu: [
         {titulo: 'Dashboard', url: '/dashboard'},
         {titulo: 'Progress', url: '/progress'},
         {titulo: 'Graficas', url: '/graficas1'}
       ]
    }
  ];

  constructor() { }
}
