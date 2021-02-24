import {Observable} from "rxjs";
import {Anuncio} from "../anuncio/anuncio";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {AnuncioService} from "../anuncio/service/anuncio.service";
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class AnuncioListResolver implements Resolve<Observable<Anuncio[]>>{
  constructor(private service: AnuncioService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<Anuncio[]>> | Promise<Observable<Anuncio[]>> | Observable<Anuncio[]> {
    return this.service.listar();
  }
}
