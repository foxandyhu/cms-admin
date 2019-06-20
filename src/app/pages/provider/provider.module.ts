import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { SmsComponent } from './sms/sms.component';
import { EmailComponent } from './email/email.component';
import { SmsHistoryComponent } from './sms/history/history.component';
import {ThemeModule} from '../../@theme/theme.module';

@NgModule({
  declarations: [SmsComponent, EmailComponent, SmsHistoryComponent],
  imports: [
    CommonModule,
    ThemeModule,
    ProviderRoutingModule,
  ],
})
export class ProviderModule { }
