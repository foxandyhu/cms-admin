import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../base-component';
import {CompanyService} from '../service/company-service';
import {CommonService} from '../../common-service';
import {DomSanitizer} from '@angular/platform-browser';
import {forkJoin} from 'rxjs';
import {DictionaryService} from '../../words/service/dictionary-service';
import '../../../@theme/components/editor.loader';
import {Constant} from '../../../core/constant';

@Component({
  selector: 'ngx-system-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent extends BaseComponent implements OnInit {

  constructor(private companyService: CompanyService, protected injector: Injector,
              private commonService: CommonService, private domSanitizer: DomSanitizer,
              private dictionaryService: DictionaryService) {
    super(companyService, injector);
    CompanyComponent.component = this;
  }

  private static component: CompanyComponent;
  preview: any;   //  预览
  company: any = {
    name: '', scale: '', nature: '', industry: '',
    address: '', phone: '', email: '', weixin: '', remark: '',
  }; //  企业信息
  scales: any;   //  企业规模
  natures: any;  //  企业性质
  industrys: any;  //  企业所属行业
  editParam = {
    height: 200, language: 'zh_CN', image_caption: true, paste_data_images: true,
    plugins: `link lists image code table colorpicker fullscreen help textcolor ` +
      `wordcount contextmenu codesample importcss media preview print textpattern tabfocus ` +
      `hr directionality imagetools autosave paste`,
    toolbar: 'codesample | bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft'
      + ' aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo '
      + '| link unlink image code | removeformat | h2 h4 | fullscreen preview paste',
    codesample_languages: [
      {text: 'JavaScript', value: 'javascript'},
      {text: 'HTML/XML', value: 'markup'},
      {text: 'CSS', value: 'css'},
      {text: 'TypeScript', value: 'typescript'},
      {text: 'Java', value: 'java'},
    ],
    imagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions',
    images_upload_handler: function (blobInfo, success, failure) {
      CompanyComponent.component.commonService.uploadContentFile(blobInfo.blob()).then(result => {
        if (result) {
          success(result.url);
        } else {
          failure('上传失败');
        }
      });
    },
  };

  ngOnInit() {
    this.preview = Constant.DEFAULT_PIC;
    const arr = [this.getScales(), this.getNatures(), this.getIndustrys()];
    const observable = forkJoin(arr);

    observable.subscribe(() => {
      this.companyService.getCompany().then(result => {
        if (result) {
          this.company = result;
          if (this.company.weixin) {
            this.preview = this.company.weixin;
          }
        }
      });
    });
  }

  /**
   * 获得企业规模
   */
  getScales(): Promise<any> {
    return this.dictionaryService.getDictionaryByType('scale').then(result => {
      this.scales = result;
      return Promise.resolve(result);
    });
  }

  /**
   * 获得企业性质
   */
  getNatures(): Promise<any> {
    return this.dictionaryService.getDictionaryByType('nature').then(result => {
      this.natures = result;
      return Promise.resolve(result);
    });
  }

  getIndustrys(): Promise<any> {
    return this.dictionaryService.getDictionaryByType('industry').then(result => {
      this.industrys = result;
      return Promise.resolve(result);
    });
  }

  /**
   * 编辑企业信息
   */
  editCompany() {
    this.companyService.editCompany(this.company).then(() => {
      this.toastUtil.showSuccess('保存成功!');
    });
  }

  /**
   * 微信图片上传
   * @param event
   */
  fileChange(event) {
    const file = event.currentTarget.files[0];
    if (file) {
      this.preview = this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
      this.commonService.uploadFile(file).then(result => {
        this.company.weixin = result;
      });
    }
  }
}
