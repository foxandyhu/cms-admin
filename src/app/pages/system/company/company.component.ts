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
  }

  preview: any;   //  预览
  company: any = {
    name: '', scale: '', nature: '', industry: '',
    address: '', phone: '', email: '', weixin: '', remark: '',
  }; //  企业信息
  scales: any;   //  企业规模
  natures: any;  //  企业性质
  industrys: any;  //  企业所属行业

  ngOnInit() {
    this.preview = Constant.DEFAULT_PIC;
    const arr = [this.getScales(), this.getNatures(), this.getIndustrys()];
    const observable = forkJoin(arr);

    observable.subscribe(() => {
      this.companyService.getCompany().then(result => {
        this.company = result;
        if (this.company.weixin) {
          this.preview = this.company.weixin;
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
