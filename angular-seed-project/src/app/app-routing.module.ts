import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { AuthParentComponent } from './auth-parent/auth-parent.component';
import { AuthGuard } from './@guards/auth.guard';

const routes: Routes = [{

  path: '',
  component: ParentComponent,
  canActivate: [AuthGuard],
  children: [
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' },]
},
{
  path:'',
  component: AuthParentComponent,
  children: [
    {
      path: 'authentication',
      loadChildren: './auth/auth.module#AuthModule'
    }
]
}]
const config: ExtraOptions = {
  useHash: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
