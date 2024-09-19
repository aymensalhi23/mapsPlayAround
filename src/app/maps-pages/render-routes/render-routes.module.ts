import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenderRoutesRoutingModule } from './render-routes-routing.module';
import { RenderRoutesComponent } from './render-routes.component';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    RenderRoutesComponent
  ],
  imports: [
    CommonModule,
    RenderRoutesRoutingModule,
    GoogleMapsModule
  ]
})
export class RenderRoutesModule { }
