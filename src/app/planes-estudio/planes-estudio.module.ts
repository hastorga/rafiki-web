import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaDetalleComponent } from './vista-detalle/vista-detalle.component';
import { AñadirOaComponent } from './añadir-oa/añadir-oa.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VistaDetalleComponent, AñadirOaComponent]
})
export class PlanesEstudioModule { }
