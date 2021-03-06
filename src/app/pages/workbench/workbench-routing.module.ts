import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {WorkbenchComponent} from './workbench.component';

const routes: Routes = [{
  path: '',
  component: WorkbenchComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkbenchRoutingModule {
}
