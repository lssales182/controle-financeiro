import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';

import { PageHeaderComponent } from './page-header/page-header.component';



@NgModule({
  declarations: [PageHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule
  ],
  exports: [PageHeaderComponent]
})
export class SharedModule { }
