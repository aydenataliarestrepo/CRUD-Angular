import { Component, HostBinding, OnInit } from '@angular/core';
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

  //propiedad
  crear: Registro = {
    
    idusuario:1 ,
    nombre: '',
    activo: '', 
    rol:1
  };

  constructor(private registroService: RegistroService) { }

  ngOnInit(): void {
  }

  GuardarNuevoU() {
    console.log(this.crear)
  }

}
