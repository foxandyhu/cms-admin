import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {BaseComponent} from '../../base-component';
import {TemplateService} from '../service/template-service';
import {NbDialogService} from '@nebular/theme';
import {TemplateDirAddComponent} from './template-dir-add/template-dir-add.component';
import {TemplateDetailComponent} from './template-detail/template-detail.component';

@Component({
  selector: 'ngx-system-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent extends BaseComponent implements OnInit {

  constructor(private templateService: TemplateService, protected injector: Injector,
              private dialogService: NbDialogService) {
    super(templateService, injector);
  }

  nodes: any;     // tree 数据集合
  currntNode: any;    //  tree 节点对象
  @ViewChild('resTree') resTree: any;

  ngOnInit() {
  }

  getTemplate(data) {
    this.selectItems = new Array<any>();
    this.nodes = data;
  }

  /**
   * 显示当前路径
   * @param data
   */
  getCurrentPath(data) {
    this.currntNode = data;
  }

  /**
   * 新建目录
   */
  mkdir() {
    this.dialogService.open(TemplateDirAddComponent).onClose.subscribe(name => {
      if (name) {
        this.templateService.mkdir(this.currntNode.path, name).then(() => {
          this.toastUtil.showSuccess('新建目录成功!');
          this.resTree.loadData(this.currntNode, this.currntNode.path);
        });
      }
    });
  }

  /**
   * 上传文件
   * @param event
   */
  fileChange(event) {
    const file = event.currentTarget.files[0];
    if (file) {
      this.templateService.uploadFile(this.currntNode.path, file).then(() => {
        this.toastUtil.showSuccess('上传成功!');
        this.resTree.loadData(this.currntNode, this.currntNode.path);
      });
    }
  }

  /**
   * 进入指定目录
   * @param path
   */
  cdDir(path: string) {
    this.resTree.choosePathToLoadData(path);
  }

  delRes(path) {
    super.del(path).then(result => {
      if (result) {
        this.resTree.loadData(this.currntNode, this.currntNode.path);
      }
    });
  }

  delMutilRes() {
    super.delMutil().then(result => {
      if (result) {
        this.resTree.loadData(this.currntNode, this.currntNode.path);
      }
    });
  }

  /**
   * 弹出编辑模版页面
   */
  showEditTemplate(path) {
    const ref = this.dialogService.open(TemplateDetailComponent);
    this.templateService.getData(path).then(result => {
      ref.componentRef.instance.content = result;
    });
    ref.onClose.subscribe(result => {
      if (result) {
        this.templateService.editData({path: path, content: result}).then(() => {
          this.toastUtil.showSuccess('保存成功!');
        });
      }
    });
  }
}
