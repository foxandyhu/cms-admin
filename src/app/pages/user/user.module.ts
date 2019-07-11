import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user.component';
import {RoleComponent} from './role/role.component';
import {ThemeModule} from '../../@theme/theme.module';
import {PasswordComponent} from './password/password.component';
import {UserAddComponent} from './user-add/user-add.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {UserService} from './service/users.service';
import {RoleService} from './service/roles.service';

@NgModule({
  declarations: [UserComponent, RoleComponent, PasswordComponent, UserAddComponent, UserDetailComponent],
  imports: [
    CommonModule,
    ThemeModule,
    UserRoutingModule,
  ], providers: [UserService, RoleService],
})
export class UserModule {
}
