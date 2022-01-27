import { Injectable } from '@angular/core';

//Importamos modulo para hacer la peticione http.Este pertenece a angular 
import{HttpClient} from '@angular/common/http';

//Importamos la interfaz registro 
import {Registro} from '../models/Registro';


@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  //Creo propiedad a utilizar para las solicitudes 
  API_URI = 'http:localhost:3000/api';

constructor(private http: HttpClient) { }

//Listar  usuarios
getUsuarios(){
  return this.http.get('${this.API_URI}/usuarios')
}

//Buscar usuario especifico 
getUsuario(){
  return this.http.get('${this.API_URI}/usuarios/${id}');
}

//Eliminar usuario 
deleteUsuario(id: string){
  return this.http.delete('${this.API_URY}/usuarios${id}');

}
//Guardar usuario 
saveUsuario(registro : Registro){
  return this.http.post('${this.API_URI}/usuarios',registro);
}

//actualizar 
updateUsuario(id: string ,updateUsuario:Registro){
  return this.http.put('${this.API_URY}/usuarios${id}', updateUsuario);
}
}
