import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThemeModule} from '../../@theme/theme.module';
import { TreeModule } from 'angular-tree-component';
import { ContentRoutingModule } from './content-routing.module';
import { NormalComponent } from './normal/normal.component';
import { TopicComponent } from './topic/topic.component';
import { ChannelTreeComponent } from './normal/channel-tree/channel-tree.component';
import { TypeComponent } from './type/type.component';
import { ChannelComponent } from './channel/channel.component';
import { ModelComponent } from './model/model.component';

@NgModule({
  declarations: [NormalComponent, TopicComponent, ChannelTreeComponent, TypeComponent, ChannelComponent, ModelComponent],
  imports: [
    ThemeModule,
    TreeModule,
    CommonModule,
    ContentRoutingModule,
  ],
})
export class ContentModule { }
