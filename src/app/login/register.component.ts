import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import swal from 'sweetalert';

// import swal, { SweetAlert } from './core';

declare function init_plugins();
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls : ['./login.component.css']

})
export class RegisterComponent implements OnInit {
   // declarams el formulario2
  forma: FormGroup;

  constructor() { }

  // funcion para ver si las 2 contrasenas son iguales
  sonIguales(campo1: string, campo2: string) {

  return (group: FormGroup) => {
    const pass1 = group.controls[campo1].value;
    const pass2 = group.controls[campo2].value;

    if ( pass1 === pass2 ) {
      return null;
    }
    return{
      sonIguales: true
    };
  };
  }

  ngOnInit(): void {

      init_plugins();

      this.forma = new FormGroup({
        // se declara formulario, son los campo que tenemos en el HTML y quiero controlar por esta forma
        //                     (valor por defecto,validaciones)
        nombre: new FormControl(null, Validators.required),
        correo: new FormControl(null, [Validators.required, Validators.email]), // si requeriere mas validaciones los ponemos en un array
        password: new FormControl(null, Validators.required),
        password2: new FormControl(null, Validators.required),
        condiciones: new FormControl(false)
      }, { validators: this.sonIguales( 'password', 'password2')});

      this.forma.setValue({
        nombre: 'Test',
        correo: 'test@gmail.com',
        password: '123456',
        password2: '123456',
        condiciones: true
      });
  }

  registrarUsuario() {

    if (this.forma.invalid) {
      return;
    }

    if ( !this.forma.value.condiciones) {
        // swal('Importante !', 'Debe aceptar las condiciones!', 'warning');
        swal('Hola Mundo');
        return;
    }
    console.log(this.forma.value);
  }
}
