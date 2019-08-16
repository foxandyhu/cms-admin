import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DruidComponent} from './druid.component';

const routes: Routes = [{path: '', component: DruidComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DruidRoutingModule {
}
