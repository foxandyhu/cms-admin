import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const spinner = document.getElementById('nb-global-spinner');
    if (spinner) {
      spinner.remove();
    }
  }
}
