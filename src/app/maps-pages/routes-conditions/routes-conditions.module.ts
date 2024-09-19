import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesConditionsRoutingModule } from './routes-conditions-routing.module';
import { RoutesConditionsComponent } from './routes-conditions.component';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    RoutesConditionsComponent
  ],
  imports: [
    CommonModule,
    RoutesConditionsRoutingModule,
    GoogleMapsModule
  ]
})
export class RoutesConditionsModule { }
