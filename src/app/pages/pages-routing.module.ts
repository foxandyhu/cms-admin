import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {WorkbenchComponent} from './workbench/workbench.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {path: 'index', component: WorkbenchComponent},
    {path: '', redirectTo: 'index', pathMatch: 'full'}
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
