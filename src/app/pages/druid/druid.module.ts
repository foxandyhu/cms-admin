import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DruidRoutingModule} from './druid-routing.module';
import {DruidComponent} from './druid.component';
import {ThemeModule} from '../../@theme/theme.module';

@NgModule({
  declarations: [DruidComponent],
  imports: [
    ThemeModule,
    CommonModule,
    DruidRoutingModule,
  ],
})
export class DruidModule {
}
