import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VoteComponent} from './vote.component';

const routes: Routes = [
  {path: 'list', component: VoteComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: '**', redirectTo: 'list'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoteRoutingModule {
}
