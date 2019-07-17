import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FriendlinkComponent} from './friendlink.component';
import {FriendLinkTypeComponent} from './friendlink-type.component';

const routes: Routes = [
  {path: 'list', component: FriendlinkComponent},
  {path: 'type/list', component: FriendLinkTypeComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: '**', redirectTo: 'list'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FriendlinkRoutingModule {
}
