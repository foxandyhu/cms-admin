import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LetterComponent} from './letter/letter.component';
import {CommentComponent} from './comment/comment.component';
import {GuestbookComponent} from './guestbook/guestbook.component';

const routes: Routes = [
  {path: 'letter', component: LetterComponent},
  {path: 'comment', component: CommentComponent},
  {path: 'guestbook', component: GuestbookComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: '**', redirectTo: 'list'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageRoutingModule {
}
