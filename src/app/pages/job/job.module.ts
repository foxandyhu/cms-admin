import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {JobRoutingModule} from './job-routing.module';
import {JobApplyComponent} from './apply/job-apply.component';
import {ThemeModule} from '../../@theme/theme.module';

@NgModule({
  declarations: [JobApplyComponent],
  imports: [
    CommonModule,
    ThemeModule,
    JobRoutingModule,
  ],
})
export class JobModule {
}
