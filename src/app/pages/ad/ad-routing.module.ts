import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdComponent} from './ad.component';
import {AdSpaceComponent} from './ad-space.component';
import {AdAddComponent} from './ad-add/ad-add.component';
import {AdDetailComponent} from './ad-detail/ad-detail.component';

const routes: Routes = [
  {path: 'list', component: AdComponent},
  {path: 'add', component: AdAddComponent},
  {path: ':adId', component: AdDetailComponent},
  {path: 'space/list', component: AdSpaceComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: '**', redirectTo: 'list'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdRoutingModule {
}
