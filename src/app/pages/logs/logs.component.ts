import {Component, OnInit} from '@angular/core';
import {SysLogsService} from './service/sys-logs.service';
import {ModalUtil, ToastUtil} from '../../@theme/components';

@Component({
  selector: 'ngx-logs',
  templateUrl: './logs.component.html',
})
export class LogsComponent implements OnInit {

  constructor(private sysLogsService: SysLogsService, private toastUtil: ToastUtil, private modalUtil: ModalUtil) {
  }

  pager: any;
  isSelectAll: boolean = false;
  selectItems: Array<number> = new Array<number>();
  category: string;

  ngOnInit() {
    this.getAllSysLogs(1);
  }

  /**
   * 日志列表
   */
  getAllSysLogs(pageNo: number) {
    const result: Promise<any> = this.sysLogsService.getAllSysLogs(this.category, pageNo);
    result.then(data => {
      this.pager = data;
      this.isSelectAll = false;
      this.selectItems = new Array<number>();
    });
  }

  /**
   * 分页事件
   * @param pageNo
   */
  changeSysLogsPager(pageNo: number) {
    this.getAllSysLogs(pageNo);
  }

  /**
   * 删除系统日志
   * @param id
   */
  delSysLog(id) {
    const ids = new Array();
    ids.push(id);
    this.doDelSysLog(ids);
  }

  /**
   * 批量删除系统日志
   */
  delMutilSysLog() {
    if (this.selectItems.length > 0) {
      this.doDelSysLog(this.selectItems);
    } else {
      this.toastUtil.showWarning('请选择要删除的数据!');
    }
  }

  private doDelSysLog(ids: Array<number>) {
    this.modalUtil.confirm('删除提示', '您确认要删除该数据吗?').then(result => {
      if (result) {
        this.sysLogsService.delSysLogs(ids).then(() => {
          this.toastUtil.showSuccess('删除成功!');
          this.getAllSysLogs(this.pager.pageNo);
        });
      }
    });
  }

  /**
   * 全选事件
   * @param isSelectAll
   */
  changeAllBox(isSelectAll) {
    this.isSelectAll = isSelectAll;
    if (isSelectAll) {
      const items: Array<any> = this.pager.data;
      items.forEach((item, index, array) => {
        if (this.selectItems.indexOf(item.id) < 0) {
          this.selectItems.push(item.id);
        }
      });
    } else {
      this.selectItems.splice(0, this.selectItems.length);
    }
  }

  /**
   * 单个复选框选择事件
   */
  changeBox(isSelect, id) {
    if (isSelect) {
      if (this.selectItems.indexOf(id) < 0) {
        this.selectItems.push(id);
      }
    } else {
      const index = this.selectItems.indexOf(id);
      if (index >= 0) {
        this.selectItems.splice(index, 1);
      }
    }
  }

  /**
   * 根据不同日志类型查询
   */
  changeCategory(category: string) {
    this.category = category;
    this.getAllSysLogs(1);
  }
}
