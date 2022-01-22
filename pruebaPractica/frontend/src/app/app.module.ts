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


@NgModule({
  declarations: [   
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ActualizacionComponent,
    BusquedaComponent,
    RegistroComponent,
    BorrarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent] //Componente principal 
})
export class AppModule { }
