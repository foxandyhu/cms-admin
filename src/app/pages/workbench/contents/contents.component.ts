import {Component, OnDestroy} from '@angular/core';
import {ProgressInfo, StatsProgressBarService} from '../../../@core/data/stats-progress-bar.service';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'ngx-contents-statistics',
  styleUrls: [ './contents.component.scss'],
  templateUrl: './contents.component.html',
})
export class ContentsComponent implements OnDestroy {

  private alive = true;

  progressInfoData: ProgressInfo[];

  constructor(private statsProgressBarService: StatsProgressBarService) {
    this.statsProgressBarService.getProgressInfoData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.progressInfoData = data;
      });
  }

  ngOnDestroy() {
    this.alive = true;
  }
}
