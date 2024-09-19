import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenderVehiclesRoutingModule } from './render-vehicles-routing.module';
import { RenderVehiclesComponent } from './render-vehicles.component';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    RenderVehiclesComponent
  ],
  imports: [
    CommonModule,
    RenderVehiclesRoutingModule,
    GoogleMapsModule
  ]
})
export class RenderVehiclesModule { }
