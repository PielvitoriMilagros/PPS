import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private authService: AutenticacionService) { }

  ngOnInit() {}

  mostrar=false;
  validado="";
  mensaje="";

  validarUsuario(usuario,clave){
    this.mostrar=true;

    this.authService.iniciarSesion(usuario.value,clave.value).then(resp =>{

      console.log(resp);
      this.mensaje="Usuario existente, validado con éxito";

    }).catch(error =>{
      console.log(error);
      this.mensaje=error.message;
    });

    // if(usuario.value=="admin" && clave.value=="admin")
    // {
    //   this.validado=" correcto!";
    // } else{
    //   this.validado=" incorrecto!"
    // }


    // this.mostrar=true;

  }

}
