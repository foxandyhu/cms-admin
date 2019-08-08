import {Component, Injector, OnDestroy, OnInit} from '@angular/core';
import {BaseComponent} from '../../base-component';
import {ChannelService} from '../service/channel-service';
import {NbDialogRef, NbDialogService} from '@nebular/theme';
import {ChannelAddComponent} from './channel-add/channel-add.component';
import {ChannelDetailComponent} from './channel-detail/channel-detail.component';
import {ModelService} from '../service/model-service';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'ngx-content-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss'],
})
export class ChannelComponent extends BaseComponent implements OnInit, OnDestroy {

  constructor(private channelService: ChannelService, protected injector: Injector,
              private modelService: ModelService,
              private dialogService: NbDialogService) {
    super(channelService, injector);
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
   * 显示添加栏目框
   */
  showAddChannel() {
    this.dialog = this.dialogService.open(ChannelAddComponent);
    this.dialog.onClose.subscribe(result => {
      if (result) {
        this.channelService.saveData(result).then(() => {
          this.getPager(1);
        });
      }
    });
    this.channelService.getAllChannels().then(result => {
      this.dialog.componentRef.instance.channels = result;
    });
    this.modelService.getAllModels().then(result => {
      this.dialog.componentRef.instance.models = result;
    });
  }

  /**
   * 显示编辑栏目框
   * @param id
   */
  showEditChannel(id: string) {
    this.dialog = this.dialogService.open(ChannelDetailComponent);
    this.dialog.onClose.subscribe(result => {
      if (result) {
        this.channelService.editData(result).then(() => {
          this.getPager(1);
        });
      }
    });
    const arr = [this.channelService.getData(id).then(result => {
      this.dialog.componentRef.instance.channel = result;
      return Promise.resolve(true);
    }), this.modelService.getAllModels().then(result => {
      this.dialog.componentRef.instance.models = result;
      return Promise.resolve(true);
    }), this.channelService.getAllChannels().then(result => {
      this.dialog.componentRef.instance.channels = result;
      return Promise.resolve(true);
    })];
    const obSer = forkJoin(arr);
    obSer.subscribe(() => {
      this.dialog.componentRef.instance.modelChange();
    });
  }
}
