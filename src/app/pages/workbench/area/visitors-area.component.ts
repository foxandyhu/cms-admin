import {Component, OnDestroy} from '@angular/core';
import {NbMediaBreakpoint, NbMediaBreakpointsService, NbThemeService} from '@nebular/theme';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'ngx-visitors-area',
  styleUrls: ['./visitors-area.component.scss'],
  template: `
    <nb-card [size]="breakpoint.width >= breakpoints.md ? 'medium' : 'xxlarge'">
      <nb-card-header>来访地区</nb-card-header>
      <nb-card-body>
        <ngx-visitors-area-map></ngx-visitors-area-map>
      </nb-card-body>
    </nb-card>
  `,
})
export class VisitorsAreaComponent implements OnDestroy {

  breakpoint: NbMediaBreakpoint = {name: '', width: 0};
  breakpoints: any;
  private alive = true;

  constructor(private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService) {
    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
