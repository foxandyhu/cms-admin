import {Component, Injector, OnDestroy, OnInit} from '@angular/core';
import {BaseComponent} from '../../../base-component';
import {SmsProviderService} from '../../service/sms-provider-service';
import {NbDialogRef, NbDialogService} from '@nebular/theme';
import {SmsProviderAddComponent} from './provider-add/provider-add.component';
import {SmsProviderDetailComponent} from './provider-detail/provider-detail.component';

@Component({
  selector: 'ngx-sms-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss'],
})
export class SmsProviderComponent extends BaseComponent implements OnInit, OnDestroy {

  constructor(private smsProviderService: SmsProviderService,
              protected injector: Injector, private dialogService: NbDialogService) {
    super(smsProviderService, injector);
  }

  private dialog: NbDialogRef<any>;

  ngOnInit() {
    this.getPager(1);
  }

  ngOnDestroy(): void {
    if (this.dialog) {
      this.dialog.close();
    }
  }

  /**
   * 显示添加短信服务商弹框
   */
  showAddProvider() {
    this.dialog = this.dialogService.open(SmsProviderAddComponent);
    this.dialog.onClose.subscribe(result => {
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
      this.dialog = this.dialogService.open(SmsProviderDetailComponent);
      this.dialog.componentRef.instance.smsProvider = data;
      this.dialog.onClose.subscribe(result => {
        if (result) {
          this.smsProviderService.editData(result).then(() => {
            this.getPager(1);
          });
        }
      });
    });
  }
}
