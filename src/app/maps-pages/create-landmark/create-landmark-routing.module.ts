import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateLandmarkComponent } from './create-landmark.component';

const routes: Routes = [{ path: '', component: CreateLandmarkComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateLandmarkRoutingModule { }
