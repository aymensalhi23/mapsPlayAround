import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoverRoutingModule } from './hover-routing.module';
import { HoverComponent } from './hover.component';


@NgModule({
  declarations: [
    HoverComponent
  ],
  imports: [
    CommonModule,
    HoverRoutingModule
  ]
})
export class HoverModule { }
