import {NgModule} from '@angular/core';
import {AnuncioFormComponent} from './anuncio-form.componet';
import {CommonModule} from '@angular/common';
import {VmessageModule} from '../../vmessage/vmessage.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AnuncioFormComponent],
  imports: [CommonModule, VmessageModule, ReactiveFormsModule]
})
export class AnuncioFormModule {

}
