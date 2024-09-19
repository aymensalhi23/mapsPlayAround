import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {MegaMenuModule} from 'primeng/megamenu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    MegaMenuModule,
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    MegaMenuModule,
  ]
})
export class PrimengModule { }
