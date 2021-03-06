import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { AuthParentComponent } from './auth-parent/auth-parent.component';
import { AuthGuard } from './@guards/auth.guard';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
{ path: '',
  component: ParentComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: '',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
    }]
},
{ path: '',
  component: AuthParentComponent,
  children: [
    {
      path: 'authentication',
      loadChildren: './auth/auth.module#AuthModule'
    },
    {
      path:'error',
      component: ErrorComponent
    },
  ]
},

{
  path: '**',
  redirectTo: 'error'
}]

const config: ExtraOptions = {
  useHash: false
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
