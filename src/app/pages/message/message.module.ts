import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MessageRoutingModule} from './message-routing.module';
import {ThemeModule} from '../../@theme/theme.module';
import {LetterComponent} from './letter/letter.component';
import {CommentComponent} from './comment/comment.component';
import {GuestbookComponent} from './guestbook/guestbook.component';
import {LetterService} from './service/letter-service';
import {LetterAddComponent} from './letter/letter-add/letter-add.component';
import {LetterDetailComponent} from './letter/letter-detail/letter-detail.component';
import {MemberGroupService} from '../member/service/member-group-service';
import {EditorModule} from '@tinymce/tinymce-angular';
import {CommentService} from './service/comment-service';
import {DictionaryService} from '../words/service/dictionary-service';
import {GuestBookService} from './service/guestbook-service';

@NgModule({
  declarations: [LetterComponent, CommentComponent, GuestbookComponent,
    LetterAddComponent, LetterDetailComponent],
  imports: [
    CommonModule,
    ThemeModule,
    EditorModule,
    MessageRoutingModule,
  ],
  providers: [LetterService, MemberGroupService, CommentService, DictionaryService, GuestBookService],
})
export class MessageModule {
}
