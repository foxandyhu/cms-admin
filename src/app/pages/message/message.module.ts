import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MessageRoutingModule} from './message-routing.module';
import {ThemeModule} from '../../@theme/theme.module';
import { LetterComponent } from './letter/letter.component';
import {CommentComponent} from './comment/comment.component';
import {GuestbookComponent} from './guestbook/guestbook.component';

@NgModule({
  declarations: [LetterComponent, CommentComponent, GuestbookComponent],
  imports: [
    CommonModule,
    ThemeModule,
    MessageRoutingModule,
  ],
})
export class MessageModule {
}
