import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MemberComponent} from './member.component';
import {MemberGroupComponent} from './group/group.component';
import {MemberAddComponent} from './member-add/member-add.component';
import {MemberDetailComponent} from './member-detail/member-detail.component';
import {MemberConfigComponent} from '../member/config/member-config.component';
import {LoginConfigComponent} from '../member/config/login/login.component';
import {RegisterConfigComponent} from '../member/config/register/register.component';

const routes: Routes = [
  {path: 'list', component: MemberComponent},
  {path: 'add', component: MemberAddComponent},
  {path: 'group', component: MemberGroupComponent},
  {path: 'config', component: MemberConfigComponent, children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginConfigComponent},
      {path: 'register', component: RegisterConfigComponent},
    ],
  },
  {path: ':memberId', component: MemberDetailComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: '**', redirectTo: 'list'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberRoutingModule {
}
