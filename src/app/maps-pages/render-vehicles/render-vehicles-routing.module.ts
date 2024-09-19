import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderVehiclesComponent } from './render-vehicles.component';

const routes: Routes = [{ path: '', component: RenderVehiclesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenderVehiclesRoutingModule { }
