import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderRoutesComponent } from './render-routes.component';

const routes: Routes = [{ path: '', component: RenderRoutesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenderRoutesRoutingModule { }
