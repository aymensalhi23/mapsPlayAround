import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGeofenceComponent } from './create-geofence.component';

const routes: Routes = [{ path: '', component: CreateGeofenceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateGeofenceRoutingModule { }
