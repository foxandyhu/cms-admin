import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NormalComponent} from './normal/normal.component';
import {TopicComponent} from './topic/topic.component';
import {TypeComponent} from './type/type.component';
import {ChannelComponent} from './channel/channel.component';
import {ModelComponent} from './model/model.component';

const routes: Routes = [
  {path: 'normal', component: NormalComponent},
  {path: 'topic', component: TopicComponent},
  {path: 'type', component: TypeComponent},
  {path: 'channel', component: ChannelComponent},
  {path: 'model', component: ModelComponent},
  {path: '', redirectTo: 'normal', pathMatch: 'full'},
  {path: '**', redirectTo: 'normal'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {
}
