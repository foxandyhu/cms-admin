import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LogsComponent} from './logs.component';
import {FileComponent} from './file/file.component';

const routes: Routes = [
  {path: 'list', component: LogsComponent},
  {path: 'file', component: FileComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: '**', redirectTo: 'list'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogsRoutingModule {
}
