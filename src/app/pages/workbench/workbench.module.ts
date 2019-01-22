import {NgModule} from '@angular/core';
import {NgxEchartsModule} from 'ngx-echarts';

import {ThemeModule} from '../../@theme/theme.module';
import {WorkbenchComponent} from './workbench.component';
import {ContentsComponent} from './contents/contents.component';

import {VisitorsFlowComponent} from './flow/visitors-flow.component';
import {VisitorsEngineComponent} from './engine/visitors-engine.component';
import {VisitorsSourceComponent} from './source/visitors-source.component';

import {VisitorsBrowserComponent} from './browser/visitors-browser.component';

import {VisitorsAreaComponent} from './area/visitors-area.component';
import {VisitorsAreaMapComponent} from './area/map/visitors-area-map.component';
import {VisitorsAreaMapService} from './area/map/visitors-area-map.service';
import {VisitorsAreaChartComponent} from './area/chart/visitors-area-chart.component';

import {VisitorsWordsComponent} from './words/visitors-words.component';
import {WordsChartComponent} from './words/charts/words-chart.component';
import {SiteChartComponent} from './words/charts/site-chart.component';
import {WorkbenchRoutingModule} from './workbench-routing.module';

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
    VisitorsEngineComponent,
    VisitorsSourceComponent,
    VisitorsBrowserComponent,
    VisitorsAreaComponent,
    VisitorsAreaMapComponent,
    VisitorsAreaChartComponent,
    VisitorsWordsComponent,
    WordsChartComponent,
    SiteChartComponent,
  ],
  providers: [
    VisitorsAreaMapService,
  ],
})
export class WorkbenchModule {
}
