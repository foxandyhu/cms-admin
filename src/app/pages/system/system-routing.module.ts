import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ResourceComponent} from './resource/resource.component';
import {WatermarkSettingComponent} from './watermark/watermark.component';
import {MemberSettingComponent} from './member/member.component';
import {LoginSettingComponent} from './member/login/login.component';
import {RegisterSettingComponent} from './member/register/register.component';
import {FirewallSettingComponent} from './firewall/firewall.component';
import {CompanySettingComponent} from './company/company.component';
import {SiteSettingComponent} from './site/site.component';
import {TaskSettingComponent} from './task/task.component';
import {MenuComponent} from './menu/menu.component';

const routes: Routes = [
  {path: 'resource', component: ResourceComponent},
  {path: 'setting/watermark', component: WatermarkSettingComponent},
  {
    path: 'setting/member', component: MemberSettingComponent, children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginSettingComponent,
      },
      {
        path: 'register',
        component: RegisterSettingComponent,
      },
    ],
  },
  {path: 'setting/firewall', component: FirewallSettingComponent},
  {path: 'setting/company', component: CompanySettingComponent},
  {path: 'setting/site', component: SiteSettingComponent},
  {path: 'setting/task', component: TaskSettingComponent},
  {path: 'menu', component: MenuComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRoutingModule {
}
