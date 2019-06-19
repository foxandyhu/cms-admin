import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResourceComponent} from './resource/resource.component';
import {WatermarkComponent} from './watermark/watermark.component';
import {MemberComponent} from './member/member.component';
import {LoginComponent} from './member/login/login.component';
import {RegisterComponent} from './member/register/register.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRoutingModule { }
