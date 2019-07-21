import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ResourceComponent} from './resource/resource.component';
import {WatermarkSettingComponent} from './watermark/watermark.component';
import {FirewallSettingComponent} from './firewall/firewall.component';
import {CompanySettingComponent} from './company/company.component';
import {SiteSettingComponent} from './site/site.component';
import {TaskSettingComponent} from './task/task.component';
import {MenuComponent} from './menu/menu.component';
import {NoRightComponent} from './noright/noright.component';
import {SmsProviderComponent} from './sms/provider/provider.component';
import {SmsRecordComponent} from './sms/record/record.component';
import {EmailProviderComponent} from './email/email.component';

const routes: Routes = [
  {path: 'resource', component: ResourceComponent},
  {path: 'noright', component: NoRightComponent},
  {path: 'setting/watermark', component: WatermarkSettingComponent},
  {path: 'setting/firewall', component: FirewallSettingComponent},
  {path: 'setting/company', component: CompanySettingComponent},
  {path: 'setting/site', component: SiteSettingComponent},
  {path: 'setting/task', component: TaskSettingComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'sms/provider', component: SmsProviderComponent},
  {path: 'sms/record', component: SmsRecordComponent},
  {path: 'email/provider', component: EmailProviderComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRoutingModule {
}
