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
import {RoleAddComponent} from './role-add/role-add.component';
import {RoleDetailComponent} from './role-detail/role-detail.component';
import {RoleUserComponent} from './role-user/role-user.component';
import {RoleMenuComponent} from './role-menu/role-menu.component';
import {NbDialogModule} from '@nebular/theme';

@NgModule({
  declarations: [UserComponent, RoleComponent, PasswordComponent,
    UserAddComponent, UserDetailComponent, RoleAddComponent, RoleDetailComponent, RoleUserComponent, RoleMenuComponent],
  imports: [
    CommonModule,
    ThemeModule,
    UserRoutingModule,
    NbDialogModule.forChild(),
  ], providers: [UserService, RoleService],
  entryComponents: [RoleMenuComponent],
})
export class UserModule {
}
