import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsuarioListComponent} from './usuario-list.component';
import {UsuariosComponent} from './usuarios/usuarios.component';
import {FilterByNomePipe} from './filter-by-nome.pipe';
import {NavbarModule} from '../../navbar/navbar.module';
import {UsuarioModule} from '../model/usuario.module';

@NgModule({
  declarations: [
    UsuarioListComponent,
    UsuariosComponent,
    FilterByNomePipe
  ],
  imports: [
    CommonModule,
    NavbarModule,
    UsuarioModule
  ],
  exports: [UsuarioListComponent]
})

export class UsuarioListModule{
}
