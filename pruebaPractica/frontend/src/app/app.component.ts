import { Component } from '@angular/core';

//Decorador de la clase AppComponent 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'] //Formato del componente 
}) 
export class AppComponent {
  title = 'Gestion de usuarios';
}
