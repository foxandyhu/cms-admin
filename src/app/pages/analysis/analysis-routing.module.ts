import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FlowAnalysisComponent} from './flow/flow-analysis.component';
import {ChannelAnalysisComponent} from './channel/channel-analysis.component';
import {SourceAnalysisComponent} from './source/source-analysis.component';
import {EngineAnalysisComponent} from './engine/engine-analysis.component';
import {BrowserAnalysisComponent} from './browser/browser-analysis.component';
import {SiteAnalysisComponent} from './site/site-analysis.component';
import {WordsAnalysisComponent} from './words/words-analysis.component';
import {PagesAnalysisComponent} from './pages/pages-analysis.component';
import {AreaAnalysisComponent} from './area/area-analysis.component';

const routes: Routes = [
  {path: 'flow', component: FlowAnalysisComponent},
  {path: 'channel', component: ChannelAnalysisComponent},
  {path: 'source', component: SourceAnalysisComponent},
  {path: 'engine', component: EngineAnalysisComponent},
  {path: 'browser', component: BrowserAnalysisComponent},
  {path: 'site', component: SiteAnalysisComponent},
  {path: 'words', component: WordsAnalysisComponent},
  {path: 'pages', component: PagesAnalysisComponent},
  {path: 'area', component: AreaAnalysisComponent},
  {path: '', redirectTo: 'flow', pathMatch: 'full'},
  {path: '**', redirectTo: 'flow'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalysisRoutingModule {
}
