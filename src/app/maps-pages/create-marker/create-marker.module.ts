import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateMarkerRoutingModule } from './create-marker-routing.module';
import { CreateMarkerComponent } from './create-marker.component';
import { GoogleMapsModule } from '@angular/google-maps';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    CreateMarkerComponent
  ],
  imports: [
    CommonModule,
    CreateMarkerRoutingModule,
    GoogleMapsModule,
    InputTextModule
  ]
})
export class CreateMarkerModule { }
