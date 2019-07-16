import {Component, Injector, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {BaseComponent} from '../../../base-component';

@Component({
  selector: 'ngx-score-group-add',
  templateUrl: './score-group-add.component.html',
  styleUrls: ['./score-group-add.component.scss'],
})
export class ScoreGroupAddComponent extends BaseComponent implements OnInit {

  scoreGroup: any = {name: '', remark: ''};  //  评分组
  private formId: string = 'scoreGroupForm'; //   表单ID

  constructor(protected injector: Injector, private ref: NbDialogRef<ScoreGroupAddComponent>) {
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
          notEmpty: {message: '评分组名称不能为空!'},
        },
      },
    });
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    if (this.isValidForm(this.formId)) {
      this.ref.close(this.scoreGroup);
    }
  }
}
