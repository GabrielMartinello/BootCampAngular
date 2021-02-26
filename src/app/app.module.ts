import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {VmessageModule} from './vmessage/vmessage.module';
import {NavbarModule} from './navbar/navbar.module';
import {HomeModule} from './home/home.module';
import {AnunciosModule} from './anuncios/anuncios.module';
import { UsuarioFormComponent } from 'src/app/usuarios/usuario/usuario-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnunciosModule,
    VmessageModule,
    NavbarModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
