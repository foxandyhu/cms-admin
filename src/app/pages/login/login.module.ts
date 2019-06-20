import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {ThemeModule} from '../../@theme/theme.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    ThemeModule,
  ],
})
export class LoginModule {

}
