import { Component, OnInit } from '@angular/core';
import {Anuncio} from '../anuncio/anuncio';

@Component({
  selector: 'app-anuncio-list',
  templateUrl: './anuncio-list.component.html',
  styleUrls: ['./anuncio-list.component.scss']
})
export class AnuncioListComponent implements OnInit {
  anuncios: Anuncio[];
  constructor() { }

  ngOnInit(): void {

  }

}
