import {Component, OnInit} from '@angular/core';
import {AnalyticsService} from './@core/utils/analytics.service';
import {AuthService} from './@core/auth/auth.service';

@Component({
  selector: 'ngx-app',
  template: `
    <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }
}
