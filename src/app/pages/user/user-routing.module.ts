import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './user.component';
import {RoleComponent} from './role/role.component';
import {PasswordComponent} from './password/password.component';
import {UserAddComponent} from './user-add/user-add.component';
import {UserDetailComponent} from './user-detail/user-detail.component';

const routes: Routes = [
  {path: 'list', component: UserComponent},
  {path: 'add', component: UserAddComponent},
  {path: 'detail', component: UserDetailComponent},
  {path: 'role', component: RoleComponent},
  {path: 'password', component: PasswordComponent},
  {path: ':userId', component: UserDetailComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: '**', redirectTo: 'list'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {
}
