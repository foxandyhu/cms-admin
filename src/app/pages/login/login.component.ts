import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ModalUtil} from '../../@theme/components';
import {Router} from '@angular/router';
import {UserService} from '../user/service/users.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, AfterViewInit {

  constructor(private router: Router, private modalUtil: ModalUtil,
              private html: Renderer2, private userService: UserService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const spinner = document.getElementById('nb-global-spinner');
    if (spinner) {
      spinner.remove();
    }
  }

  @ViewChild('userName') userName: ElementRef;
  @ViewChild('password') password: ElementRef;

  submit() {
    if (!this.userName.nativeElement.value) {
      this.userName.nativeElement.focus();
      this.modalUtil.alert('', '用户名不能为空!');
      return;
    }
    if (!this.password.nativeElement.value) {
      this.password.nativeElement.focus();
      this.modalUtil.alert('', '密码不能为空!');
      return;
    }
    const result: Promise<boolean> = this.userService.login(this.userName.nativeElement.value,
      this.password.nativeElement.value);
    result.then(success => {
      if (success) {
        this.router.navigate(['/']);
      }
    });
  }
}
