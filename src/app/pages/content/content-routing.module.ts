import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NormalComponent} from './normal/normal.component';
import {TopicComponent} from './topic/topic.component';
import {ChannelComponent} from './channel/channel.component';
import {ModelComponent} from './model/model.component';
import {ModelItemComponent} from './model/model-item/model-item.component';

const routes: Routes = [
  {path: 'normal', component: NormalComponent},
  {path: 'topic', component: TopicComponent},
  {path: 'channel', component: ChannelComponent},
  {path: 'model', component: ModelComponent},
  {path: 'model/item/:modelId', component: ModelItemComponent},
  {path: '', redirectTo: 'normal', pathMatch: 'full'},
  {path: '**', redirectTo: 'normal'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {
}
