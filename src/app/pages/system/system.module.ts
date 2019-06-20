import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import {ThemeModule} from '../../@theme/theme.module';
import { ResourceComponent } from './resource/resource.component';
import { ResTreeComponent } from './resource/res-tree/res-tree.component';
import {TreeModule} from 'angular-tree-component';
import { WatermarkComponent } from './watermark/watermark.component';
import { MemberComponent } from './member/member.component';
import { LoginComponent } from './member/login/login.component';
import { RegisterComponent } from './member/register/register.component';
import {EditorModule} from '@tinymce/tinymce-angular';
import { FirewallComponent } from './firewall/firewall.component';
import { CompanyComponent } from './company/company.component';
import { SiteComponent } from './site/site.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [ResourceComponent, ResTreeComponent, WatermarkComponent,
    MemberComponent, LoginComponent, RegisterComponent, FirewallComponent,
    CompanyComponent, SiteComponent, TaskComponent],
  imports: [
    CommonModule,
    ThemeModule,
    TreeModule,
    EditorModule,
    SystemRoutingModule,
  ],
})
export class SystemModule { }
