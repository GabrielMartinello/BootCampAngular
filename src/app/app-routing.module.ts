import {RouterModule, Routes} from '@angular/router';

import {AnuncioListResolver} from './anuncios/anuncio-list/anuncio-list.resolver';
import {NgModule} from '@angular/core';
import {AnuncioFormComponent} from './anuncios/anuncio-form/anuncio-form.componet';
import {HomeComponent} from './home/home.component';
import {UsuarioFormComponent} from 'src/app/usuarios/usuario/usuario-form.component';
import {UsuarioListComponent} from './usuarios/usuario-list/usuario-list.component';
import {NotfoundComponent} from './notfound/notfound.component';

const routes: Routes = [
  //cominucação são feitas dentro de modulos
  {path: 'a/add', component: AnuncioFormComponent},
  {path: 'nf/', component: NotfoundComponent},
  {path: 'a/add/:id', component: AnuncioFormComponent},
  {path: 'u/add', component: UsuarioFormComponent},
  {path: 'u/add/:id', component: UsuarioFormComponent},
  {path: 'u/list', component: UsuarioListComponent},
  {
    path: '**', component: HomeComponent,
    resolve: {anuncios: AnuncioListResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
