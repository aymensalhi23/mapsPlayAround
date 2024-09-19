import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateSiteRoutingModule } from './create-site-routing.module';
import { CreateSiteComponent } from './create-site.component';


@NgModule({
  declarations: [
    CreateSiteComponent
  ],
  imports: [
    CommonModule,
    CreateSiteRoutingModule
  ]
})
export class CreateSiteModule { }
