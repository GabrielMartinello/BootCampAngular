import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Usuario} from 'src/app/usuarios/usuario/usuario';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit {
  usuarioForm: FormGroup;
  usuario: Usuario = new Usuario();

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({

    });
  }

}
