import {NgModule} from '@angular/core';
import {AnuncioFormComponent} from './anuncio-form.componet';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {VmessageModule} from "../../vmessage/vmessage.module";

@NgModule({
  declarations: [AnuncioFormComponent],
  imports: [CommonModule,
    // tambem nao entendi
    ReactiveFormsModule,
    VmessageModule],
})
export class AnuncioFormModule{

}
