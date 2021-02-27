import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {CommonModule} from '@angular/common';
import {AnuncioListModule} from '../anuncios/anuncio-list/anuncio-list.module';
import {NavbarModule} from '../navbar/navbar.module';
//imports e declarations são só para modules
@NgModule({
  declarations: [ HomeComponent ],
  imports: [CommonModule, AnuncioListModule, NavbarModule]
})
export class HomeModule {

}
