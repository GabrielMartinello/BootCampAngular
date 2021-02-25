import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AnuncioListComponent} from './anuncio-list.component';
import {AnunciosModule} from './anuncios/anuncios.module';
import {VmessageModule} from "../../vmessage/vmessage.module";

@NgModule({
    declarations: [AnuncioListComponent],
    imports: [CommonModule, AnunciosModule],
    exports: [VmessageModule]
  })

  export class AnuncioListModule{
  }
