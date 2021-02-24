import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AnuncioListComponent} from './anuncio-list.component';
import {AnunciosModule} from './anuncios/anuncios.module';

@NgModule({
  declarations: [ AnuncioListComponent],
  imports: [
    CommonModule,
    AnunciosModule
  ]
})
export class AnuncioListModule{
}
