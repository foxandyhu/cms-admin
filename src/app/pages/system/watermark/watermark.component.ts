import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../base-component';
import {CommonService} from '../../common-service';
import {DomSanitizer} from '@angular/platform-browser';
import {WatermarkConfigService} from '../service/watermark-config-service';

@Component({
  selector: 'ngx-system-watermark-config',
  templateUrl: './watermark.component.html',
  styleUrls: ['./watermark.component.scss'],
})
export class WatermarkConfigComponent extends BaseComponent implements OnInit {

  constructor(private watermarkService: WatermarkConfigService, protected injector: Injector,
              private commonService: CommonService, private domSanitizer: DomSanitizer) {
    super(watermarkService, injector);
  }

  formId: string = 'watermarkConfigForm';
  preview: any = '/assets/images/add_img.png';   //  预览
  watermarkConfig: any = {
    openWaterMark: '', imgWidth: '', imgHeight: '', img: '',
    text: '', size: '', color: '', alpha: '', pos: '0', offsetX: '', offsetY: '',
  };    //  水印配置

  poss: any = [{id: 0, name: '随机'}, {id: 1, name: '左上'}, {id: 2, name: '右上'}, {id: 3, name: '左下'},
    {id: 4, name: '右下'}, {id: 5, name: '居中'}];  //  位置

  ngOnInit() {
    this.initValiator();
    this.getWatermarkConfig();
  }

  /**
   * 初始化表单验证
   */
  initValiator() {
    this.initValidateForm(this.formId, {
      imgWidth: {
        validators: {
          digits: {message: '图片宽度最小为0！'},
        },
      },
      imgHeight: {
        validators: {
          digits: {message: '图片高度最小为0！'},
        },
      },
      size: {
        validators: {
          digits: {message: '文字大小最小为0！'},
        },
      },
      alpha: {
        validators: {
          digits: {message: '透明度最小为0！'},
        },
      },
      offsetX: {
        validators: {
          numeric: {message: 'x偏移量最小为0！'},
        },
      },
      offsetY: {
        validators: {
          numeric: {message: 'y偏移量最小为0！'},
        },
      },
    });
  }

  /**
   * 获取水印配置
   */
  getWatermarkConfig() {
    this.watermarkService.getWatermarkConfig().then(result => {
      if (result) {
        this.watermarkConfig = result;
        this.preview = this.watermarkConfig.img;
        this.watermarkConfig.openWaterMark = this.watermarkConfig.openWaterMark + '';
      }
    });
  }

  /**
   * 编辑水印配置
   */
  editWatermarkConfig() {
    this.watermarkService.editWatermarkConfig(this.watermarkConfig).then(() => {
      this.toastUtil.showSuccess('保存成功!');
    });
  }

  /**
   * 颜色选择
   * @param color
   */
  pickColor(color) {
    this.watermarkConfig.color = color;
  }

  /**
   * 水印图片上传
   * @param event
   */
  fileChange(event) {
    const file = event.currentTarget.files[0];
    this.preview = this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
    this.commonService.uploadFile(file).then(result => {
      this.watermarkConfig.img = result;
    });
  }
}
