import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMarkerComponent } from './create-marker.component';

const routes: Routes = [{ path: '', component: CreateMarkerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateMarkerRoutingModule { }
