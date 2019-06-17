import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: '首页',
    icon: 'nb-home',
    children: [
      {
        title: '工作台',
        link: '/workbench',
      },
    ],
  },
  {
    title: '运营',
    icon: 'nb-gear',
    children: [
      {
        title: '友情链接',
        link: '/friendlink/list',
      },
      {
        title: '广告管理',
        link: '/ad/list',
      },
      {
        title: '申请职位',
        link: '/job/apply',
      }, {
        title: '问卷调查',
        link: '/vote/list',
      }, {
        title: '站内信管理',
        link: '/message/list',
      }, {
        title: '评论管理',
        link: '/pages/bootstrap/modal',
      }, {
        title: '留言管理',
        link: '/pages/bootstrap/modal',
      },
    ],
  },
  {
    title: '内容管理',
    icon: 'nb-compose',
    children: [
      {
        title: '栏目管理',
        link: '/content/channel',
      },
      {
        title: '内容管理',
        link: '/content/normal',
      },
      {
        title: '专题管理',
        link: '/content/topic',
      }, {
        title: '内容类型',
        link: '/content/type',
      }, {
        title: '模型管理',
        link: '/content/model',
      },
    ],
  },
  {
    title: '用户管理',
    icon: 'ion-person',
    children: [
      {
        title: '会员管理',
        link: '/member/list',
      }, {
        title: '会员组管理',
        link: '/member/group',
      },
      {
        title: '角色管理',
        link: '/user/role',
      },
      {
        title: '系统管理员',
        link: '/user/list',
      },
    ],
  },
  {
    title: '数据分析',
    icon: 'nb-bar-chart',
    children: [
      {
        title: '趋势分析',
        link: '/analysis/flow',
      }, {
        title: '栏目访问量排行',
        link: '/analysis/channel',
      }, {
        title: '来源分类',
        link: '/analysis/source',
      }, {
        title: '搜索引擎',
        link: '/analysis/engine',
      }, {
        title: '浏览器',
        link: '/analysis/browser',
      }, {
        title: '来访站点',
        link: '/analysis/site',
      }, {
        title: '来访地区',
        link: '/analysis/area',
      }, {
        title: '搜索词',
        link: '/analysis/words',
      }, {
        title: '受访页面',
        link: '/analysis/pages',
      },
    ],
  },
  {
    title: '资源管理',
    icon: 'ion-images',
    children: [
      {
        title: '系统模板',
        link: '/pages/charts/echarts',
      },
      {
        title: '系统资源',
        link: '/pages/charts/chartjs',
      },
    ],
  },
  {
    title: '辅助数据',
    icon: 'nb-location',
    children: [
      {
        title: '数据字典',
        link: '/data/dictionary',
      },
      {
        title: '敏感词管理',
        link: '/data/sensitivewords',
      }, {
        title: '热词管理',
        link: '/data/searchwords',
      },
    ],
  },
  {
    title: '全局设置',
    icon: 'ion-settings',
    children: [
      {
        title: '系统设置',
        link: '/pages/tables/smart-table',
      }, {
        title: '站点设置',
        link: '/pages/editors/tinymce',
      },
      {
        title: '登录设置',
        link: '/pages/tables/smart-table',
      }, {
        title: '会员设置',
        link: '/pages/tables/smart-table',
      }, {
        title: '水印设置',
        link: '/pages/tables/smart-table',
      }, {
        title: '防火墙设置',
        link: '/pages/tables/smart-table',
      }, {
        title: '企业设置',
        link: '/pages/tables/smart-table',
      }, {
        title: '定时任务',
        link: '/pages/maps/bubble',
      }, {
        title: '评分组管理',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: '第三方服务管理',
    icon: 'nb-cloudy',
    children: [
      {
        title: 'FTP管理',
        link: '/pages/editors/ckeditor',
      }, {
        title: 'OSS管理',
        link: '/pages/editors/ckeditor',
      },
      {
        title: '短信服务管理',
        link: '/pages/charts/echarts',
      },
      {
        title: '短信记录',
        link: '/pages/charts/chartjs',
      },
    ],
  },
  {
    title: '日志管理',
    icon: 'ion-document',
    children: [
      {
        title: '操作日志',
        link: '/logs/list',
      },
      {
        title: '服务器日志',
        link: '/logs/file',
      },
    ],
  },
];
