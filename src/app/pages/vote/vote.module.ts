import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VoteRoutingModule} from './vote-routing.module';
import {VoteComponent} from './vote.component';
import {ThemeModule} from '../../@theme/theme.module';

@NgModule({
  declarations: [VoteComponent],
  imports: [
    CommonModule,
    ThemeModule,
    VoteRoutingModule,
  ],
})
export class VoteModule {
}
