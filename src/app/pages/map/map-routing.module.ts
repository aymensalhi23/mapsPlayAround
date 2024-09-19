import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map.component';

const routes: Routes = [
  { path: '', component: MapComponent },
  {
    path: 'fleets',
    loadChildren: () =>
      import('./fleets/fleets.module').then((m) => m.FleetsModule),
  },
  {
    path: 'locations',
    loadChildren: () =>
      import('./locations/locations.module').then((m) => m.LocationsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapRoutingModule {}
