import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesOptionsComponent } from './routes-options.component';

const routes: Routes = [{ path: '', component: RoutesOptionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesOptionsRoutingModule { }
