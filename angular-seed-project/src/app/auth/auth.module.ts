import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    AuthRoutingModule,ThemeModule
  ],
  declarations: [AuthComponent]
})
export class AuthModule { }
