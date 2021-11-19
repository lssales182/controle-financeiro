import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    ReactiveFormsModule,

    InputTextModule,
    PanelModule,
    ToastModule,
    ButtonModule,
    BreadcrumbModule,
    TableModule,

    SharedModule
  ],
  declarations: [CategoriaListComponent, CategoriaFormComponent]
})
export class CategoriasModule { }
