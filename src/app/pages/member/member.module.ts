import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThemeModule} from '../../@theme/theme.module';

import {MemberRoutingModule} from './member-routing.module';
import {MemberComponent} from './member.component';
import {GroupComponent} from './group/group.component';

@NgModule({
  declarations: [MemberComponent, GroupComponent],
  imports: [
    ThemeModule,
    CommonModule,
    MemberRoutingModule,
  ],
})
export class MemberModule {
}
