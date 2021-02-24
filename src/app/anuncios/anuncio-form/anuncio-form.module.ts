import {NgModule} from '@angular/core';
import {AnuncioFormComponent} from './anuncio-form.componet';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AnuncioFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})

export class AnuncioFormModule {
}
