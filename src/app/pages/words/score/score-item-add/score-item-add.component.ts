import {Component, Injector, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {BaseComponent} from '../../../base-component';
import {DomSanitizer} from '@angular/platform-browser';
import {ScoreItemService} from '../../service/score-item-service';
import {CommonService} from '../../../common-service';

@Component({
  selector: 'ngx-score-item-add',
  templateUrl: './score-item-add.component.html',
  styleUrls: ['./score-item-add.component.scss'],
})
export class ScoreItemAddComponent extends BaseComponent implements OnInit {

  scoreItem: any = {name: '', score: 0, url: '',  group: {id: 0}};  //  评分项
  scoreGroup: any = {name: '', id: ''};   //  评分组
  private formId: string = 'scoreItemForm'; //   表单ID
  preview: any = '/assets/images/add_img.png';   //  图像预览

  constructor(private scoreItemService: ScoreItemService, protected injector: Injector,
              private ref: NbDialogRef<ScoreItemAddComponent>,
              private domSanitizer: DomSanitizer, private commonService: CommonService) {
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
          notEmpty: {message: '评分项名称不能为空!'},
        },
      },
      score: {
        validators: {
          notEmpty: {message: '评分值不能为空!'},
          digits: {min: 0, message: '评分值最小为0!'},
        },
      },
    });
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    if (this.isValidForm(this.formId)) {
      this.scoreItem.group = this.scoreGroup;
      this.ref.close(this.scoreItem);
    }
  }

  /**
   * 头像上传
   * @param event
   */
  fileChange(event) {
    const file = event.currentTarget.files[0];
    if (file) {
      this.preview = this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
      this.commonService.uploadFile(file).then(result => {
        this.scoreItem.url = result;
      });
    }
  }
}
