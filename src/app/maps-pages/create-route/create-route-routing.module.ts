import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRouteComponent } from './create-route.component';

const routes: Routes = [{ path: '', component: CreateRouteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRouteRoutingModule { }
