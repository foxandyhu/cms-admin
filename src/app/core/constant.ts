/**
 * 常量
 */
export class Constant {

  /**
   * 内容类型
   */
  static CONTENT_TYPES: Array<any> = [{id: 1, name: '普通'}, {id: 2, name: '图文'},
    {id: 3, name: '焦点'}, {id: 4, name: '头条'}]; //  内容类型

  /**
   * 默认图片
   */
  static DEFAULT_PIC: any = '/assets/images/add_img.png';   //  图像预览

  /**
   * 文档类型
   */
  static DOC_TYPE: number = 0;   // 文档类型

  /**
   * 多媒体类型
   */
  static MEDIA_TYPE: number = 1;  //  多媒体类型

  /**
   * 数据类型
   */
  static DATA_TYPES: any = [{id: 1, name: '文本'}, {id: 2, name: '文本域'}, {id: 3, name: '日期'},
    {id: 4, name: '下拉列表'}, {id: 5, name: '多选框'}, {id: 6, name: '单选框'}, {id: 7, name: '附件集'},
    {id: 8, name: '图片集'}, {id: 9, name: '富文本'}];  //  数据类型

  /**
   * 文章状态
   */
  static ARTICLE_STATUS: Array<any> = [{id: 0, name: '草稿'}, {id: 1, name: '待审核'},
    {id: 2, name: '审核通过'}, {id: 3, name: '审核未通过'}];

  /**
   * 邮件服务协议
   */
  static PROTOCOLS: Array<string> = ['SMTP', 'POP3', 'IMAP'];

  /**
   * 编码
   */
  static CHARSETS: Array<string> = ['UTF-8', 'GBK', 'GB2312', 'GB18030', 'iso-8859-1'];
}
