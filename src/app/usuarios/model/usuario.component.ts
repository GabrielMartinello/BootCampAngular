import {Component, Input, OnInit} from '@angular/core';
import {Usuario} from '../usuario/usuario';
import {UsuarioService} from '../usuario/service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  @Input() usuario: Usuario;
  constructor( private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

}
