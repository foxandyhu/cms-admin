import {Component, OnInit} from '@angular/core';
import {AnalysisService} from '../analysis/service/analysis-service';

@Component({
  selector: 'ngx-workbench',
  templateUrl: './workbench.component.html',
})
export class WorkbenchComponent implements OnInit {

  constructor(private analysisService: AnalysisService) {
  }

  clickTops: any;
  commentTops: any;
  members: any;
  comments: any;
  guestBooks: any;

  ngOnInit(): void {
    this.initStatisticLatest();
  }

  /**
   * 最新统计
   */
  initStatisticLatest() {
    this.analysisService.getStatisticLatest().then(result => {
      if (result) {
        this.clickTops = result['clickTops'];
        this.commentTops = result['commentTops'];
        this.members = result['members'];
        this.comments = result['comments'];
        this.guestBooks = result['guestBooks'];
      }
    });
  }

}
