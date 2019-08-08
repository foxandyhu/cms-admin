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

  private dialogAdd: NbDialogRef<any>;
  private dialogEdit: NbDialogRef<any>;

  ngOnInit() {
    this.getPager(1);
  }

  ngOnDestroy(): void {
    if (this.dialogAdd) {
      this.dialogAdd.close();
    }
    if (this.dialogEdit) {
      this.dialogEdit.close();
    }
  }


  /**
   * 显示添加栏目框
   */
  showAddChannel() {
    this.dialogAdd = this.dialogService.open(ChannelAddComponent);
    this.dialogAdd.onClose.subscribe(result => {
      if (result) {
        this.channelService.saveData(result).then(() => {
          this.getPager(1);
        });
      }
    });
    this.channelService.getAllChannels().then(result => {
      this.dialogAdd.componentRef.instance.channels = result;
    });
    this.modelService.getAllModels().then(result => {
      this.dialogAdd.componentRef.instance.models = result;
    });
  }

  /**
   * 显示编辑栏目框
   * @param id
   */
  showEditChannel(id: string) {
    this.dialogEdit = this.dialogService.open(ChannelDetailComponent);
    this.dialogEdit.onClose.subscribe(result => {
      if (result) {
        this.channelService.editData(result).then(() => {
          this.getPager(1);
        });
      }
    });
    const arr = [this.channelService.getData(id).then(result => {
      this.dialogEdit.componentRef.instance.channel = result;
      return Promise.resolve(true);
    }), this.modelService.getAllModels().then(result => {
      this.dialogEdit.componentRef.instance.models = result;
      return Promise.resolve(true);
    }), this.channelService.getAllChannels().then(result => {
      this.dialogEdit.componentRef.instance.channels = result;
      return Promise.resolve(true);
    })];
    const obSer = forkJoin(arr);
    obSer.subscribe(() => {
      this.dialogEdit.componentRef.instance.modelChange();
    });
  }
}
