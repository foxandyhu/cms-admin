import { Component, OnDestroy, ViewChild } from '@angular/core';
import { SiteChartComponent } from './charts/site-chart.component';
import { WordsChartComponent } from './charts/words-chart.component';

@Component({
  selector: 'ngx-visitors-words',
  styleUrls: ['./visitors-words.component.scss'],
  templateUrl: './visitors-words.component.html',
})
export class VisitorsWordsComponent implements OnDestroy {

  @ViewChild('siteChart') siteChart: SiteChartComponent;
  @ViewChild('wordsChart') wordsChart: WordsChartComponent;

  changeTab(selectedTab) {
    if (selectedTab.tabTitle === '搜索词') {
    } else {
    }
  }

  ngOnDestroy() {
  }
}
