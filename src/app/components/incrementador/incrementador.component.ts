import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { element } from 'protractor';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  // @Input() = es para recibir el valor de la variable desde afuera

  // con 'nombre' renombramos desde afuera los atributos personalizados

  // tslint:disable-next-line: no-input-rename
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  // tslint:disable-next-line: no-output-rename
  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();


  @ViewChild('txtProgress') txtProgress: ElementRef; // recibe como parametro una referencia a un elemento HTML


   /* IMPORTANTE:
   ('nombre') = es el nombre de la variable interna */

  constructor() {
        /* console.log('valor de leyenda >', this.leyenda);
        console.log('valor de progreso >', this.progreso); */
  }

  // Info sobre ngOnInit() = https://medium.com/zurvin/cu%C3%A1l-es-la-diferencia-entre-ngoninit-y-constructor-en-angular-2f7ce3d986b7

  ngOnInit(): void {
    /* console.log('valor de leyenda ngOnInit >', this.leyenda);
    console.log('valor de progreso ngOnInit >', this.progreso); */
  }
  onChanges( newValue: number ){

    // console.log( newValue ); // el newValue es el valor que estamos incrementando
    // tslint:disable-next-line: deprecation
    // console.log( event ); // vemos los eventos en el navegador CHROME

    // vamos a evitar que de pueda digitar numeros mayores a 100
    /* la siguiene linea regresa un arreglo con todos los elementos HTML que coincidad con el nombre progreso */
    // let elemHTML: any = document.getElementsByName('progreso')[0]; // [0] es la posicion del elemento obtenido
    // console.log ( elemHTML.value );


    if ( newValue >= 100){
      this.progreso = 100;
    } else if ( newValue <= 0){
      this.progreso = 0;
    } else {
       this.progreso  = newValue;
    }

    // elemHTML.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit(this.progreso);  // Pasamos el para que la barra se actualize
  }

  // tslint:disable-next-line: one-line
  cambiarValor( valor: number ) {

    if (this.progreso >= 100 && valor > 0 ) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso); // pasando el valor al padre al enunciado "Progreso Azul - ....."
    this.txtProgress.nativeElement.focus();

  }
}
