import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendlinkRoutingModule } from './friendlink-routing.module';
import { FriendlinkComponent } from './friendlink.component';
import {ThemeModule} from '../../@theme/theme.module';

@NgModule({
  declarations: [FriendlinkComponent],
  imports: [
    CommonModule,
    ThemeModule,
    FriendlinkRoutingModule,
  ],
})
export class FriendlinkModule { }
