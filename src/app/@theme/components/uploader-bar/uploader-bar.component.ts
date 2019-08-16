import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {CommonService} from '../../../pages/common-service';
import {LoadingBarService} from '../loading-bar/loading-bar.service';

@Component({
  selector: 'ngx-uploader-bar',
  templateUrl: './uploader-bar.component.html',
  styleUrls: ['./uploader-bar.component.scss'],
})
export class UploaderBarComponent implements OnInit, OnDestroy {
  show: boolean = false;
  @Input() text: string = '上传';  // 按钮文字
  @Input() multiple: boolean = false;  // 批量上传
  @Output() private complete = new EventEmitter(true);
  isComplete: boolean = true; //  是否上传完毕
  private title: string;
  showBar: boolean = false; // 进度条显示
  fileName: string = '';   // 上传的文件名
  private timer: any;      //  进度条定时器
  private value: number = 0;
  private files: Array<any>;  // 上传的文件集合
  private fileIndex: number = 0;     //  上传的文件索引
  private fileCount: number = 0;     // 文件总数

  constructor(private commonService: CommonService, private loadingBarService: LoadingBarService) {
  }

  ngOnInit() {
    this.loadingBarService.shutdown();
  }

  ngOnDestroy(): void {
    this.stop();
    this.loadingBarService.start();
  }

  fileClick(event) {
    event.target.previousSibling.click();
  }


  /**
   * 初始化bar
   */
  initProgressBar() {
    this.showBar = true;
    this.value = 0;
  }

  /**
   * 文件上传
   * @param event
   */
  fileChange(event) {
    const map = event.currentTarget.files;
    if (map.length <= 0) {
      return;
    }
    this.initProgressBar();
    this.files = new Array<any>();
    for (let i = 0; i < map.length; i++) {
      this.files.push(map[i]);
    }
    this.fileCount = this.files.length;
    this.fileIndex = 0;
    const file = this.files.pop();
    this.start();
    this.doUpload(file);
  }

  /**
   * 执行上传
   * @param file
   */
  doUpload(file) {
    this.fileIndex += 1;
    this.fileName = file.name;
    this.title = '正在上传'.concat('(' + this.fileIndex + '/' + this.fileCount + '):');
    this.commonService.uploadFile(file).then((result) => {
      this.complete.emit({source: file, dest: result});
      this.title = '上传成功:';

      const nextFile = this.files.pop();
      if (nextFile) {
        this.doUpload(nextFile);
      } else {
        //  上传完毕
        this.value = 100;
        this.stop();
        this.title = '上传完毕'.concat('(' + this.fileIndex + '/' + this.fileCount + '):');
      }
    });
  }

  /**
   * 更新进度条
   */
  cmProgressbar() {
    this.value += Math.round(Math.random() * 10);
    // 10 秒 100/2*200
    if (this.value >= 100) {
      this.value = 0;
    }
  }


  /**
   * 开启定时器
   */
  start() {
    this.isComplete = false;
    this.timer = setInterval(() => {
      this.cmProgressbar();
    }, 200);
  }

  /**
   * 停止定时器
   */
  stop() {
    this.isComplete = true;
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

}
