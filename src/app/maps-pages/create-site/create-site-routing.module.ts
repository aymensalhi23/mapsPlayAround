import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSiteComponent } from './create-site.component';

const routes: Routes = [{ path: '', component: CreateSiteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateSiteRoutingModule { }
