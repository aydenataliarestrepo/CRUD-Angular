import { Component, OnInit } from '@angular/core';

import { RegistroService } from '../../services/registro.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})


export class BusquedaComponent implements OnInit {
  
  usuarios:any = [] ; 

  constructor(private registroServicio: RegistroService) { }

  ngOnInit(): void {
    this.registroServicio.getUsuarios().subscribe(
      res => {
        this.usuarios = res; 
      },
      err => console.error((err))
      

    )
  }

}
