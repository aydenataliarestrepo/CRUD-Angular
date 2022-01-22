import { Component } from '@angular/core';

//Decorador de la clase AppComponent 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //Documento donde está cargado el componente 
  styleUrls: ['./app.component.css'] //Formato del componente 
}) 
export class AppComponent {
  title = 'Gestion de usuarios';
}
