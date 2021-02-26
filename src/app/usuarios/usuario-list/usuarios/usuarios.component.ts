import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Usuario} from 'src/app/usuarios/usuario/usuario';
import {Anuncio} from 'src/app/anuncios/anuncio/anuncio';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit, OnChanges {
  @Input() usuarios: Usuario[];
  rows: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void{
    if (changes.usuarios){
      this.rows = this.groupColumns(this.usuarios);
    }
  }

  groupColumns(usuarios: Usuario[]): any[]{
    const newRows = [];
    for (let i = 0; i < usuarios.length; i += 4){
      newRows.push(usuarios.slice(i, i + 4));
    }
    return newRows;
  }
}
