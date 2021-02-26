import {Component, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsuarioFormComponent} from 'src/app/usuarios/usuario/usuario-form.component';
import {VmessageModule} from 'src/app/vmessage/vmessage.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ UsuarioFormComponent ],
  imports: [CommonModule, VmessageModule, ReactiveFormsModule]

})
export class UsuarioFormModule {}
