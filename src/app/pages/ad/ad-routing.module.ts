import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdComponent} from './ad.component';

const routes: Routes = [
  {path: 'list', component: AdComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: '**', redirectTo: 'list'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdRoutingModule {
}
