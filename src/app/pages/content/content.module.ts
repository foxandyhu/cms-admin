import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThemeModule} from '../../@theme/theme.module';
import {ContentRoutingModule} from './content-routing.module';
import {NormalComponent} from './normal/normal.component';
import {SpecialTopicComponent} from './topic/topic.component';
import {ChannelTreeComponent} from './normal/channel-tree/channel-tree.component';
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

@NgModule({
  declarations: [NormalComponent, SpecialTopicComponent,
    ChannelTreeComponent, ChannelComponent, ModelComponent,
    ModelAddComponent, ModelDetailComponent, ModelItemComponent, ModelItemAddComponent, ModelItemDetailComponent,
    ChannelAddComponent, ChannelDetailComponent, SpecialTopicAddComponent, SpecialTopicDetailComponent],
  imports: [
    ThemeModule,
    CommonModule,
    NbDialogModule.forChild(),
    ContentRoutingModule,
  ],
  entryComponents: [ModelAddComponent, ModelDetailComponent,
    ModelItemAddComponent, ModelItemDetailComponent,
    ChannelAddComponent, ChannelDetailComponent],
  providers: [ModelService, ModelItemService, ChannelService, SpecialTopicService],
})
export class ContentModule {
}
