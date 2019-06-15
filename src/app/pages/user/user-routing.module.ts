import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './user.component';
import {RoleComponent} from './role/role.component';
import {PasswordComponent} from './password/password.component';

const routes: Routes = [
  {path: 'list', component: UserComponent},
  {path: 'role', component: RoleComponent},
  {path: 'password', component: PasswordComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: '**', redirectTo: 'list'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {
}
