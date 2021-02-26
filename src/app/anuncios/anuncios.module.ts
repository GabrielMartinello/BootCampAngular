import {NgModule} from "@angular/core";
import {AnuncioModule} from "./anuncio/anuncio.module";
import {AnuncioFormModule} from "./anuncio-form/anuncio-form.module";
import {CommonModule} from "@angular/common";
import {AnuncioListModule} from "./anuncio-list/anuncio-list.module";

@NgModule({
  imports: [
    CommonModule,
    AnuncioModule,
    AnuncioFormModule,
    AnuncioListModule,
  ]
})


export class AnunciosModule {

}
