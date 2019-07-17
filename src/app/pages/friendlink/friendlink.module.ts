import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FriendlinkRoutingModule} from './friendlink-routing.module';
import {FriendlinkComponent} from './friendlink.component';
import {ThemeModule} from '../../@theme/theme.module';
import {FriendLinkService} from './service/friendlink-service';
import {FriendLinkTypeService} from './service/friendlink-type-service';
import {FriendLinkAddComponent} from './friendlink-add/friendlink-add.component';
import {FriendLinkDetailComponent} from './friendlink-detail/friendlink-detail.component';
import {NbDialogModule} from '@nebular/theme';
import {FriendLinkTypeComponent} from './friendlink-type.component';
import {FriendLinkTypeAddComponent} from './friendlink-type-add/friendlink-type-add.component';
import {FriendLinkTypeDetailComponent} from './friendlink-type-detail/friendlink-type-detail.component';

@NgModule({
  declarations: [FriendlinkComponent, FriendLinkAddComponent, FriendLinkDetailComponent,
    FriendLinkTypeComponent, FriendLinkTypeAddComponent, FriendLinkTypeDetailComponent],
  imports: [
    CommonModule,
    ThemeModule,
    FriendlinkRoutingModule,
    NbDialogModule.forChild(),
  ],
  entryComponents: [FriendLinkAddComponent, FriendLinkDetailComponent,
    FriendLinkTypeAddComponent, FriendLinkTypeDetailComponent],
  providers: [FriendLinkService, FriendLinkTypeService],
})
export class FriendlinkModule {
}
