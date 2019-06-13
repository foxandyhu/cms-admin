import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MessageRoutingModule} from './message-routing.module';
import {MessageComponent} from './message.component';
import {ThemeModule} from '../../@theme/theme.module';

@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,
    ThemeModule,
    MessageRoutingModule,
  ],
})
export class MessageModule {
}
