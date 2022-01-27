//import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, HostBinding, OnInit } from '@angular/core';
//import { text } from 'stream/consumers';
import { Registro } from '../../models/Registro';

//crear servicio
import {RegistroService} from '../../services/registro.service'


@Component({
  selector: 'app-actualizacion',
  templateUrl: './actualizacion.component.html',
  styleUrls: ['./actualizacion.component.css']
})




export class ActualizacionComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  
  crear: Registro = {
    
    idusuario: '',
    nombre: '',
    activo: '', 
    rol: ''
  };

  constructor(private registroService: RegistroService) { }

  ngOnInit(): void {
  }

  GuardarNuevoU() {
    //Mostrar servicio
    console.log(this.crear);

    //Llamar desde el servicio 
    this.registroService.saveUsuario(this.crear) .subscribe(
      res =>{
        console.log(res);
      },
      err => console.error(err)
      
    )
    
  }

}
