import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {WordsRoutingModule} from './words-routing.module';
import {ThemeModule} from '../../@theme/theme.module';
import {SensitiveComponent} from './sensitive/sensitive.component';
import {SearchComponent} from './search/search.component';
import {ScoreGroupComponent} from './score-group/score-group.component';
import {DictionaryService} from './service/dictionary-service';
import {DictionaryAddComponent} from './dictionary/dictionary-add/dictionary-add.component';
import {DictionaryDetailComponent} from './dictionary/dictionary-detail/dictionary-detail.component';
import {NbDialogModule} from '@nebular/theme';

@NgModule({
  declarations: [DictionaryComponent, SensitiveComponent, SearchComponent,
    ScoreGroupComponent, DictionaryAddComponent, DictionaryDetailComponent],
  imports: [
    CommonModule,
    ThemeModule,
    WordsRoutingModule,
    NbDialogModule.forChild(),
  ], providers: [DictionaryService],
  entryComponents: [DictionaryAddComponent, DictionaryDetailComponent],
})
export class WordsModule {
}
