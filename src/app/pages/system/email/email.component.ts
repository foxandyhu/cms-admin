import {Component, Injector, OnDestroy, OnInit} from '@angular/core';
import {BaseComponent} from '../../base-component';
import {EmailProviderService} from '../service/email-provider-service';
import {NbDialogRef, NbDialogService} from '@nebular/theme';
import {EmailProviderAddComponent} from './email-add/email-add.component';
import {EmailProviderDetailComponent} from './email-detail/email-detail.component';

@Component({
  selector: 'ngx-sys-email-provider',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailProviderComponent extends BaseComponent implements OnInit, OnDestroy {

  constructor(private emailProviderService: EmailProviderService, protected injector: Injector,
              private dialogService: NbDialogService) {
    super(emailProviderService, injector);
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
    this.dialog = this.dialogService.open(EmailProviderAddComponent);
    this.dialog.onClose.subscribe(result => {
      if (result) {
        this.emailProviderService.saveData(result).then(() => {
          this.getPager(1);
        });
      }
    });
  }

  /**
   * 显示编辑短信服务商弹框
   */
  showEditProvider(id: string) {
    this.emailProviderService.getData(id).then(data => {
      this.dialog = this.dialogService.open(EmailProviderDetailComponent);
      this.dialog.componentRef.instance.emailProvider = data;
      this.dialog.onClose.subscribe(result => {
        if (result) {
          this.emailProviderService.editData(result).then(() => {
            this.getPager(1);
          });
        }
      });
    });
  }
}
