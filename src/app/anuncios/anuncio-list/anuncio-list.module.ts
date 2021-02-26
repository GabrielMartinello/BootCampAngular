import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AnuncioListComponent} from './anuncio-list.component';
import {FilterByTitlePipe} from './filter-by-title.pipe';
import {RouterModule} from '@angular/router';
import {AnuncioModule} from '../anuncio/anuncio.module';
import {AnunciosComponent} from './anuncios/anuncios.component';

@NgModule({
    declarations: [
      AnuncioListComponent,
      AnunciosComponent,
      FilterByTitlePipe
    ],
    imports: [
      CommonModule,
      RouterModule,
      AnuncioModule
    ],
  exports: [AnuncioListComponent]
})

  export class AnuncioListModule{
  }
