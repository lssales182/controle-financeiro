import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  items: MenuItem[];
  title = 'finansys';

  ngOnInit(): void {
    this.items = [
      {
        label: 'Lançamentos',
        routerLink: '/lancamentos'
      },
      {
        label: 'Categorias',
        routerLink: '/categorias'
      },
    ];
  }
}
