import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThemeModule} from '../../@theme/theme.module';
import {ContentRoutingModule} from './content-routing.module';
import {ArticleComponent} from './article/article.component';
import {SpecialTopicComponent} from './topic/topic.component';
import {ChannelTreeComponent} from './article/channel-tree/channel-tree.component';
import {ChannelComponent} from './channel/channel.component';
import {ModelComponent} from './model/model.component';
import {ModelService} from './service/model-service';
import {ModelAddComponent} from './model/model-add/model-add.component';
import {ModelDetailComponent} from './model/model-detail/model-detail.component';
import {NbDialogModule} from '@nebular/theme';
import {ModelItemComponent} from './model/model-item/model-item.component';
import {ModelItemAddComponent} from './model/model-item-add/model-item-add.component';
import {ModelItemDetailComponent} from './model/model-item-detail/model-item-detail.component';
import {ModelItemService} from './service/model-item-service';
import {ChannelService} from './service/channel-service';
import {ChannelAddComponent} from './channel/channel-add/channel-add.component';
import {ChannelDetailComponent} from './channel/channel-detail/channel-detail.component';
import {SpecialTopicService} from './service/topic-service';
import {SpecialTopicAddComponent} from './topic/topic-add/topic-add.component';
import {SpecialTopicDetailComponent} from './topic/topic-detail/topic-detail.component';
import {ArticleService} from './service/article-service';
import {ArticleTopComponent} from './article/top/top.component';
import {ArticleRelatedTopicComponent} from './article/related-topic/related-topic.component';
import {ArticleTopicComponent} from './article/article-topic/article-topic.component';
import {ArticleAddComponent} from './article/article-add/article-add.component';
import {ArticleDetailComponent} from './article/article-detail/article-detail.component';
import {ColorPickerModule} from 'ngx-color-picker';
import {MemberGroupService} from '../member/service/member-group-service';
import {EditorModule} from '@tinymce/tinymce-angular';
import {ScoreGroupService} from '../words/service/score-group-service';
import {DictionaryService} from '../words/service/dictionary-service';

@NgModule({
  declarations: [ArticleComponent, SpecialTopicComponent,
    ChannelTreeComponent, ChannelComponent, ModelComponent,
    ModelAddComponent, ModelDetailComponent, ModelItemComponent, ModelItemAddComponent, ModelItemDetailComponent,
    ChannelAddComponent, ChannelDetailComponent, SpecialTopicAddComponent,
    SpecialTopicDetailComponent, ArticleTopComponent, ArticleRelatedTopicComponent,
    ArticleTopicComponent, ArticleAddComponent, ArticleDetailComponent],
  imports: [
    ThemeModule,
    CommonModule,
    EditorModule,
    ColorPickerModule,
    NbDialogModule.forChild(),
    ContentRoutingModule,
  ],
  entryComponents: [ModelAddComponent, ModelDetailComponent,
    ModelItemAddComponent, ModelItemDetailComponent, ArticleTopicComponent,
    ChannelAddComponent, ChannelDetailComponent, ArticleTopComponent, ArticleRelatedTopicComponent],
  providers: [ModelService, ModelItemService, ChannelService, SpecialTopicService,
    ArticleService, MemberGroupService, ScoreGroupService, DictionaryService],
})
export class ContentModule {
}
