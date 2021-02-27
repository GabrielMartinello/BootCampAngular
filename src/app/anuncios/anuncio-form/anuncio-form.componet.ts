import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AnuncioService} from '../anuncio/service/anuncio.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Anuncio} from '../anuncio/anuncio';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio-form.component.html',
  styleUrls: ['./anuncio-form.component.scss']
})

export class AnuncioFormComponent implements OnInit {
  anuncioForm: FormGroup;
  anuncio: Anuncio = new Anuncio();
  url: string;

  constructor(private formBuilder: FormBuilder,
              private anuncioService: AnuncioService,
              private router: Router,
              private activedRouter: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.anuncioForm = this.formBuilder.group({
      url: ['', [Validators.minLength(10), Validators.required]],
      titulo: ['', [Validators.minLength(3), Validators.maxLength(50), Validators.required]],
      mensagem: ['', [Validators.minLength(3), Validators.maxLength(300), Validators.required]]
    });
    const id = this.activedRouter.snapshot.params.id;
    if (id) {
      this.anuncioService.pegaId(id).subscribe(anuncio => {
        this.anuncio = anuncio;
        this.anuncioForm.controls['url'].setValue(anuncio.urlImagem);
        this.anuncioForm.controls['titulo'].setValue(anuncio.titulo);
        this.anuncioForm.controls['mensagem'].setValue(anuncio.mensagem);
        this.url = this.anuncio.urlImagem;
      });
    }
  }

  salvarAnuncio(): void {
    this.anuncio.titulo = this.anuncioForm.get('titulo')?.value;
    this.anuncio.mensagem = this.anuncioForm.get('mensagem')?.value;
    this.anuncio.urlImagem = this.anuncioForm.get('url')?.value;
    this.anuncioService.cadastrar(this.anuncio).subscribe(() => {
      this.router.navigate(['list/a']);
    });
  }

  deletarAnuncio(): void {
    this.anuncioService.excluir(this.anuncio.id).subscribe();
  }
}
