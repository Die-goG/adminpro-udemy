import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() {


    this.contarTres().then(
       mensaje => console.log('Termino ..!', mensaje)
     )
    .catch( error => console.error('Error en la promesa', error));
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: one-line
  contarTres(): Promise<boolean>{
        // tslint:disable-next-line: prefer-const
        return new Promise((resolve, reject) => {
          let contador = 0;
          // tslint:disable-next-line: prefer-const
          let itervalo = setInterval( () => {
                contador += 1;
                console.log( contador );
                  // tslint:disable-next-line: align
                  if (contador === 3) {
                  resolve();
                  // reject('Simplemente un error ... ');
                  // clearImmediate(itervalo);
                  }
                }, 1000 );
          });

  }
}
