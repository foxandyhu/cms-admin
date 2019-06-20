import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionaryComponent } from './dictionary/dictionary.component';
import {DataRoutingModule} from './data-routing.module';
import {ThemeModule} from '../../@theme/theme.module';
import { SensitiveComponent } from './sensitive/sensitive.component';
import { SearchComponent } from './search/search.component';
import { ScoreGroupComponent } from './score-group/score-group.component';

@NgModule({
  declarations: [DictionaryComponent, SensitiveComponent, SearchComponent, ScoreGroupComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DataRoutingModule,
  ],
})
export class DataModule { }
