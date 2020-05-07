import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber} from 'rxjs';
import { retry, map , filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() {

    this.regresaObservable()

    .subscribe(
      numero => console.log( 'Subs', numero),
       error => console.error( 'Error del obs', error),
          () => console.log( 'El observable termino ..')
       );

  }

  ngOnInit(): void {
  }

  regresaObservable(): Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {

      let contador = 0;

      const intervalo = setInterval( () => {

        contador ++;
        observer.next( contador );

        if ( contador === 3 ){
            clearInterval ( intervalo );
            observer.complete();
          }

        // if ( contador === 2) {
            // clearInterval ( intervalo );
            // observer.error('Auxilio .... ');
        // }

      }, 1000 );
    }).pipe(
       map( resp => resp.valor),
       filter( (valor, index) => {
          if ( (valor % 2) === 1 ){
              // impar
              return true;
          } else {
              // par
              return false;
          }

        // console.log('Filter', valor, index);
             // return true;
       })

    );
  }

}
