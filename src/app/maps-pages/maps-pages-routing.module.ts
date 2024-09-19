import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsPagesComponent } from './maps-pages.component';

const routes: Routes = [
  { path: '', component: MapsPagesComponent },
  {
    path: 'render-vehicles',
    loadChildren: () =>
      import('./render-vehicles/render-vehicles.module').then(
        (m) => m.RenderVehiclesModule
      ),
  },
  {
    path: 'render-routes',
    loadChildren: () =>
      import('./render-routes/render-routes.module').then(
        (m) => m.RenderRoutesModule
      ),
  },
  { path: 'routes-conditions', loadChildren: () => import('./routes-conditions/routes-conditions.module').then(m => m.RoutesConditionsModule) },
  { path: 'tracking', loadChildren: () => import('./tracking/tracking.module').then(m => m.TrackingModule) },
  { path: 'hover', loadChildren: () => import('./hover/hover.module').then(m => m.HoverModule) },
  { path: 'create-route', loadChildren: () => import('./create-route/create-route.module').then(m => m.CreateRouteModule) },
  { path: 'routes-options', loadChildren: () => import('./routes-options/routes-options.module').then(m => m.RoutesOptionsModule) },
  { path: 'create-geofence', loadChildren: () => import('./create-geofence/create-geofence.module').then(m => m.CreateGeofenceModule) },
  { path: 'create-landmark', loadChildren: () => import('./create-landmark/create-landmark.module').then(m => m.CreateLandmarkModule) },
  { path: 'create-site', loadChildren: () => import('./create-site/create-site.module').then(m => m.CreateSiteModule) },
  { path: 'create-marker', loadChildren: () => import('./create-marker/create-marker.module').then(m => m.CreateMarkerModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsPagesRoutingModule {}
