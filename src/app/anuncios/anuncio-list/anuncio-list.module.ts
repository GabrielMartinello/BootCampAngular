import {EventEmitter, Input, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AnuncioListComponent} from './anuncio-list.component';
import {AnunciosModule} from './anuncios/anuncios.module';
import {VmessageModule} from '../../vmessage/vmessage.module';
import {filter} from "rxjs/operators";
import {FilterByTitlePipe} from "./filter-by-title.pipe";

@NgModule({
    declarations: [AnuncioListComponent, FilterByTitlePipe],
    imports: [CommonModule, AnunciosModule],
  exports: [VmessageModule, AnuncioListComponent]
})

  export class AnuncioListModule{
  }
