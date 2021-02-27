import {Pipe, PipeTransform} from '@angular/core';
import {Usuario} from '../usuario/usuario';

@Pipe({name: 'filterByNome'})
export class FilterByNomePipe implements PipeTransform {
  transform(usuarios: Usuario[], nome: string): Usuario[] {
    if (nome) {
      nome = nome.trim().toLowerCase();
      return usuarios.filter((usuario) =>
        usuario.nome.toLowerCase().includes(nome));
    }
    return usuarios;
  }
}
