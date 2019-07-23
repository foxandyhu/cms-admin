import {AfterViewChecked, Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../base-component';
import {AdService} from '../service/ad.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AdSpaceService} from '../service/ad-space.service';
import {DomSanitizer} from '@angular/platform-browser';
import {CommonService} from '../../common-service';
import * as moment from 'moment';

@Component({
  selector: 'ngx-ad-detail',
  templateUrl: './ad-detail.component.html',
  styleUrls: ['./ad-detail.component.scss'],
})
export class AdDetailComponent extends BaseComponent implements OnInit, AfterViewChecked {

  ad: any = {
    name: '', space: {id: ''}, type: '', clickCount: 0, displayCount: 0, enabled: false, startTime: '', endTime: '',
    attr: {},
  };  //  广告对象
  types: any = [{id: 1, name: '图片'}, {id: 2, name: '文字'}, {id: 3, name: '代码'}]; // 类型集合
  spaces: any; //  广告位
  private formId: string = 'adForm';     //   表单ID
  preview: any = '/assets/images/add_img.png';   //  预览
  date: string = '';    //  展示时间

  constructor(private adService: AdService, protected injector: Injector,
              private domSanitizer: DomSanitizer,
              private router: Router, private commonService: CommonService,
              private spaceService: AdSpaceService, private route: ActivatedRoute) {
    super(adService, injector);
  }

  ngOnInit() {
    this.loadData();
    this.getAllSpaces();
    this.initValiator();
  }

  ngAfterViewChecked(): void {
    const typeId = parseInt(this.ad.type, 0);
    if (typeId === 1) {
      this.formValid.addField('picUrl', {
        validators: {
          notEmpty: {message: '图片不能为空!'},
        },
      });
    } else if (typeId === 2) {
      this.formValid.addField('textTitle', {
        validators: {
          notEmpty: {message: '文字内容不能为空!'},
        },
      });
    } else if (typeId === 3) {
      this.formValid.addField('codeContent', {
        validators: {
          notEmpty: {message: '代码内容不能为空!'},
        },
      });
    }
  }

  /**
   * 加载数据
   */
  loadData() {
    this.route.paramMap.subscribe(params => {
      const adId = params.get('adId');
      this.adService.getData(adId).then(result => {
        this.ad = result;
        if (this.ad && this.ad.attr['pic_url']) {
          this.preview = this.ad.attr['pic_url'];
        }
        if (this.ad && this.ad.startTime) {
          this.date = moment(this.ad.startTime).format('YYYY-MM-DD');
          if (this.ad.endTime) {
            this.date += ' - ' + moment(this.ad.endTime).format('YYYY-MM-DD');
          }
        }
      });
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
  editAd() {
    if (this.isValidForm(this.formId)) {
      this.adService.editData(this.ad).then(result => {
        if (result === true) {
          this.toastUtil.showSuccess('编辑成功!');
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
    if (file) {
      this.preview = this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
      this.commonService.uploadFile(file).then(result => {
        this.ad.attr.pic_url = result;
      });
    }
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
   * 颜色选择
   * @param color
   */
  pickColor(color) {
    this.ad.attr.text_color = color;
  }
}
