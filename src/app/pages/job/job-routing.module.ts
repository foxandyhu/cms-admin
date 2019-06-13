import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {JobApplyComponent} from './apply/job-apply.component';

const routes: Routes = [
  {path: 'apply', component: JobApplyComponent},
  {path: '', redirectTo: 'apply', pathMatch: 'full'},
  {path: '**', redirectTo: 'apply'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobRoutingModule {
}
