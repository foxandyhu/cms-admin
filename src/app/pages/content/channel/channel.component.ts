import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../base-component';
import {ChannelService} from '../service/channel-service';
import {NbDialogService} from '@nebular/theme';
import {ChannelAddComponent} from './channel-add/channel-add.component';
import {ChannelDetailComponent} from './channel-detail/channel-detail.component';
import {ModelService} from '../service/model-service';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'ngx-content-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss'],
})
export class ChannelComponent extends BaseComponent implements OnInit {

  constructor(private channelService: ChannelService, protected injector: Injector,
              private modelService: ModelService,
              private dialogService: NbDialogService) {
    super(channelService, injector);
  }

  ngOnInit() {
    this.getPager(1);
  }

  /**
   * 显示添加栏目框
   */
  showAddChannel() {
    const ref = this.dialogService.open(ChannelAddComponent);
    ref.onClose.subscribe(result => {
      if (result) {
        this.channelService.saveData(result).then(() => {
          this.getPager(1);
        });
      }
    });
    this.channelService.getAllChannels().then(result => {
      ref.componentRef.instance.channels = result;
    });
    this.modelService.getAllModels().then(result => {
      ref.componentRef.instance.models = result;
    });
  }

  /**
   * 显示编辑栏目框
   * @param id
   */
  showEditChannel(id: string) {
    const ref = this.dialogService.open(ChannelDetailComponent);
    ref.onClose.subscribe(result => {
      if (result) {
        this.channelService.editData(result).then(() => {
          this.getPager(1);
        });
      }
    });
    const arr = [this.channelService.getData(id).then(result => {
      ref.componentRef.instance.channel = result;
      return Promise.resolve(true);
    }), this.modelService.getAllModels().then(result => {
      ref.componentRef.instance.models = result;
      return Promise.resolve(true);
    }), this.channelService.getAllChannels().then(result => {
      ref.componentRef.instance.channels = result;
      return Promise.resolve(true);
    })];
    const obSer = forkJoin(arr);
    obSer.subscribe(() => {
      ref.componentRef.instance.modelChange();
    });
  }

  /**
   * 排序 isUp 为true标识上移 false下移
   * @param id
   * @param isUp
   */
  sort(id: string, isUp: boolean) {
    this.list.forEach((item, index, array) => {
      if (item.id === id) {
        let upItemId = null;
        let downItemId = null;
        if (isUp === true) {
          const preItem = array[index - 1];
          if (preItem) {
            upItemId = id;
            downItemId = preItem.id;
          }
        } else {
          const nextItem = array[index + 1];
          if (nextItem) {
            upItemId = nextItem.id;
            downItemId = id;
          }
        }
        if (upItemId && downItemId) {
          this.channelService.sortChannel(upItemId, downItemId).then(() => {
            this.getPager(1);
          });
        }
      }
    });
  }
}
