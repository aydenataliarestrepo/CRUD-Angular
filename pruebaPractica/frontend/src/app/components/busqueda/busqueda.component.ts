import { Component, OnInit } from '@angular/core';
//import { resolve, resolvePtr } from 
import { RegistroService } from '../../services/registro.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})

usuarios:Usuarios = [] ; 
export class BusquedaComponent. implements OnInit {

  constructor(private registroServicio: RegistroService) { }

  ngOnInit(): void {
    this.registroServicio.getUsuarios().subscribe(
      res => console.log(res),
      err => console.error((err))
      

    )
  }

}
