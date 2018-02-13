import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearOrientacionComponent } from './crear-orientacion/crear-orientacion.component';
import { ListaOrientacionesComponent } from './lista-orientaciones/lista-orientaciones.component';
import { DetalleOrientacionComponent } from './detalle-orientacion/detalle-orientacion.component';
import { ModificarOrientacionComponent } from './modificar-orientacion/modificar-orientacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [CrearOrientacionComponent, ListaOrientacionesComponent, DetalleOrientacionComponent, ModificarOrientacionComponent],
  exports:[
    ListaOrientacionesComponent,
    CrearOrientacionComponent,
    DetalleOrientacionComponent,
    ModificarOrientacionComponent
  ]

})
export class OrientacionesModule { }
