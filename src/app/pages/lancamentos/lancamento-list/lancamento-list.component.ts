import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { Lancamento } from "../lancamento.model";
import { LancamentoService } from "../lancamento.service";

@Component({
  selector: 'app-lancamento-list',
  templateUrl: './lancamento-list.component.html',
  styleUrls: ['./lancamento-list.component.css']
})
export class LancamentoListComponent implements OnInit {

  lancamentos: Lancamento[] = [];

  items: MenuItem[];
  home: MenuItem;

  constructor(
    private lancamentoService: LancamentoService
  ) {
    this.items = [
      { label: 'Lançamentos'}
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

  ngOnInit() {
    this.lancamentoService.getAll().subscribe(
      lancamentos => this.lancamentos = lancamentos.sort((a, b) => b.id - a.id),
      error => alert('Erro ao carregar a lista')
    )
  }

  deleteLancamento(lancamento) {
    const mustDelete = confirm('Deseja realmente excluir este item?');

    if (mustDelete) {
      this.lancamentoService.delete(lancamento.id).subscribe(
        () => this.lancamentos = this.lancamentos.filter(element => element != lancamento),
        () => alert("Erro ao tentar excluir!")
      )
    }
  }

}
