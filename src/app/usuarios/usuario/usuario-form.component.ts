import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Usuario} from 'src/app/usuarios/usuario/usuario';
import {ActivatedRoute, Router} from '@angular/router';
import {UsuarioService} from 'src/app/usuarios/usuario/service/usuario.service';

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
              private activatedRouter: ActivatedRoute,
              private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
    //só precisaremos de mais de um vetor quando tiver mais de um argumento
    //Validando a quantidade de caracteres.
    this.usuarioForm = this.formBuilder.group({
      nome: ['', [Validators.minLength(5), Validators.required]],
      email: ['', [Validators.minLength(3), Validators.maxLength(50), Validators.email]],
      senha: ['', [Validators.minLength(3), Validators.maxLength(300), Validators.required]]
    });
    const id = this.activatedRouter.snapshot.params.id;
    if (id) {
      this.usuarioService.pegaId(id).subscribe(usuario => {
        this.usuario = usuario;
        this.usuarioForm.controls['nome'].setValue(usuario.nome);
        this.usuarioForm.controls['email'].setValue(usuario.email);
        this.usuarioForm.controls['senha'].setValue(usuario.senha);
      });
    }
  }

  salvarUsuario(): void {
    this.usuario.nome = this.usuarioForm.get('nome')?.value;
    this.usuario.email = this.usuarioForm.get('email')?.value;
    this.usuario.senha = this.usuarioForm.get('senha')?.value;
    this.usuarioService.cadastrar(this.usuario).subscribe(() => {
      this.router.navigate(['u/list']);
    });
  }
  deletarUsuario(): void {
    this.usuarioService.deletar(this.usuario.id).subscribe();
  }
}


