import {Component, Injector, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {BaseComponent} from '../../../base-component';

@Component({
  selector: 'ngx-words-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.scss'],
})
export class SearchDetailComponent extends BaseComponent implements OnInit {

  search: any = {name: '', hitCount: 0, recommend: ''};  //  搜索词
  private formId: string = 'searchForm'; //   表单ID

  constructor(protected injector: Injector, private ref: NbDialogRef<SearchDetailComponent>) {
    super(null, injector);
  }

  ngOnInit() {
    this.initValidator();
  }

  /**
   * 初始化表单验证
   */
  initValidator() {
    this.initValidateForm(this.formId, {
      name: {
        validators: {
          notEmpty: {message: '搜索词不能为空!'},
        },
      },
      hitCount: {
        validators: {
          notEmpty: {message: '搜索次数不能为空!'},
          digits: {message: '搜索次数最小为0！'},
        },
      },
    });
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    if (this.isValidForm(this.formId)) {
      this.ref.close(this.search);
    }
  }

}
