import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AnuncioModule} from './anuncios/anuncio/anuncio.module';
import {AnunciosModule} from './anuncios/anuncio-list/anuncios/anuncios.module';
import {AnuncioListModule} from './anuncios/anuncio-list/anuncio-list.module';
import {AnuncioFormModule} from './anuncios/anuncio-form/anuncio-form.module';
import {VmessageModule} from './vmessage/vmessage.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnuncioModule,
    AnunciosModule,
    AnuncioListModule,
    AnuncioFormModule,
    VmessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
