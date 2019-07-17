/**
 * 系统接口列表类
 */
export class AppApi {

  /**
   * 服务根域名
   */
  static ROOT_URI = 'http://192.168.8.113';

  /**
   * 是否属于后台接口的标识
   */
  static API_FLAG = '/manage';

  /**
   * 用户模块
   */
  static USERS = {
    login: '/manage/user/login.html',
    logout: '/manage/user/logout.html',
    user_list: '/manage/user/list.html',
    user_del: '/manage/user/del.html',
    user_add: '/manage/user/add.html',
    user_detail: '/manage/user/{}.html',
    user_edit: '/manage/user/edit.html',
    role_all: '/manage/user/role/all.html',
    role_list: '/manage/user/role/list.html',
    role_del: '/manage/user/role/del.html',
    role_add: '/manage/user/role/add.html',
    role_edit: '/manage/user/role/edit.html',
    role_detail: '/manage/user/role/{}.html',
    role_recycle: '/manage/user/recycle/{:userId}-{:roleId}.html',
    role_menu: '/manage/user/role/menu/{:roleId}.html',
    role_grant: '/manage/user/role/menu/grant.html',
  };

  /**
   * 日志模块
   */
  static LOGS = {
    sys_logs_list: '/manage/logs/sys/list.html',
    sys_logs_del: '/manage/logs/sys/del.html',
  };

  /**
   * 文件资源模块
   * @type {{file_upload: string}}
   */
  static FILES = {
    file_upload: '/manage/file/upload.html',
  };

  /**
   * 系统模块
   */
  static SYSTEM = {
    menu_list: '/manage/menu/list.html',
    menu_add: '/manage/menu/add.html',
    menu_edit: '/manage/menu/edit.html',
    menu_del: '/manage/menu/del.html',
  };

  /**
   * 基础数据模块
   */
  static WORDS = {
    dictionary_list: '/manage/dictionary/list.html',
    dictionary_add: '/manage/dictionary/add.html',
    dictionary_edit: '/manage/dictionary/edit.html',
    dictionary_del: '/manage/dictionary/del.html',
    dictionary_detail: '/manage/dictionary/{:dictionaryId}.html',
    dictionary_types: '/manage/dictionary/types.html',
    sensitive_list: '/manage/sensitive/list.html',
    sensitive_add: '/manage/sensitive/add.html',
    sensitive_edit: '/manage/sensitive/edit.html',
    sensitive_del: '/manage/sensitive/del.html',
    sensitive_detail: '/manage/sensitive/{:sensitiveId}.html',
    searchword_list: '/manage/searchword/list.html',
    searchword_del: '/manage/searchword/del.html',
    searchword_recommend: '/manage/searchword/recommend-{:searchId}-{:type}.html',
    score_group_list: '/manage/score/group/list.html',
    score_group_add: '/manage/score/group/add.html',
    score_group_edit: '/manage/score/group/edit.html',
    score_group_del: '/manage/score/group/del.html',
    score_group_detail: '/manage/score/group/{:groupId}.html',

    score_item_list: '/manage/score/item/list.html',
    score_item_add: '/manage/score/item/add.html',
    score_item_edit: '/manage/score/item/edit.html',
    score_item_del: '/manage/score/item/del.html',
    score_item_detail: '/manage/score/item/{:groupId}.html',
  };

  /**
   * 短信模块
   */
  static SMS = {
    provider_list: '/manage/sms/provider/list.html',
    provider_add: '/manage/sms/provider/add.html',
    provider_edit: '/manage/sms/provider/edit.html',
    provider_del: '/manage/sms/provider/del.html',
    provider_detail: '/manage/sms/provider/{:providerId}.html',
    provider_all: '/manage/sms/provider/all.html',
    record_list: '/manage/sms/record/list.html',
    record_resend: '/manage/sms/record/resend-{:recordId}.html',
  };

  /**
   * 邮件模块
   */
  static EMAIL = {
    provider_list: '/manage/email/provider/list.html',
    provider_add: '/manage/email/provider/add.html',
    provider_edit: '/manage/email/provider/edit.html',
    provider_del: '/manage/email/provider/del.html',
    provider_detail: '/manage/email/provider/{:providerId}.html',
  };
}
