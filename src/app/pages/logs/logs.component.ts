import {Component, Injector, OnInit} from '@angular/core';
import {SysLogsService} from './service/sys-logs.service';
import {BaseComponent} from '../base-component';

@Component({
  selector: 'ngx-logs',
  templateUrl: './logs.component.html',
})
export class LogsComponent extends BaseComponent implements OnInit {

  constructor(private sysLogsService: SysLogsService, protected injector: Injector) {
    super(sysLogsService, injector);
  }

  category: string;

  ngOnInit() {
    this.getPager(1);
  }

  /**
   * 根据不同日志类型查询
   */
  changeCategory(category: string) {
    this.setQueryParams('category', category);
    this.getPager(1);
  }
}
