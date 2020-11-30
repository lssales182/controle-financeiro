import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CategoriaListComponent, CategoriaFormComponent]
})
export class CategoriasModule { }
