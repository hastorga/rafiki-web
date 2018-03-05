import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaDetalleComponent } from './vista-detalle/vista-detalle.component';
import { AñadirOaComponent } from './añadir-oa/añadir-oa.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [VistaDetalleComponent, AñadirOaComponent],
  exports:[
    VistaDetalleComponent,
    AñadirOaComponent
  ]
})
export class PlanesEstudioModule { }
