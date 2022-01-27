import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';

import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

const routes:Routes=[
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
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
