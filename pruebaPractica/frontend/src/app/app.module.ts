import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ActualizacionComponent } from './components/actualizacion/actualizacion.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { RegistroComponent } from './components/registro/registro.component';
import { BorrarComponent } from './components/borrar/borrar.component';
import { RouterModule } from '@angular/router';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { FormularioUsuariosComponent } from './components/formulario-usuarios/formulario-usuarios.component';

//Para conectar servicio con la rest api 
import {RegistroService} from './services/registro.service';



@NgModule({
  declarations: [   
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ActualizacionComponent,
  
    RegistroComponent,
    BorrarComponent,
    NavegacionComponent,
    FormularioUsuariosComponent,
    
  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    BusquedaComponent
    
  ],
  providers: [
    RegistroComponent //Almacena los métodos para pedir datos 
  ],
  bootstrap: [AppComponent] //Componente principal 
})
export class AppModule { }
