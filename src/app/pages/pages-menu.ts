import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: '工作台',
    icon: 'nb-home',
    link: '/pages/iot-dashboard',
  },
  {
    title: '内容',
    icon: 'nb-star',
    children: [
      {
        title: '内容管理',
        link: '/pages/extra-components/calendar',
      },
      {
        title: '专题管理',
        link: '/pages/extra-components/stepper',
      }
    ],
  },
  {
    title: '栏目',
    icon: 'nb-home',
    link: '/pages/iot-dashboard',
  },
  {
    title: '数据中心',
    icon: 'nb-compose',
    children: [
      {
        title: '流量统计',
        link: '/pages/forms/inputs',
        children: [
          {
            title: '趋势分析',
            link: '/pages/forms/inputs',
          },{
            title: '栏目访问量排行',
            link: '/pages/forms/inputs',
          }
        ]
      },
      {
        title: '来源分析',
        link: '/pages/forms/layouts',
        children: [
          {
            title: '来源分类',
            link: '/pages/forms/inputs',
          },{
            title: '搜索引擎',
            link: '/pages/forms/inputs',
          },{
            title: '来访域名',
            link: '/pages/forms/inputs',
          },{
            title: '来访地区',
            link: '/pages/forms/inputs',
          },{
            title: '搜索词',
            link: '/pages/forms/inputs',
          }
        ]
      },
      {
        title: '受访分析',
        link: '/pages/forms/buttons',
        children: [
          {
            title: '受访页面',
            link: '/pages/forms/inputs',
          },{
            title: '入口页面',
            link: '/pages/forms/inputs',
          }
        ]
      },
      {
        title: '忠诚度',
        link: '/pages/forms/datepicker',
      },{
        title: '网站概况',
        link: '/pages/forms/buttons',
        children: [
          {
            title: '内容发布数',
            link: '/pages/forms/inputs',
          },{
            title: '工作量',
            link: '/pages/forms/inputs',
          },{
            title: '评论数',
            link: '/pages/forms/inputs',
          },{
            title: '留言数',
            link: '/pages/forms/inputs',
          },{
            title: '会员注册数',
            link: '/pages/forms/inputs',
          }
        ]
      },
    ],
  },
  {
    title: '用户管理',
    icon: 'nb-keypad',
    link: '/pages/ui-features',
    children: [
      {
        title: '会员管理',
        link: '/pages/ui-features/grid',
      },
      {
        title: '角色管理',
        link: '/pages/ui-features/icons',
      },
      {
        title: '账户绑定',
        link: '/pages/ui-features/typography',
      },
      {
        title: '系统管理员',
        link: '/pages/ui-features/search-fields',
      },{
        title: '会员组管理',
        link: '/pages/ui-features/search-fields',
      },{
        title: '站内信管理',
        link: '/pages/ui-features/search-fields',
      },
    ],
  },
  {
    title: '日志管理',
    icon: 'nb-layout-default',
    children: [
      {
        title: '操作日志',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: '实时日志',
        link: '/pages/modal-overlays/window',
      }
    ]
  },
  {
    title: '运营',
    icon: 'nb-gear',
    children: [
      {
        title: '友情链接',
        link: '/pages/bootstrap/inputs',
      },
      {
        title: '广告管理',
        link: '/pages/bootstrap/buttons',
      },
      {
        title: '评论管理',
        link: '/pages/bootstrap/modal',
      },{
        title: '申请职位',
        link: '/pages/bootstrap/modal',
      },{
        title: '问卷调查',
        link: '/pages/bootstrap/modal',
      },{
        title: '留言管理',
        link: '/pages/bootstrap/modal',
      },{
        title: '采集管理',
        icon: 'nb-layout-default',
        children: [
          {
            title: '采集任务',
            link: '/pages/modal-overlays/dialog',
          },
          {
            title: '采集历史',
            link: '/pages/modal-overlays/window',
          },{
            title: '采集进度',
            link: '/pages/modal-overlays/window',
          }
        ]
      },{
        title: '页面静态化',
        icon: 'nb-layout-default',
        children: [
          {
            title: '首页静态化',
            link: '/pages/modal-overlays/dialog',
          },
          {
            title: '栏目静态化',
            link: '/pages/modal-overlays/window',
          },{
            title: '内容静态化',
            link: '/pages/modal-overlays/window',
          }
        ]
      }
    ],
  },
  {
    title: '辅助',
    icon: 'nb-location',
    children: [
      {
        title: '全文检索',
        link: '/pages/maps/gmaps',
      },
      {
        title: '数据字典',
        link: '/pages/maps/leaflet',
      },
      {
        title: '定时任务',
        link: '/pages/maps/bubble',
      },
      {
        title: '附件管理',
        link: '/pages/maps/searchmap',
      },{
        title: '评分组管理',
        link: '/pages/maps/searchmap',
      },{
        title: '词汇管理',
        icon: 'nb-layout-default',
        children: [
          {
            title: '标签管理',
            link: '/pages/modal-overlays/dialog',
          },
          {
            title: '敏感词管理',
            link: '/pages/modal-overlays/window',
          },{
            title: '关键词管理',
            link: '/pages/modal-overlays/window',
          },{
            title: '来源管理',
            link: '/pages/modal-overlays/window',
          },{
            title: '热词管理',
            link: '/pages/modal-overlays/window',
          }
        ]
      }
    ],
  },
  {
    title: '界面',
    icon: 'nb-bar-chart',
    children: [
      {
        title: '模板',
        link: '/pages/charts/echarts',
      },
      {
        title: '资源',
        link: '/pages/charts/chartjs',
      }
    ]
  },
  {
    title: '配置',
    icon: 'nb-title',
    children: [
      {
        title: '站点设置',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'FTP管理',
        link: '/pages/editors/ckeditor',
      },{
        title: 'OSS管理',
        link: '/pages/editors/ckeditor',
      },{
        title: '内容类型',
        link: '/pages/editors/ckeditor',
      },{
        title: '模型管理',
        link: '/pages/editors/ckeditor',
      },{
        title: '短信服务',
        link: '/pages/editors/ckeditor',
        children: [
          {
            title: '短信服务管理',
            link: '/pages/charts/echarts',
          },
          {
            title: '短信记录',
            link: '/pages/charts/chartjs',
          }
        ],
      }
    ],
  },
  {
    title: '全局设置',
    icon: 'nb-tables',
    children: [
      {
        title: '系统设置',
        link: '/pages/tables/smart-table',
      },{
        title: '登录设置',
        link: '/pages/tables/smart-table',
      },{
        title: '会员设置',
        link: '/pages/tables/smart-table',
      },{
        title: '水印设置',
        link: '/pages/tables/smart-table',
      },{
        title: '防火墙设置',
        link: '/pages/tables/smart-table',
      },{
        title: '企业设置',
        link: '/pages/tables/smart-table',
      }
    ],
  }
];
