import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearOrientacionComponent } from './crear-orientacion/crear-orientacion.component';
import { ListaOrientacionesComponent } from './lista-orientaciones/lista-orientaciones.component';
import { DetalleOrientacionComponent } from './detalle-orientacion/detalle-orientacion.component';
import { ModificarOrientacionComponent } from './modificar-orientacion/modificar-orientacion.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CrearOrientacionComponent, ListaOrientacionesComponent, DetalleOrientacionComponent, ModificarOrientacionComponent]
})
export class OrientacionesModule { }
