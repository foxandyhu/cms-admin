import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MemberComponent} from './member.component';
import {MemberGroupComponent} from './group/group.component';
import {MemberAddComponent} from './member-add/member-add.component';
import {MemberDetailComponent} from './member-detail/member-detail.component';

const routes: Routes = [
  {path: 'list', component: MemberComponent},
  {path: 'add', component: MemberAddComponent},
  {path: 'group', component: MemberGroupComponent},
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
