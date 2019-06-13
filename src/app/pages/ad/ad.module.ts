import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdRoutingModule } from './ad-routing.module';
import { AdComponent } from './ad.component';
import {ThemeModule} from '../../@theme/theme.module';

@NgModule({
  declarations: [AdComponent],
  imports: [
    CommonModule,
    ThemeModule,
    AdRoutingModule,
  ],
})
export class AdModule { }
