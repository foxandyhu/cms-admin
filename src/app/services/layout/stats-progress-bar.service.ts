import {Injectable} from '@angular/core';
import {of as observableOf, Observable} from 'rxjs';

export class ProgressInfo {
  title: string;
  value: number;
  activeProgress: number;
  iconColor: string;
  icon: string;
}

@Injectable(({providedIn: 'root'}))
export class StatsProgressBarService {
  private progressInfoData: ProgressInfo[] = [
    {
      title: '内容发布数',
      value: 572900,
      activeProgress: 70,
      iconColor: 'primary',
      icon: 'nb-list',
    },
    {
      title: '评论数',
      value: 6378,
      activeProgress: 30,
      iconColor: 'success',
      icon: 'nb-compose',
    },
    {
      title: '留言数',
      value: 200,
      activeProgress: 55,
      iconColor: 'info',
      icon: 'nb-email',
    },
    {
      title: '会员注册数',
      value: 200,
      activeProgress: 55,
      iconColor: 'warning',
      icon: 'nb-person',
    },
  ];

  getProgressInfoData(): Observable<ProgressInfo[]> {
    return observableOf(this.progressInfoData);
  }
}
