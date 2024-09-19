import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConditionsComponent } from './routes-conditions.component';

const routes: Routes = [{ path: '', component: RoutesConditionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesConditionsRoutingModule { }
