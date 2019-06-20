import {AfterViewInit, Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, AfterViewInit {

  constructor(private render2: Renderer2) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const spinner = this.render2.selectRootElement("#nb-global-spinner");
    spinner.remove();
  }
}
