import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {VmessageModule} from './vmessage/vmessage.module';
import {HomeModule} from './home/home.module';
import {AnunciosModule} from './anuncios/anuncios.module';
import {UsuariosModule} from './usuarios/usuarios.module';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnunciosModule,
    VmessageModule,
    HomeModule,
    UsuariosModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
