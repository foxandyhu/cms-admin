import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import {ThemeModule} from '../../@theme/theme.module';
import { ResourceComponent } from './resource/resource.component';
import { ResTreeComponent } from './resource/res-tree/res-tree.component';
import {TreeModule} from 'angular-tree-component';
import { WatermarkSettingComponent } from './watermark/watermark.component';
import { MemberSettingComponent } from './member/member.component';
import { LoginSettingComponent } from './member/login/login.component';
import { RegisterSettingComponent } from './member/register/register.component';
import {EditorModule} from '@tinymce/tinymce-angular';
import { FirewallSettingComponent } from './firewall/firewall.component';
import { CompanySettingComponent } from './company/company.component';
import { SiteSettingComponent } from './site/site.component';
import { TaskSettingComponent } from './task/task.component';

@NgModule({
  declarations: [ResourceComponent, ResTreeComponent, WatermarkSettingComponent,
    MemberSettingComponent, LoginSettingComponent, RegisterSettingComponent, FirewallSettingComponent,
    CompanySettingComponent, SiteSettingComponent, TaskSettingComponent],
  imports: [
    CommonModule,
    ThemeModule,
    TreeModule,
    EditorModule,
    SystemRoutingModule,
  ],
})
export class SystemModule { }
