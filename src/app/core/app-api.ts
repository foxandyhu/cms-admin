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
    edit_pwd: '/manage/user/edit-pwd.html',
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

    site_config: '/manage/site/info.html',
    site_config_edit: '/manage/site/edit.html',

    watermark_config: '/manage/watermark/info.html',
    watermark_config_edit: '/manage/watermark/edit.html',

    firewall_config: '/manage/firewall/info.html',
    firewall_config_edit: '/manage/firewall/edit.html',

    company_info: '/manage/company/info.html',
    company_edit: '/manage/company/edit.html',

    tast_list: '/manage/task/list.html',
    task_stop: '/manage/task/stop/{:name}.html',
    task_start: '/manage/task/start/{:name}.html',

    resource_list: '/manage/resource/list.html',
    resource_mkdir: '/manage/resource/mkdir.html',
    resource_del: '/manage/resource/del.html',
    resource_edit: '/manage/resource/edit.html',
    resource_upload: '/manage/resource/upload.html',

    template_list: '/manage/template/list.html',
    template_mkdir: '/manage/template/mkdir.html',
    template_del: '/manage/template/del.html',
    template_edit: '/manage/template/edit.html',
    template_upload: '/manage/template/upload.html',
    template_detail: '/manage/template/detail.html',
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
    dictionary_type_by: '/manage/dictionary/type/{:type}.html',
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
    score_item_sort: '/manage/score/item/sort/{:upItemId}-{:downItemId}.html',
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
    provider_all: '/manage/email/provider/all.html',
  };

  /**
   * 友情链接
   */
  static FRIENDLINK = {
    friendlink_list: '/manage/friendlink/list.html',
    friendlink_add: '/manage/friendlink/add.html',
    friendlink_edit: '/manage/friendlink/edit.html',
    friendlink_del: '/manage/friendlink/del.html',
    friendlink_detail: '/manage/friendlink/{:linkId}.html',
    friendlink_sort: '/manage/friendlink/sort/{:upItemId}-{:downItemId}.html',

    type_list: '/manage/friendlink/type/list.html',
    type_add: '/manage/friendlink/type/add.html',
    type_edit: '/manage/friendlink/type/edit.html',
    type_del: '/manage/friendlink/type/del.html',
    type_detail: '/manage/friendlink/type/{:type}.html',
    type_all: '/manage/friendlink/type/all.html',
    type_sort: '/manage/friendlink/type/sort/{:upItemId}-{:downItemId}.html',
  };

  /**
   * 广告模块
   */
  static AD = {
    ad_list: '/manage/advertising/list.html',
    ad_add: '/manage/advertising/add.html',
    ad_edit: '/manage/advertising/edit.html',
    ad_del: '/manage/advertising/del.html',
    ad_detail: '/manage/advertising/{:adId}.html',

    space_list: '/manage/advertising/space/list.html',
    space_add: '/manage/advertising/space/add.html',
    space_edit: '/manage/advertising/space/edit.html',
    space_del: '/manage/advertising/space/del.html',
    space_detail: '/manage/advertising/space/{:spaceId}.html',
    space_all: '/manage/advertising/space/all.html',
  };

  /**
   * 会员模块
   */
  static MEMBER = {
    member_list: '/manage/member/list',
    member_add: '/manage/member/add.html',
    member_edit: '/manage/member/edit.html',
    member_del: '/manage/member/del.html',
    member_detail: '/manage/member/{:memberId}.html',
    member_check: '/manage/member/check.html',
    member_edit_status: '/manage/member/edit/{:memberId}-{:status}.html',
    member_edit_password: '/manage/member/editpwd.html',
    member_config: '/manage/member/config/info.html',
    member_login_config_edit: '/manage/member/config/login/edit.html',
    member_regist_config_edit: '/manage/member/config/regist/edit.html',

    group_list: '/manage/member/group/list.html',
    group_add: '/manage/member/group/add.html',
    group_edit: '/manage/member/group/edit.html',
    group_del: '/manage/member/group/del.html',
    group_detail: '/manage/member/group/{:groupId}.html',
    group_all: '/manage/member/group/all.html',
  };

  /**
   * 流量统计模块
   */
  static STATISTIC = {
    flow: '/manage/statistic/flow.html',
    source: '/manage/statistic/source.html',
    engine: '/manage/statistic/engine.html',
    site: '/manage/statistic/site.html',
    browser: '/manage/statistic/browser.html',
    area: '/manage/statistic/area.html',
  };

  /**
   * 招聘模块
   */
  static JOB = {
    apply_list: '/manage/job/apply/list.html',
    apply_del: '/manage/job/apply/del.html',
    resume_detail: '/manage/job/resume/:memberId.html',
  };

  /**
   * 问卷调查模块
   */
  static VOTE = {
    vote_list: '/manage/vote/list.html',
    vote_add: '/manage/vote/add.html',
    vote_del: '/manage/vote/del.html',
    vote_detail: '/manage/vote/{:voteId}.html',
    vote_enabled: '/manage/vote/{:voteId}/{:enabled}.html',
  };

  /**
   * 消息模块
   */
  static MESSAGE = {
    letter_list: '/manage/letter/list.html',
    letter_add: '/manage/letter/add.html',
    letter_del: '/manage/letter/del.html',
    letter_detail: '/manage/letter/{:letterId}.html',

    comment_list: '/manage/comment/list.html',
    comment_del: '/manage/comment/del.html',
    commend_recommend: '/manage/comment/recommend/{:commentId}-{:recommend}.html',
    comment_verify: '/manage/comment/verify/{:status}.html',
    comment_add: '/manage/comment/reply.html',

    guestbook_list: '/manage/guestbook/list.html',
    guestbook_del: '/manage/guestbook/del.html',
    guestbook_recommend: '/manage/guestbook/recommend/{:guestbookId}-{:recommend}.html',
    guestbook_verify: '/manage/guestbook/verify/{:status}.html',
    guestbook_reply: '/manage/guestbook/reply.html',
  };

  static CONTENT = {
    model_list: '/manage/model/list.html',
    model_all: '/manage/model/all.html',
    model_add: '/manage/model/add.html',
    model_edit: '/manage/model/edit.html',
    model_detail: '/manage/model/{:modelId}',
    model_del: '/manage/model/del.html',
    model_sort: '/manage/model/sort/{:upItemId}-{:downItemId}.html',
    model_enabled: '/manage/model/enabled/{:modelId}-{:enabled}.html',
    model_template: '/manage/model/template/{:modelId}.html',

    model_item_default: '/manage/model/item/default.html',
    model_item_for_model: '/manage/model/item/model-{:modelId}.html',
    model_item_add: '/manage/model/item/add.html',
    model_item_bind: '/manage/model/item/bind/{:modelId}.html',
    model_item_edit: '/manage/model/item/edit.html',
    model_item_detail: '/manage/model/item/{:modelItemId}.html',
    model_item_del: '/manage/model/item/del.html',
    model_item_sort: '/manage/model/item/sort/{:upItemId}-{:downItemId}.html',
    model_item_enabled: '/manage/model/item/enabled/{:modelItemId}-{:enabled}.html',

    channel_list: '/manage/channel/list.html',
    channel_all: '/manage/channel/all.html',
    channel_add: '/manage/channel/add.html',
    channel_edit: '/manage/channel/edit.html',
    channel_detail: '/manage/channel/{:channelId}.html',
    channel_del: '/manage/channel/del.html',
    channel_sort: '/manage/channel/sort/{:upItemId}-{:downItemId}.html',

    topic_list: '/manage/topic/list.html',
    topic_add: '/manage/topic/add.html',
    topic_edit: '/manage/topic/edit.html',
    topic_detail: '/manage/topic/{:topicId}.html',
    topic_del: '/manage/topic/del.html',
    topic_sort: '/manage/topic/sort/{:upItemId}-{:downItemId}.html',
    topic_template: '/manage/topic/template.html',
    topic_article: '/manage/topic/article/{:articleId}.html',

    article_list: '/manage/article/list.html',
    article_add: '/manage/article/add.html',
    article_edit: '/manage/article/edit.html',
    article_detail: '/manage/article/{:articleId}.html',
    article_del: '/manage/article/del.html',
    article_recommend: '/manage/article/recommend/{:recommend}-{:level}.html',
    article_verify: '/manage/article/verify/{:status}.html',
    article_top: '/manage/article/top/{:articleId}-{:level}.html',
    article_related_topic: '/manage/article/related/topic.html',
    article_del_related_topic: '/manage/article/del/{:articleId}-{:topicId}.html',
    article_picture_del: '/manage/article/picture/del/{:picId}.html',
    article_attachment_del: '/manage/article/attachment/del/{:attaId}.html',
  };
}
