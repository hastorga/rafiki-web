import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaOaComponent } from './lista-oa/lista-oa.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ListaOaComponent]
})
export class ObjetivosAprendizajeModule { }
