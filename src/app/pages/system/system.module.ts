import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import {ThemeModule} from '../../@theme/theme.module';
import { ResourceComponent } from './resource/resource.component';
import { ResTreeComponent } from './res-tree/res-tree.component';
import {TreeModule} from 'angular-tree-component';
import { WatermarkComponent } from './watermark/watermark.component';

@NgModule({
  declarations: [ResourceComponent, ResTreeComponent, WatermarkComponent],
  imports: [
    CommonModule,
    ThemeModule,
    TreeModule,
    SystemRoutingModule,
  ],
})
export class SystemModule { }
