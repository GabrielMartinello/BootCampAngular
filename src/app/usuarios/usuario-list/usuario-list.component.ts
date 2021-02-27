import {Component, Input, OnInit} from '@angular/core';
import {Usuario} from '../usuario/usuario';
import {UsuarioService} from '../usuario/service/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {
  usuarios: Usuario[];
  @Input() filter: string;
  constructor( private service: UsuarioService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }

}
