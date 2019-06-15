import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user.component';
import {RoleComponent} from './role/role.component';
import {ThemeModule} from '../../@theme/theme.module';
import { PasswordComponent } from './password/password.component';

@NgModule({
  declarations: [UserComponent, RoleComponent, PasswordComponent],
  imports: [
    CommonModule,
    ThemeModule,
    UserRoutingModule,
  ],
})
export class UserModule {
}
