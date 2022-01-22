//Importo Http para utilizar los servicios 
import { HttpClient } from '@angular/common/http';

//Importación por defecto para funcionamiento del servicio
import { Injectable } from '@angular/core';

//Importamos el modelo 
import { Registro } from '../models/resgristro';


@Injectable({
  providedIn: 'root'
})
export class RegistroCrudService {
  
  //Variable privada para reutilizar
  private url = "http://localhost:4200/registro"

  //Creamos un HTTP privado
  constructor(private http: HttpClient) {   }

  //Creamos un método 
}
