import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LogsRoutingModule} from './logs-routing.module';
import {LogsComponent} from './logs.component';
import {FileComponent} from './file/file.component';
import {ThemeModule} from '../../@theme/theme.module';

@NgModule({
  declarations: [LogsComponent, FileComponent],
  imports: [
    CommonModule,
    ThemeModule,
    LogsRoutingModule,
  ],
})
export class LogsModule {
}
