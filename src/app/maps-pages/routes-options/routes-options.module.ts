import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesOptionsRoutingModule } from './routes-options-routing.module';
import { RoutesOptionsComponent } from './routes-options.component';


@NgModule({
  declarations: [
    RoutesOptionsComponent
  ],
  imports: [
    CommonModule,
    RoutesOptionsRoutingModule
  ]
})
export class RoutesOptionsModule { }
