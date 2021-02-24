import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AnuncioListComponent} from './anuncio-list.component';
import {AnunciosModule} from './anuncios/anuncios.module';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [ AnuncioListComponent],
  imports: [
    CommonModule,
    AnunciosModule,
    RouterModule
  ]
})
export class AnuncioListModule{
}
