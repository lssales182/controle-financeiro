import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LancamentoListComponent } from "./lancamento-list/lancamento-list.component";
import { LancamentoFormComponent } from "./lancamento-form/lancamento-form.component";

const routes: Routes = [
  { path: '', component: LancamentoListComponent },
  { path: 'new', component: LancamentoFormComponent },
  { path: ':id/edit', component: LancamentoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LancamentosRoutingModule { }
