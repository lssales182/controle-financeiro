import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { LancamentosRoutingModule } from './lancamentos-routing.module';

import { LancamentoListComponent } from "./lancamento-list/lancamento-list.component";
import { LancamentoFormComponent } from "./lancamento-form/lancamento-form.component";

import { TableModule } from 'primeng/table';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CalendarModule } from "primeng/calendar";
import { IMaskModule } from "angular-imask";

@NgModule({
  imports: [
    CommonModule,
    LancamentosRoutingModule,
    ReactiveFormsModule,

    BreadcrumbModule,
    CalendarModule,
    IMaskModule,
    TableModule
  ],
  declarations: [LancamentoListComponent, LancamentoFormComponent]
})
export class LancamentosModule { }
