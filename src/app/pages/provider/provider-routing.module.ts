import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SmsComponent} from './sms/sms.component';
import {EmailComponent} from './email/email.component';
import {SmsHistoryComponent} from './sms/history/history.component';

const routes: Routes = [
  {path: 'sms', component: SmsComponent},
  {path: 'sms/history', component: SmsHistoryComponent},
  {path: 'email', component: EmailComponent},
  {path: '', redirectTo: 'sms', pathMatch: 'full'},
  {path: '**', redirectTo: 'sms'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProviderRoutingModule {
}
