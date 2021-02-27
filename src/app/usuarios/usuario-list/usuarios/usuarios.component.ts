import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Usuario} from 'src/app/usuarios/usuario/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit, OnChanges {

  @Input() usuarios: Usuario[];
  rows: any[];

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void{
    if (changes.usuarios && this.usuarios?.length){
      this.rows = this.groupColumns(this.usuarios);
    }
  }

  //tentei pegar do anuncio, pq nao tinha conseguido mostrar
  groupColumns(usuarios: Usuario[]): any[]{
    const newRows = [];
    for (let i = 0; i < usuarios.length; i += 4){
      newRows.push(usuarios.slice(i, i + 4));
    }
    console.log(usuarios);
    return newRows;
  }
}
