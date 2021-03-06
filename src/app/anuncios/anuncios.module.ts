import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {AnuncioFormModule} from './anuncio-form/anuncio-form.module';
import {CommonModule} from '@angular/common';
import {AnuncioListModule} from 'src/app/anuncios/anuncio-list/anuncio-list.module';
import {VmessageModule} from '../vmessage/vmessage.module';
import {NavbarModule} from '../navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    AnuncioFormModule,
    AnuncioListModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    VmessageModule,
    NavbarModule
  ]
})

export class AnunciosModule {

}
