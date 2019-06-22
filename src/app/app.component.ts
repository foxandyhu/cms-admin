import {Component, OnInit} from '@angular/core';
import {AuthService} from './@core/auth/auth.service';

@Component({
  selector: 'ngx-app',
  template: `
    <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }
}
