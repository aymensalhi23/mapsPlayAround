import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { FleetsComponent } from './fleets/fleets.component';
import { LocationsComponent } from './locations/locations.component';


@NgModule({
  declarations: [
    MapComponent,
    FleetsComponent,
    LocationsComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    GoogleMapsModule
  ]
})
export class MapModule { }
