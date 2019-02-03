import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

const routes: Routes = [
  {path: 'workbench', loadChildren: 'app/pages/workbench/workbench.module#WorkbenchModule'},
  {path: 'analysis', loadChildren: 'app/pages/analysis/analysis.module#AnalysisModule'},
  {path: 'content', loadChildren: 'app/pages/content/content.module#ContentModule'},
  {path: 'member', loadChildren: 'app/pages/member/member.module#MemberModule'},
  {path: 'user', loadChildren: 'app/pages/user/user.module#UserModule'},
  {path: 'logs', loadChildren: 'app/pages/logs/logs.module#LogsModule'},
  {path: 'data', loadChildren: 'app/pages/data/data.module#DataModule'},
  {path: 'friendlink', loadChildren: 'app/pages/friendlink/friendlink.module#FriendlinkModule'},
  {path: 'acquisition', loadChildren: 'app/pages/acquisition/acquisition.module#AcquisitionModule'},
  {path: 'job', loadChildren: 'app/pages/job/job.module#JobModule'},
  {path: 'vote', loadChildren: 'app/pages/vote/vote.module#VoteModule'},
  {path: 'message', loadChildren: 'app/pages/message/message.module#MessageModule'},
  {path: 'ad', loadChildren: 'app/pages/ad/ad.module#AdModule'},
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  {path: '', redirectTo: 'workbench', pathMatch: 'full'},
  {path: '**', redirectTo: 'workbench'},
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
