import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../base-component';
import {AdService} from '../service/ad.service';
import {AdSpaceService} from '../service/ad-space.service';
import {Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {CommonService} from '../../common-service';

declare var jQuery: any;

@Component({
  selector: 'ngx-ad-add',
  templateUrl: './ad-add.component.html',
  styleUrls: ['./ad-add.component.scss'],
})
export class AdAddComponent extends BaseComponent implements OnInit {

  ad: any = {
    name: '', space: {id: ''}, type: '1', clickCount: 0, displayCount: 0, enabled: false, startTime: '', endTime: '',
    attr: {},
  };  //  广告对象
  types: any = [{id: 1, name: '图片'}, {id: 2, name: '文字'}, {id: 3, name: '代码'}]; // 类型集合
  spaces: any; //  广告位
  private formId: string = 'adForm';     //   表单ID
  preview: any = '/assets/images/add_img.png';   //  预览

  constructor(private adService: AdService, private spaceService: AdSpaceService,
              protected injector: Injector, private domSanitizer: DomSanitizer,
              private router: Router, private commonService: CommonService) {
    super(adService, injector);
  }

  ngOnInit() {
    this.initValiator();
    this.getAllSpaces();
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
      spaceId: {
        validators: {
          notEmpty: {message: '请选择广告位!'},
        },
      },
      clickCount: {
        validators: {
          notEmpty: {message: '点击率不能为空!'},
          digits: {min: 0, message: '点击率最小为0!'},
        },
      },
      displayCount: {
        validators: {
          notEmpty: {message: '展示次数不能为空!'},
          digits: {min: 0, message: '展示次数最小为0!'},
        },
      },
    });
  }

  /**
   * 广告位
   */
  getAllSpaces() {
    this.spaceService.getAllSpaces().then(result => {
      this.spaces = result;
    });
  }

  /**
   * 保存广告信息
   */
  saveAd() {
    if (this.isValidForm(this.formId)) {
      this.adService.saveData(this.ad).then(result => {
        if (result === true) {
          this.toastUtil.showSuccess('新增成功!');
          this.router.navigate(['/ad/list']);
        }
      });
    }
  }

  /**
   * 广告图片上传
   * @param event
   */
  adFileChange(event) {
    const file = event.currentTarget.files[0];
    this.preview = this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
    this.commonService.uploadFile(file).then(result => {
      this.ad.attr.pic_url = result;
    });
  }

  /**
   * 日期改变
   * @param event
   */
  changeDate(event) {
    if (event.start) {
      this.ad.startTime = event.start.format('YYYY-MM-DD');
    }
    if (event.end) {
      this.ad.endTime = event.end.format('YYYY-MM-DD');
    }
  }

  /**
   * 类型选择
   * @param type
   */
  changeType(type) {
    if (type === 1) {
      jQuery('#' + this.formId).bootstrapValidator('addField', jQuery('#picHref'));
      console.log(2);
    }
  }
}
