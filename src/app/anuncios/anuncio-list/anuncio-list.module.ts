import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AnuncioListComponent} from './anuncio-list.component';
import {FilterByTitlePipe} from './filter-by-title.pipe';
import {AnunciosComponent} from './anuncios/anuncios.component';
import {AnuncioModule} from '../anuncio/anuncio.module';
import {NavbarModule} from '../../navbar/navbar.module';

@NgModule({
    declarations: [
      AnuncioListComponent,
      AnunciosComponent,
      FilterByTitlePipe
    ],
  imports: [
    CommonModule,
    AnuncioModule
  ],
  exports: [AnuncioListComponent]
})

  export class AnuncioListModule{
  }
