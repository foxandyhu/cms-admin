import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {ThemeModule} from '../../@theme/theme.module';
import {UserService} from '../../services/user/users.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    ThemeModule,
  ],
  providers: [UserService],
})
export class LoginModule {

}
