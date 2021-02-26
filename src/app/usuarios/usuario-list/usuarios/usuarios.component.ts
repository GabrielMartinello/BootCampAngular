import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Usuario} from 'src/app/usuarios/usuario/usuario';

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

  ngOnChanges(changes: SimpleChanges): void {
  }

  // ngOnChanges(changes: SimpleChanges): void{
  //   if (changes.usuarios){
  //     this.rows = this.groupColumns(this.usuarios);
  //   }
  // }
}
