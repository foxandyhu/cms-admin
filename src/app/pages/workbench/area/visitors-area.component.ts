import {Component, OnDestroy} from '@angular/core';
import {NbMediaBreakpoint, NbMediaBreakpointsService, NbThemeService} from '@nebular/theme';
import {takeWhile} from 'rxjs/operators';
import {CountryOrderService} from '../../../services/analysis/country-order.service';

@Component({
  selector: 'ngx-visitors-area',
  styleUrls: ['./visitors-area.component.scss'],
  template: `
    <nb-card [size]="breakpoint.width >= breakpoints.md ? 'medium' : 'xxlarge'">
      <nb-card-header>来访地区</nb-card-header>
      <nb-card-body>
        <ngx-visitors-area-map></ngx-visitors-area-map>
        <ngx-visitors-area-chart [countryName]="countryName"
                                 [data]="countryData"
                                 [labels]="countriesCategories"
                                 maxValue="20">
        </ngx-visitors-area-chart>
      </nb-card-body>
    </nb-card>
  `,
})
export class VisitorsAreaComponent implements OnDestroy {

  private alive = true;

  countryName = '';
  countryData: number[] = [];
  countriesCategories: string[];
  breakpoint: NbMediaBreakpoint = {name: '', width: 0};
  breakpoints: any;

  constructor(private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService,
              private countryOrderService: CountryOrderService) {
    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
    this.countryOrderService.getCountriesCategories()
      .pipe(takeWhile(() => this.alive))
      .subscribe((countriesCategories) => {
        this.countriesCategories = countriesCategories;
      });
  }

  selectCountryById(countryName: string) {
    this.countryName = countryName;

    this.countryOrderService.getCountriesCategoriesData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((countryData) => {
        this.countryData = countryData;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
