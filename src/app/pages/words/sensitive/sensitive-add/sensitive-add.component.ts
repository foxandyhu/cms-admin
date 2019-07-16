import {Component, Injector, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {BaseComponent} from '../../../base-component';

@Component({
  selector: 'ngx-words-sensitive-add',
  templateUrl: './sensitive-add.component.html',
  styleUrls: ['./sensitive-add.component.scss'],
})
export class SensitiveAddComponent extends BaseComponent implements OnInit {

  sensitive: any = {word: '', replace: ''};  //  敏感词
  private formId: string = 'sensitiveForm'; //   表单ID

  constructor(protected injector: Injector, private ref: NbDialogRef<SensitiveAddComponent>) {
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
      word: {
        validators: {
          notEmpty: {message: '敏感词不能为空!'},
        },
      },
    });
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    if (this.isValidForm(this.formId)) {
      this.ref.close(this.sensitive);
    }
  }
}
