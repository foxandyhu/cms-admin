import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../../base-component';
import {ArticleService} from '../../service/article-service';
import {ActivatedRoute, Router} from '@angular/router';
import {ChannelService} from '../../service/channel-service';
import {ModelItemService} from '../../service/model-item-service';
import {DateUtil} from '../../../../core/utils/date';
import {ModelService} from '../../service/model-service';
import {Constant} from '../../../../core/constant';
import {CommonService} from '../../../common-service';
import {DomSanitizer} from '@angular/platform-browser';
import {MemberGroupService} from '../../../member/service/member-group-service';
import '../../../../@theme/components/editor.loader';
import * as moment from 'moment';
import {ValidateUtil} from '../../../../core/utils/validate';
import {ScoreGroupService} from '../../../words/service/score-group-service';
import {DictionaryService} from '../../../words/service/dictionary-service';


@Component({
  selector: 'ngx-content-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.scss'],
})
export class ArticleAddComponent extends BaseComponent implements OnInit {

  constructor(private articleService: ArticleService, protected injector: Injector,
              private route: ActivatedRoute, private channelService: ChannelService,
              private commonService: CommonService, private domSanitizer: DomSanitizer,
              private groupService: MemberGroupService, private router: Router,
              private modelItemService: ModelItemService, private modelService: ModelService,
              private scoreGroupService: ScoreGroupService, private dictionaryService: DictionaryService) {
    super(articleService, injector);
  }

