import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateGeofenceRoutingModule } from './create-geofence-routing.module';
import { CreateGeofenceComponent } from './create-geofence.component';


@NgModule({
  declarations: [
    CreateGeofenceComponent
  ],
  imports: [
    CommonModule,
    CreateGeofenceRoutingModule
  ]
})
export class CreateGeofenceModule { }
