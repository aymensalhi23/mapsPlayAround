import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoverComponent } from './hover.component';

const routes: Routes = [{ path: '', component: HoverComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HoverRoutingModule { }
