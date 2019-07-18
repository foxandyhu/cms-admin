import {Component, Injector, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {BaseComponent} from '../../base-component';

@Component({
  selector: 'ngx-ad-space-detail',
  templateUrl: './space-detail.component.html',
  styleUrls: ['./space-detail.component.scss'],
})
export class SpaceDetailComponent extends BaseComponent implements OnInit {

  adSpace: any = {name: '', remark: '', enabled: false};  //  广告位
  private formId: string = 'adSpaceForm'; //   表单ID

  constructor(private ref: NbDialogRef<SpaceDetailComponent>, protected injector: Injector) {
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
          notEmpty: {message: '广告位名称不能为空!'},
        },
      },
    });
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    if (this.isValidForm(this.formId)) {
      this.ref.close(this.adSpace);
    }
  }

}
