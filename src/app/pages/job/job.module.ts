import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {JobRoutingModule} from './job-routing.module';
import {JobApplyComponent} from './apply/job-apply.component';
import {ThemeModule} from '../../@theme/theme.module';
import {JobService} from './service/job-service';
import {JobResumeComponent} from './resume/job-resume.component';

@NgModule({
  declarations: [JobApplyComponent, JobResumeComponent],
  imports: [
    CommonModule,
    ThemeModule,
    JobRoutingModule,
  ],
  providers: [JobService],
})
export class JobModule {
}
