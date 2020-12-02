import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { Categoria } from "../categoria.model";
import { CategoriaService } from "../categoria.service";

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  categorias: Categoria[] = [];

  items: MenuItem[];
  home: MenuItem;

  constructor(private categoriaService: CategoriaService) {
    this.items = [
      { label: 'Categorias'}
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

  ngOnInit() {
    this.categoriaService.getAll()
      .subscribe(
        categorias => this.categorias = categorias,
        error => alert('Erro ao carregar a lista')
      )
  }

  deleteCategoria(categoria: Categoria) {
    const mustDelete = confirm('Deseja realmente excluir este item?');

    if (mustDelete) {
      this.categoriaService.delete(categoria.id)
        .subscribe(
          () => this.categorias = this.categorias.filter(element => element != categoria),
          () => alert("Erro ao tentar excluir!")
        )
    }
  }

}
