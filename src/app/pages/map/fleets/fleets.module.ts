import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FleetsRoutingModule } from './fleets-routing.module';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/shared/modules/primeng.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    FleetsRoutingModule,
    PrimengModule,
    FormsModule
  ]
})
export class FleetsModule { }
