import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {VmessageModule} from '../vmessage/vmessage.module';
import {UsuarioModule} from './model/usuario.module';
import {NavbarModule} from '../navbar/navbar.module';
import {UsuarioListModule} from './usuario-list/usuario-list.module';
import {UsuarioFormModule} from './usuario/usuario-form.module';

@NgModule({
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    VmessageModule,
    UsuarioListModule,
    UsuarioFormModule,
    NavbarModule
  ]
})
export class UsuariosModule {}
