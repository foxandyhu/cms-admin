import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../../base-component';
import {SmsProviderService} from '../../service/sms-provider-service';
import {NbDialogService} from '@nebular/theme';
import {SmsProviderAddComponent} from './provider-add/provider-add.component';
import {SmsProviderDetailComponent} from './provider-detail/provider-detail.component';

@Component({
  selector: 'ngx-sms-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss'],
})
export class SmsProviderComponent extends BaseComponent implements OnInit {

  constructor(private smsProviderService: SmsProviderService,
              protected injector: Injector, private dialogService: NbDialogService) {
    super(smsProviderService, injector);
  }

  ngOnInit() {
    this.getPager(1);
  }

  /**
   * 显示添加短信服务商弹框
   */
  showAddProvider() {
    const ref = this.dialogService.open(SmsProviderAddComponent);
    ref.onClose.subscribe(result => {
      if (result) {
        this.smsProviderService.saveData(result).then(() => {
          this.getPager(1);
        });
      }
    });
  }

  /**
   * 显示编辑短信服务商弹框
   */
  showEditProvider(id: string) {
    this.smsProviderService.getData(id).then(data => {
      const ref = this.dialogService.open(SmsProviderDetailComponent);
      ref.componentRef.instance.smsProvider = data;
      ref.onClose.subscribe(result => {
        if (result) {
          this.smsProviderService.editData(result).then(() => {
            this.getPager(1);
          });
        }
      });
    });
  }
}
