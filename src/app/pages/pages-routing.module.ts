import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'workbench', loadChildren: 'app/pages/workbench/workbench.module#WorkbenchModule'},
      {path: 'druid', loadChildren: 'app/pages/druid/druid.module#DruidModule'},
      {path: 'analysis', loadChildren: 'app/pages/analysis/analysis.module#AnalysisModule'},
      {path: 'content', loadChildren: 'app/pages/content/content.module#ContentModule'},
      {path: 'member', loadChildren: 'app/pages/member/member.module#MemberModule'},
      {path: 'user', loadChildren: 'app/pages/user/user.module#UserModule'},
      {path: 'logs', loadChildren: 'app/pages/logs/logs.module#LogsModule'},
      {path: 'words', loadChildren: 'app/pages/words/words.module#WordsModule'},
      {path: 'friendlink', loadChildren: 'app/pages/friendlink/friendlink.module#FriendlinkModule'},
      {path: 'job', loadChildren: 'app/pages/job/job.module#JobModule'},
      {path: 'vote', loadChildren: 'app/pages/vote/vote.module#VoteModule'},
      {path: 'message', loadChildren: 'app/pages/message/message.module#MessageModule'},
      {path: 'ad', loadChildren: 'app/pages/ad/ad.module#AdModule'},
      {path: 'system', loadChildren: 'app/pages/system/system.module#SystemModule'},
      {path: '', redirectTo: 'workbench', pathMatch: 'full'},
      {path: '**', redirectTo: 'workbench'}],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PagesRoutingModule {
}
