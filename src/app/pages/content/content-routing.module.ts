import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ArticleComponent} from './article/article.component';
import {SpecialTopicComponent} from './topic/topic.component';
import {ChannelComponent} from './channel/channel.component';
import {ModelComponent} from './model/model.component';
import {ModelItemComponent} from './model/model-item/model-item.component';
import {SpecialTopicAddComponent} from './topic/topic-add/topic-add.component';
import {SpecialTopicDetailComponent} from './topic/topic-detail/topic-detail.component';

const routes: Routes = [
  {path: 'article', component: ArticleComponent},
  {path: 'topic', component: SpecialTopicComponent},
  {path: 'topic/add', component: SpecialTopicAddComponent},
  {path: 'topic/:topicId', component: SpecialTopicDetailComponent},
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
