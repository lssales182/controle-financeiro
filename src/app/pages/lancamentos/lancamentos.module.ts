import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { LancamentosRoutingModule } from './lancamentos-routing.module';

import { LancamentoListComponent } from "./lancamento-list/lancamento-list.component";
import { LancamentoFormComponent } from "./lancamento-form/lancamento-form.component";

import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CalendarModule } from "primeng/calendar";
import { ToastModule } from 'primeng/toast';

@NgModule({
  imports: [
    CommonModule,
    LancamentosRoutingModule,
    ReactiveFormsModule,

    ToastModule,
    SelectButtonModule,
    DropdownModule,
    PanelModule,
    ButtonModule,
    InputTextModule,
    BreadcrumbModule,
    CalendarModule,
    TableModule
  ],
  declarations: [LancamentoListComponent, LancamentoFormComponent]
})
export class LancamentosModule { }
