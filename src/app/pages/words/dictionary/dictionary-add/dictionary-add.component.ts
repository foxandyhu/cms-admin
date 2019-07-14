import {Component, Injector, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {BaseComponent} from '../../../base-component';

@Component({
  selector: 'ngx-dictionary-add',
  templateUrl: './dictionary-add.component.html',
  styleUrls: ['./dictionary-add.component.scss'],
})
export class DictionaryAddComponent extends BaseComponent implements OnInit {

  dictionary: any = {name: '', value: '', type: ''};  //  数据字典类型
  private formId: string = 'dictionaryForm';     //   表单ID

  constructor(protected injector: Injector, private ref: NbDialogRef<DictionaryAddComponent>) {
    super(null, injector);
  }

  ngOnInit() {
    this.initValiator();
  }

  /**
   * 初始化表单验证
   */
  initValiator() {
    this.initValidateForm(this.formId, {
      name: {
        validators: {
          notEmpty: {message: '名称不能为空!'},
        },
      },
      value: {
        validators: {
          notEmpty: {message: '值不能为空!'},
        },
      },
      type: {
        validators: {
          notEmpty: {message: '类型不能为空!'},
        },
      },
    });
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    if (this.isValidForm(this.formId)) {
      this.ref.close(this.dictionary);
    }
  }
}
