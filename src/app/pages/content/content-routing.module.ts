import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NormalComponent} from './normal/normal.component';
import {TopicComponent} from './topic/topic.component';

const routes: Routes = [
  {path: 'normal', component: NormalComponent},
  {path: 'topic', component: TopicComponent},
  {path: '', redirectTo: 'normal', pathMatch: 'full'},
  {path: '**', redirectTo: 'normal'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {
}
