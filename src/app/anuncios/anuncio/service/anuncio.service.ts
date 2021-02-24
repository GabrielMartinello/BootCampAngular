import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Anuncio} from '../anuncio';
import {environment} from '../../../../environments/environment';
import {AnuncioFormModule} from "../../anuncio-form/anuncio-form.module";

//prove para todo o sistema.
@Injectable({providedIn: 'root'})
export class AnuncioService {
  constructor(private http: HttpClient) {
  }

  listar(): Observable<Anuncio[]> {
    return this.http.get<Anuncio[]>(environment.api + '/anuncios');
  }
  cadastrar(anuncio: Anuncio): Observable<void> {
    return this.http.post<void>(environment.api + '/anuncios', anuncio);
  }
}
