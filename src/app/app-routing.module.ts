import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MapsLayoutComponent } from './layouts/maps-layout/maps-layout.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },
  {
    path: 'dashboard',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
    ],
  },

  {
    path: 'maps-old',
    component: MapsLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/map/map.module').then((m) => m.MapModule),
      },
    ],
  },

  {
    path: 'report',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/report/report.module').then((m) => m.ReportModule),
      },
    ],
  },
  {
    path: 'organization',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/organization/organization.module').then(
            (m) => m.OrganizationModule
          ),
      },
    ],
  },
  {
    path: 'maps',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./maps-pages/maps-pages.module').then(
            (m) => m.MapsPagesModule
          ),
      },
    ],
  },
  { path: '**', pathMatch: 'full', redirectTo: 'maps-pages' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