  channel: any;  //  栏目对象
  modelItems: Array<any>;  //  模型项集合
  typeImgPreview: any = Constant.DEFAULT_PIC; //  类型图
  titleImgPreview: any; //  标题图
  contentImgPreview: any; //  类型图
  memberGroups: any;   //  会员组
  scoreGroups: any;    //   评分组
  fileTypes: Array<any>;  //  文件类型
  docTypes: Array<any>;  //  文档类型
  mediaTypes: Array<any>;  //  多媒体类型
  fileCategory: Array<any> = [{name: '文档', id: Constant.DOC_TYPE}, {name: '多媒体', id: Constant.MEDIA_TYPE}];
  pcTemplates: any;
  mobileTemplates: any;
  color: string;
  contentTypes: any = Constant.CONTENT_TYPES;
  showFileResult: any = {show: false, text: ''};
  article: any = {  //  文章
    topLevel: 0, topExpired: '', recommend: false, recommendLevel: 0, status: '',
    type: '', share: true, updown: true, comment: true, score: false, scoreGroupId: '', scores: 0,
    articleExt: {
      title: '', shortTitle: '', summary: '', keywords: '', description: '', author: '', origin: '', originUrl: '',
      postDate: '', filePath: '', fileType: '', titleColor: '', bold: false, titleImg: '',
      contentImg: '', typeImg: '', link: '', tplPc: '', tplMobile: '', tags: '',
    },
    articleTxt: {txt: '', txt1: '', txt2: '', txt3: ''},
    viewGroups: [],
    pictures: [],
    attachments: [],
    attr: {},
  };

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const channelId = params.get('channelId');
      this.getChannel(channelId).then(() => {
        this.getModelItems();
      });
    });
  }

  /**
   * 栏目详情
   * @param channelId
   */
  getChannel(channelId: string): Promise<any> {
    return this.channelService.getData(channelId).then(result => {
      return this.channel = result;
    });
  }

  /**
   * 加载模型项
   * @param modelId
   */
  getModelItems() {
    if (this.channel) {
      this.modelItemService.getModelItems(this.channel.modelId).then(result => {
        this.modelItems = result;
        if (this.modelItems) {
          this.initArticle();
          //  加载模版
          if (this.hasItem('tplpc') || this.hasItem('tplmobile')) {
            this.loadTpl();
          }
          //  加载会员组
          if (this.hasItem('viewgroup')) {
            this.loadMemberGroup();
          }

          //  加载评分组
          if (this.hasItem('score')) {
            this.loadScoreGroup();
          }
          //  加载文档类型
          if (this.hasItem('file')) {
            this.loadFileTypes();
          }
        }
      });
    }
  }

  /**
   * 初始化文章信息--字段默认值
   */
  private initArticle() {
    this.article.type = this.getDefValue('type');
    this.article.topLevel = this.getDefValue('top');
    this.article.recommend = this.getDefValue('recommend');
    this.article.articleExt.title = this.getDefValue('title');
    this.article.articleExt.link = this.getDefValue('link');
    this.article.articleExt.tplMobile = this.getDefValue('tplmobile');
    this.article.articleExt.tplPc = this.getDefValue('tplpc');
    this.titleImgPreview = this.getDefValue('titleimg');
    if (!this.titleImgPreview) {
      this.titleImgPreview = Constant.DEFAULT_PIC;
    }
    this.article.articleExt.contentImg = this.getDefValue('contentimg');
    if (!this.contentImgPreview) {
      this.contentImgPreview = Constant.DEFAULT_PIC;
    }
    const typeId = this.getDefValue('type');
    if (typeId) {
      this.article.type = parseInt(typeId, 0);
    }
    const share = this.getDefValue('share');
    if (share) {
      this.article.share = share;
    }
    const updown = this.getDefValue('updown');
    if (updown) {
      this.article.updown = ValidateUtil.isBoolean(updown);
    }
    const comment = this.getDefValue('comment');
    if (comment) {
      this.article.comment = ValidateUtil.isBoolean(comment);
    }
    const score = this.getDefValue('score');
    if (score) {
      this.article.score = ValidateUtil.isBoolean(score);
    }
    this.modelItems.forEach(item => {
      if (item.custom) {
        this.article.attr[item.field] = item.defValue;
      }
    });
  }

  /**
   * 获得字段默认值
   * @param key
   */
  private getDefValue(key: string): any {
    for (const item of this.modelItems) {
      if (item.field === key) {
        return item.defValue;
      }
    }
    return undefined;
  }

  /**
   * 判断是否存在某个字段
   * @param key
   */
  private hasItem(key: string): boolean {
    let exist: boolean = false;
    for (const item of this.modelItems) {
      if (item.field === 'tplpc' || item.field === 'tplmobile') {
        exist = true;
        break;
      }
    }
    return exist;
  }

  /**
   * 类型图,标题图，内容图上传
   * @param event
   */
  imgFileChange(event, target) {
    const file = event.currentTarget.files[0];
    if (file) {
      switch (target) {
        case 'typeimg':
          this.typeImgPreview = this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
          break;
        case 'titleimg':
          this.titleImgPreview = this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
          break;
        case 'contentimg':
          this.contentImgPreview = this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
          break;
      }
      this.commonService.uploadFile(file).then(result => {
        switch (target) {
          case 'typeimg':
            this.article.articleExt.typeImg = result;
            break;
          case 'titleimg':
            this.article.articleExt.titleImg = result;
            break;
          case 'contentimg':
            this.article.articleExt.contentImg = result;
            break;
        }
      });
    }
  }

  /**
   * 删除上传的文件
   * @param event
   */
  removeUploadFile(target, name, field) {
    switch (target) {
      case 'file':
        this.article.articleExt.fileType = '';
        this.article.articleExt.filePath = '';
        this.showFileResult.show = false;
        break;
      case 'pictures':
        if (name) {
          this.article.pictures = this.article.pictures.filter(picture => {
            return picture.imgPath !== name;
          });
        }
        break;
      case 'pictures_attr':
        if (name) {
          this.article.attr[field] = this.article.attr[field].filter(picture => {
            return picture.imgPath !== name;
          });
        }
        break;
      case 'attachments':
        if (name) {
          this.article.attachments = this.article.attachments.filter(attachment => {
            return attachment.path !== name;
          });
        }
        break;
      case 'attachments_attr':
        this.article.attr[field] = this.article.attr[field].filter(attachment => {
          return attachment.path !== name;
        });
        break;
    }
  }

  /**
   * 上传文档和多媒体
   * @param result
   * @param target
   */
  uploadFileChange(result, target, field?: string) {
    switch (target) {
      case 'file':
        this.article.articleExt.filePath = result.dest;
        this.showFileResult.show = true;
        this.showFileResult.text = result.source.name;
        break;
      case 'pictures':
        const maxSeq = this.article.pictures.length;
        const file = result.source;
        const preview = this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
        this.article.pictures.push({
          preview: preview, seq: maxSeq + 1, imgPath: result.dest,
          name: file.name, remark: '', field: '',
        });
        break;
      case 'pictures_attr':
        const seq = this.article.attr[field].length;
        if (seq === 0) {
          this.article.attr[field] = new Array();
        }
        const f = result.source;
        const pv = this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(f));
        this.article.attr[field].push({
          preview: pv, seq: seq + 1, imgPath: result.dest,
          name: f.name, remark: '', field: field,
        });
        break;
      case 'attachments':
        this.article.attachments.push({field: '', path: result.dest, name: result.source.name, remark: ''});
        break;
      case 'attachments_attr':
        if (this.article.attr[field].length === 0) {
          this.article.attr[field] = new Array();
        }
        this.article.attr[field].push({field: field, path: result.dest, name: result.source.name, remark: ''});
        break;
    }
  }

  /**
   * 排序图片 isUp 为true标识上移 false下移
   * @param seq
   * @param isUp
   */
  sortPic(seq: number, isUp: boolean, field?: string) {
    let array = new Array();
    if (field) {
      array = this.article.attr[field];
    } else {
      array = this.article.pictures;
    }
    const length = array.length;
    for (let index = 0; index < length; index++) {
      const item = array[index];
      if (item.seq === seq) {
        if (isUp === true) {
          const preItem = array[index - 1];
          if (preItem) {
            const downItemId = preItem.seq;
            preItem.seq = seq;
            item.seq = downItemId;
          }
        } else {
          const nextItem = array[index + 1];
          if (nextItem) {
            const downItemId = nextItem.seq;
            nextItem.seq = seq;
            item.seq = downItemId;
          }
        }
        break;
      }
    }
    array.sort((pic1, pic2) => {
      return pic1.seq - pic2.seq;
    });
  }

  /**
   * 加载会员组
   */
  loadMemberGroup() {
    this.groupService.getAllGroup().then(result => {
      this.memberGroups = result;
    });
  }

  /**
   * 加载评分组
   */
  loadScoreGroup() {
    this.scoreGroupService.getAllGroup().then(result => {
      this.scoreGroups = result;
    });
  }

  /**
   * 加载模版
   */
  loadTpl() {
    this.modelService.getModelTemplates(this.channel.modelId).then(result => {
      if (result) {
        this.pcTemplates = result['pc'];
        this.mobileTemplates = result['mobile'];
      }
    });
  }

  /**
   * 加载文件类型
   */
  loadFileTypes() {
    this.dictionaryService.getDictionaryByType('doc_type').then(result => {
      this.docTypes = result;
    });
    this.dictionaryService.getDictionaryByType('industry').then(result => {
      this.mediaTypes = result;
    });
  }

  /**
   * 会员组选择
   */
  changeMemberGroup(groupId: string, selected: boolean) {
    this.article.viewGroups.splice(0, this.article.viewGroups.length);
    this.memberGroups.forEach(group => {
      if (group.id === groupId) {
        group.selected = selected;
      }
      if (group.selected === true) {    //  选中的角色重新放到当前用户拥有的角色集合中
        this.article.viewGroups.push({id: group.id, name: group.name});
      }
    });
  }

  /**
   * 颜色选择
   * @param color
   */
  pickColor(color) {
    this.article.articleExt.titleColor = color;
  }

  /**
   * 外部连接
   */
  isOutLink() {
    this.article.articleExt.link = '';
  }

  /**
   * 置顶
   */
  isTop() {
    this.article.topLevel = 0;
    this.article.topExpired = '';
  }

  /**
   * 日期期限
   * @param date
   */
  dateChange(date, target) {
    switch (target) {
      case 'top':
        this.article.topExpired = DateUtil.formatDate(date);
        break;
      case 'postdate':
        this.article.articleExt.postDate = DateUtil.formatDate(date);
        break;
    }
  }

  /**
   * 是否推荐
   */
  isRecommend() {
    this.article.recommendLevel = 0;
  }

  /**
   * 设置其他自定义字段值
   */
  setAttr(field: string, value: any) {
    if (value instanceof moment) {
      value = DateUtil.formatDate(value);
    }
    this.article.attr[field] = value;
  }

  /**
   * 设置多选框自定义字段值
   * @param field 字段名
   * @param value 值
   * @param isChk 是否选中
   */
  setAttrChk(field: string, value: any, isChk) {
    let data: string = this.article.attr[field];
    if (!data) {
      data = value;
    }
    const array: Array<any> = data.split(',');
    //  选中
    if (isChk) {
      if (array.indexOf(value) < 0) {
        //  不存在 则添加
        array.push(value);
      }
    } else {
      // 取消
      const index = array.indexOf(value);
      if (index > -1) {
        //  存在 则删除
        array.splice(index, 1);
      }
    }
    this.article.attr[field] = array.join(',');
  }

  /**
   * 文件类型切换事件
   * @param value
   */
  fileCategoryChange(value) {
    if (parseInt(value, 0) === Constant.DOC_TYPE) {
      this.fileTypes = this.docTypes;
    } else if (parseInt(value, 0) === Constant.MEDIA_TYPE) {
      this.fileTypes = this.mediaTypes;
    } else {
      this.fileTypes = new Array();
    }
  }

  /**
   * 文件类型切换事件
   * @param value
   */
  fileTypeChange(value) {
    this.article.articleExt.fileType = value;
  }

  /**
   * 保存文章
   */
  saveArticle() {
    //  复制对象
    const data = JSON.parse(JSON.stringify(this.article));
    this.modelItems.forEach(item => {
      // 自定义属性值数据整理
      if (item.custom) {
        if (item.dataType === Constant.DATA_TYPES[7].id) {
          // 自定义图片属性合并
          const pics = data.attr[item.field];
          if (pics) {
            data.attr[item.field] = '';
            if (data.pictures) {
              data.pictures = data.pictures.concat(pics);
            } else {
              data.pictures = pics;
            }
          }
        } else if (item.dataType === Constant.DATA_TYPES[6].id) {
          //  自定义附件集合并
          const atts = data.attr[item.field];
          if (atts) {
            data.attr[item.field] = '';
            if (data.attachments) {
              data.attachments = data.attachments.concat(atts);
            } else {
              data.attachments = atts;
            }
          }
        }
      }
    });
    if (data.pictures) {
      data.pictures.forEach(picture => {
        //  删除图片预览
        delete picture.preview;
      });
    }
    data.channelId = this.channel.id;
    data.status = Constant.ARTICLE_STATUS[2].id;
    this.articleService.saveData(data).then(() => {
      this.toastUtil.showSuccess('保存成功!');
      this.router.navigate(['/content/article']);
    });
  }
}
