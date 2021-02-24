import {AnuncioComponent} from "./anuncios/anuncio/anuncio.component";
import {RouterModule, Routes} from "@angular/router";
import {AnuncioListComponent} from "./anuncios/anuncio-list/anuncio-list.component";
import {AnuncioListResolver} from "./anuncios/anuncio-list/anuncio-list.resolver";
import {NgModule} from "@angular/core";
const routes: Routes = [
  {path: 'a/add', component: AnuncioComponent},
  {path: 'a/add/:id', component: AnuncioComponent},
  {path: 'u/add', component: AnuncioComponent},
  {path: 'u/add/:id', component: AnuncioComponent},
  {path: 'u/list', component: AnuncioComponent},
  {path: '**', component: AnuncioListComponent, resolve: {anuncios: AnuncioListResolver}}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
