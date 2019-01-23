import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FriendlinkComponent} from './friendlink.component';

const routes: Routes = [
  {path: 'list', component: FriendlinkComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: '**', redirectTo: 'list'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FriendlinkRoutingModule {
}
