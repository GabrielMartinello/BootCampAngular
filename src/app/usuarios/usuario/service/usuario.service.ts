//para iniciar um service é necessário utilizar um @Injectable
//use o provideIn, não se esqueã das chaves {}
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Usuario} from 'src/app/usuarios/usuario/usuario';
import {environment} from 'src/environments/environment';
//exporte a classe e crie um construtor, com o http: HttpClient
//o HttpCliente ira se comunicar com a API.
@Injectable({providedIn: 'root'})
export class UsuarioService {
  constructor(private http: HttpClient) {
  }

  //Observando um usuario.
  listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(environment.api + '/usuario');
  }

  //cadastrando um usuario
  cadastrar(usuario: Usuario): Observable<void> {
    //verifica se o usuario tem id, se tem ele vai pegar o id do usuario
    if (usuario.id) {
      return this.http.put<void>(`${environment.api}/usuario/${usuario.id}`, usuario);
    }
    //se nao ele vai criar um novo usuario
    return this.http.post<void>(environment.api + '/usuario', usuario);
  }

  //pega o id do usuario
  pegaId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${environment.api}/usuario/${id}`);
  }

  //deleta pelo id do usuario
  deletar(id: number): Observable<void> {
    return this.http.delete<void>(environment.api + '/usuario/' + id);
  }

}
