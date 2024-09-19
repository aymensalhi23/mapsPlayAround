import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateLandmarkRoutingModule } from './create-landmark-routing.module';
import { CreateLandmarkComponent } from './create-landmark.component';


@NgModule({
  declarations: [
    CreateLandmarkComponent
  ],
  imports: [
    CommonModule,
    CreateLandmarkRoutingModule
  ]
})
export class CreateLandmarkModule { }
