import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsPagesRoutingModule } from './maps-pages-routing.module';
import { MapsPagesComponent } from './maps-pages.component';


@NgModule({
  declarations: [
    MapsPagesComponent
  ],
  imports: [
    CommonModule,
    MapsPagesRoutingModule
  ]
})
export class MapsPagesModule { }
