import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { Routes,RouterModule } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

import { BusquedaComponent } from './components/busqueda/busqueda.component';

import { RegistroComponent } from './components/registro/registro.component';

import { ActualizacionComponent } from './components/actualizacion/actualizacion.component';

import { NavegacionComponent } from './components/navegacion/navegacion.component';

const routes:Routes=[
  /*
  {
    path:'',  redirectTo:'/inicio', pathMatch : 'full',
    


  },

  {
    path:'inicio',  component:NavegacionComponent

  },
  {
    path:'/inicio', redirectTo:'/busqueda',pathMatch:'ful'
  },
  {
    path:'busqueda',  component:BusquedaComponent
  }*/

  {path: 'busqueda', component: BusquedaComponent},
  {path:'creacion-usuario', component: RegistroComponent},
  {path:'informacion-usuario', component: ActualizacionComponent},
  {path: '', redirectTo:'/NavegacionComponent', pathMatch: 'full'},
  //{path: 'header', component: HeaderComponent},
  //para cuaquier ruta que no existe
  {path: 'NavegacionComponent', component: NavegacionComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
