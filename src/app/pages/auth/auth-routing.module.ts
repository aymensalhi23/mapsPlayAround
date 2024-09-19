import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  { path: '', loadChildren: () =>
    import('./login/login.module').then((m) => m.LoginModule) },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'reset-password-request',
    loadChildren: () =>
      import('./forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
