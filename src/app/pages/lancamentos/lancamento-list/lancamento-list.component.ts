import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { Lancamento } from "../lancamento.model";
import { LancamentoService } from "../lancamento.service";

import currencyFormatter from "currency-formatter";
import { CategoriaService } from '../../categorias/categoria.service';
import { Categoria } from '../../categorias/categoria.model';

@Component({
  selector: 'app-lancamento-list',
  templateUrl: './lancamento-list.component.html',
  styleUrls: ['./lancamento-list.component.css']
})
export class LancamentoListComponent implements OnInit {

  lancamentos: Lancamento[] = [];
  categorias: Categoria[] = [];

  expenseTotal: any = 0;
  revenueTotal: any = 0;
  balance: any = 0;

  items: MenuItem[];
  home: MenuItem;

  constructor(
    private lancamentoService: LancamentoService,
    private categoriaService: CategoriaService
  ) {
    this.items = [
      { label: 'Lançamentos'}
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

  ngOnInit() {
    this.lancamentoService.getAll()
    .subscribe(
      lancamentos => this.lancamentos = lancamentos.sort((a, b) => b.id - a.id),
      error => alert('Erro ao carregar a lista'),
      () => {
        this.calculateBalance();
        this.getCategorias()
      }
    )
  }

  getCategorias() {
    this.categoriaService.getAll()
    .subscribe(
      categorias => this.categorias = categorias,
      error => alert('Erro ao carregar a lista'),
      () => {
        this.lancamentos.forEach(l => {
          this.categorias.forEach(c => {
            if (l.categoryId === c.id) {
              l.categoryName = c.name;
            }
          })
        })
      }
    );
  }

  deleteLancamento(lancamento) {
    const mustDelete = confirm('Deseja realmente excluir este item?');

    if (mustDelete) {
      this.lancamentoService.delete(lancamento.id).subscribe(
        () => {this.lancamentos = this.lancamentos.filter(element => element != lancamento)},
        error => alert("Erro ao tentar excluir!"),
        () => this.calculateBalance()
      )
    }
  }

  // PRIVATE METHODS

  private calculateBalance(){
    let expenseTotal = 0;
    let revenueTotal = 0;

    this.lancamentos.forEach(l => {
      if(l.type == 'revenue')
        revenueTotal += currencyFormatter.unformat(l.amount, { code: 'BRL' })
      else
        expenseTotal += currencyFormatter.unformat(l.amount, { code: 'BRL' })
    });

    this.expenseTotal = currencyFormatter.format(expenseTotal, { code: 'BRL'});
    this.revenueTotal = currencyFormatter.format(revenueTotal, { code: 'BRL'});
    this.balance = currencyFormatter.format(revenueTotal - expenseTotal, { code: 'BRL'});
  }

}
