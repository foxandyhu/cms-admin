import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SystemRoutingModule} from './system-routing.module';
import {ThemeModule} from '../../@theme/theme.module';
import {ResourceComponent} from './resource/resource.component';
import {ResTreeComponent} from './resource/res-tree/res-tree.component';
import {WatermarkConfigComponent} from './watermark/watermark.component';
import {FirewallSettingComponent} from './firewall/firewall.component';
import {CompanyComponent} from './company/company.component';
import {SiteConfigComponent} from './site/site.component';
import {TaskComponent} from './task/task.component';
import {MenuComponent} from './menu/menu.component';
import {MenuAddComponent} from './menu/menu-add/menu-add.component';
import {NbDialogModule} from '@nebular/theme';
import {MenuService} from './service/menu-service';
import {MenuDetailComponent} from './menu/menu-detail/menu-detail.component';
import {NoRightComponent} from './noright/noright.component';
import {SmsProviderComponent} from './sms/provider/provider.component';
import {SmsRecordComponent} from './sms/record/record.component';
import {SmsProviderService} from './service/sms-provider-service';
import {SmsProviderAddComponent} from './sms/provider/provider-add/provider-add.component';
import {SmsProviderDetailComponent} from './sms/provider/provider-detail/provider-detail.component';
import {EmailProviderComponent} from './email/email.component';
import {EmailProviderAddComponent} from './email/email-add/email-add.component';
import {EmailProviderDetailComponent} from './email/email-detail/email-detail.component';
import {EmailProviderService} from './service/email-provider-service';
import {SmsRecordService} from './service/sms-record-service';
import {EditorModule} from '@tinymce/tinymce-angular';
import {SiteConfigService} from './service/site-config-service';
import {WatermarkConfigService} from './service/watermark-config-service';
import {ColorPickerModule} from 'ngx-color-picker';
import {FirewallConfigService} from './service/firewall-config-service';
import {CompanyService} from './service/company-service';
import {DictionaryService} from '../words/service/dictionary-service';
import {TaskService} from './service/task-service';
import {ResourceService} from './service/resource-service';
import {ResDirAddComponent} from './resource/res-dir-add/res-dir-add.component';

@NgModule({
  declarations: [ResourceComponent, ResTreeComponent, WatermarkConfigComponent,
    FirewallSettingComponent, CompanyComponent, SiteConfigComponent, TaskComponent,
    MenuComponent, MenuAddComponent, MenuDetailComponent, NoRightComponent,
    SmsProviderComponent, SmsRecordComponent, SmsProviderAddComponent,
    SmsProviderDetailComponent, EmailProviderComponent, ResDirAddComponent,
    EmailProviderAddComponent, EmailProviderDetailComponent],
  imports: [
    CommonModule,
    ThemeModule,
    SystemRoutingModule,
    ColorPickerModule,
    EditorModule,
    NbDialogModule.forChild(),
  ],
  entryComponents: [MenuAddComponent, MenuDetailComponent, SmsProviderAddComponent,
    SmsProviderDetailComponent, EmailProviderAddComponent, EmailProviderDetailComponent,
    ResDirAddComponent],
  providers: [MenuService, SmsProviderService, EmailProviderService, SmsRecordService, SiteConfigService,
    WatermarkConfigService, FirewallConfigService, CompanyService, DictionaryService, TaskService,
    ResourceService],
})
export class SystemModule {
}
