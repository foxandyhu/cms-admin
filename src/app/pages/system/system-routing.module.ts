import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResourceComponent} from './resource/resource.component';
import {WatermarkComponent} from './watermark/watermark.component';
import {MemberComponent} from './member/member.component';
import {LoginComponent} from './member/login/login.component';
import {RegisterComponent} from './member/register/register.component';
import {FirewallComponent} from './firewall/firewall.component';
import {CompanyComponent} from './company/company.component';
import {SiteComponent} from './site/site.component';
import {TaskComponent} from './task/task.component';

const routes: Routes = [
  {path: 'resource', component: ResourceComponent},
  {path: 'setting/watermark', component: WatermarkComponent},
  {path: 'setting/member', component: MemberComponent, children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
  {path: 'setting/firewall', component: FirewallComponent},
  {path: 'setting/company', component: CompanyComponent},
  {path: 'setting/site', component: SiteComponent},
  {path: 'setting/task', component: TaskComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRoutingModule { }
