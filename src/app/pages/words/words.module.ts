import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {WordsRoutingModule} from './words-routing.module';
import {ThemeModule} from '../../@theme/theme.module';
import {SensitiveComponent} from './sensitive/sensitive.component';
import {DictionaryService} from './service/dictionary-service';
import {DictionaryAddComponent} from './dictionary/dictionary-add/dictionary-add.component';
import {DictionaryDetailComponent} from './dictionary/dictionary-detail/dictionary-detail.component';
import {NbDialogModule} from '@nebular/theme';
import {SensitiveWordService} from './service/sensitiveword-service';
import {SensitiveAddComponent} from './sensitive/sensitive-add/sensitive-add.component';
import {SensitiveDetailComponent} from './sensitive/sensitive-detail/sensitive-detail.component';
import {SearchComponent} from './search/search.component';
import {SearchWordService} from './service/searchword-service';
import {ScoreGroupComponent} from './score/score-group.component';
import {ScoreGroupAddComponent} from './score/score-group-add/score-group-add.component';
import {ScoreGroupDetailComponent} from './score/score-group-detail/score-group-detail.component';
import {ScoreGroupService} from './service/score-group-service';
import {ScoreItemService} from './service/score-item-service';
import {ScoreItemComponent} from './score/score-item.component';
import {ScoreItemAddComponent} from './score/score-item-add/score-item-add.component';
import {ScoreItemDetailComponent} from './score/score-item-detail/score-item-detail.component';

@NgModule({
  declarations: [DictionaryComponent, SensitiveComponent, DictionaryAddComponent, DictionaryDetailComponent,
    SensitiveComponent, SensitiveAddComponent, SensitiveDetailComponent, SearchComponent,
    ScoreGroupComponent, ScoreGroupAddComponent, ScoreGroupDetailComponent,
    ScoreItemComponent, ScoreItemAddComponent, ScoreItemDetailComponent],
  imports: [
    CommonModule,
    ThemeModule,
    WordsRoutingModule,
    NbDialogModule.forChild(),
  ], providers: [DictionaryService, SearchWordService,
    SensitiveWordService, ScoreGroupService, ScoreItemService],
  entryComponents: [DictionaryAddComponent, DictionaryDetailComponent,
    SensitiveAddComponent, SensitiveDetailComponent, ScoreGroupAddComponent, ScoreGroupDetailComponent,
    ScoreItemAddComponent, ScoreItemDetailComponent],
})
export class WordsModule {
}
