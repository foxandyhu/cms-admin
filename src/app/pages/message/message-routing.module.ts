import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MessageComponent} from './message.component';

const routes: Routes = [
  {path: 'list', component: MessageComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: '**', redirectTo: 'list'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageRoutingModule {
}
