import {AfterViewInit, Component, EventEmitter, Injector, OnInit, Output} from '@angular/core';
import {BaseComponent} from '../../../base-component';
import {ResourceService} from '../../service/resource-service';
import '@ztree/ztree_v3';

declare var jQuery: any;

@Component({
  selector: 'ngx-system-res-tree',
  templateUrl: './res-tree.component.html',
  styleUrls: ['./res-tree.component.scss'],
})
export class ResTreeComponent extends BaseComponent implements OnInit, AfterViewInit {

  private static component: ResTreeComponent;
  private tree: any;
  private setting = {
    check: {enable: false}, data: {keep: {parent: true}, simpleData: {enable: true}},
    callback: {
      onClick: function (event, treeId, treeNode) {
        if (treeNode.isDir) {
          if (!treeNode.open) {
            ResTreeComponent.component.loadData(treeNode, treeNode.path);
          }
        }
      },
    },
  };
  rootNode = [{id: 1, isDir: true, open: true, path: '/', name: '根目录', children: []}];
  @Output() private showData = new EventEmitter(true);
  @Output() private node = new EventEmitter(true);

  constructor(private resourceService: ResourceService, protected injector: Injector) {
    super(resourceService, injector);
  }

  ngOnInit() {
    ResTreeComponent.component = this;
    jQuery.fn.zTree.init(jQuery('#resourceTree'), this.setting, this.rootNode);
    this.tree = jQuery.fn.zTree.getZTreeObj('resourceTree');
  }

  ngAfterViewInit(): void {
    const root = this.tree.getNodes();
    this.loadData(root[0], '/');
  }

  /**
   * 指定目录路径加载
   * @param path
   */
  choosePathToLoadData(path: string) {
    const nodes = this.tree.getNodes();
    const node = this.getNodeByPath(nodes, path);
    if (node) {
      this.loadData(node, node.path);
    }
  }

  /**
   * 获得指定路径的Node
   * @param nodes
   * @param path
   */
  private getNodeByPath(nodes: any, path: string): any {
    if (nodes) {
      for (const node of nodes) {
        if (node.path === path) {
          return node;
        }
        const result = this.getNodeByPath(node.children, path);
        if (result) {
          return result;
        }
      }
    }
    return null;
  }

  /**
   * 加载资源
   * @param path
   */
  loadData(parentNode: any, path: string) {
    this.resourceService.getResource(path).then(result => {
      this.setData(parentNode, result);
    });
  }

  /**
   * 设置数据
   * @param data
   */
  setData(parentNode: any, data: any) {
    this.tree.removeChildNodes(parentNode);
    this.tree.addNodes(parentNode, data);
    this.showData.emit(data);
    this.node.emit(parentNode);
  }
}
