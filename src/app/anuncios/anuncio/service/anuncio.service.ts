import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Anuncio} from '../anuncio';
import {environment} from '../../../../environments/environment';

@Injectable({providedIn: 'root'})
export class AnuncioService {
  constructor(private http: HttpClient) {
  }

  listar(): Observable<Anuncio[]> {
    return this.http.get<Anuncio[]>(environment.api + '/anuncios');
  }
}
