import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../../base-component';
import {SpecialTopicService} from '../../service/topic-service';
import {Router} from '@angular/router';
import {CommonService} from '../../../common-service';
import {DomSanitizer} from '@angular/platform-browser';
import {Constant} from '../../../../core/constant';

@Component({
  selector: 'ngx-content-topic-add',
  templateUrl: './topic-add.component.html',
  styleUrls: ['./topic-add.component.scss'],
})
export class SpecialTopicAddComponent extends BaseComponent implements OnInit {

  constructor(private topicService: SpecialTopicService, protected injector: Injector, private router: Router,
              private commonService: CommonService, private domSanitizer: DomSanitizer) {
    super(topicService, injector);
  }

  topic: any = {
    name: '', shortName: '', keywords: '', remark: '', titleImg: '',
    contentImg: '', tplPc: '', tplMobile: '', recommend: true,
  }; //  专题
  previewTitle: any;   //  预览
  previewContent: any;   //  预览
  pcTemplates: any;    //  pc模版
  mobileTemplates: any;  //  手机模版
  formId: string = 'topicForm';

  ngOnInit() {
    this.previewTitle = Constant.DEFAULT_PIC;
    this.previewContent = Constant.DEFAULT_PIC;
    this.initValiator();
    this.topicService.getSpecialTopicTemplates().then(result => {
      if (result) {
        this.pcTemplates = result['pc'];
        this.mobileTemplates = result['mobile'];
      }
    });
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
      tplPc: {
        validators: {
          notEmpty: {message: '请选择PC模版!'},
        },
      },
      tplMobile: {
        validators: {
          notEmpty: {message: '请选择手机模版!'},
        },
      },
    });
  }

  /**
   * 图片上传
   * @param event
   */
  fileChange(event, target) {
    const file = event.currentTarget.files[0];
    if (file) {
      const img = this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
      if (target === 'title') {
        this.previewTitle = img;
      } else {
        this.previewContent = img;
      }
      this.commonService.uploadFile(file).then(result => {
        if (target === 'title') {
          this.topic.titleImg = result;
        } else {
          this.topic.contentImg = result;
        }
      });
    }
  }

  /**
   * 保存主体
   */
  saveTopic() {
    if (this.isValidForm(this.formId)) {
      this.topicService.saveData(this.topic).then(() => {
        this.toastUtil.showSuccess('新增成功!');
        this.router.navigate(['/content/topic']);
      });
    }
  }
}
