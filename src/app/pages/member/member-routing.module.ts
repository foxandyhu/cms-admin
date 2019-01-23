import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MemberComponent} from './member.component';
import {GroupComponent} from './group/group.component';

const routes: Routes = [
  {path: 'list', component: MemberComponent},
  {path: 'group', component: GroupComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: '**', redirectTo: 'list'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberRoutingModule {
}
