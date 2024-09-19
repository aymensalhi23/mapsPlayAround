import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRouteRoutingModule } from './create-route-routing.module';
import { CreateRouteComponent } from './create-route.component';


@NgModule({
  declarations: [
    CreateRouteComponent
  ],
  imports: [
    CommonModule,
    CreateRouteRoutingModule
  ]
})
export class CreateRouteModule { }
