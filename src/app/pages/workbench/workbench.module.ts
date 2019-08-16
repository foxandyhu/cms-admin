import {NgModule} from '@angular/core';
import {NgxEchartsModule} from 'ngx-echarts';

import {ThemeModule} from '../../@theme/theme.module';
import {WorkbenchComponent} from './workbench.component';
import {ContentsComponent} from './contents/contents.component';

import {VisitorsFlowComponent} from './flow/visitors-flow.component';

import {WorkbenchRoutingModule} from './workbench-routing.module';
import {AnalysisService} from '../analysis/service/analysis-service';
import { ContentTabsComponent } from './contents/tabs/tabs.component';
import { ContentListComponent } from './contents/list/list.component';

@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    WorkbenchRoutingModule,
  ],
  declarations: [
    WorkbenchComponent,
    ContentsComponent,
    VisitorsFlowComponent,
    ContentTabsComponent,
    ContentListComponent,
  ],
  providers: [
    AnalysisService,
  ],
})
export class WorkbenchModule {
}
