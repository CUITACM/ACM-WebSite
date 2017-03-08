// api root
const HOST = PRODUCTION ? '' : 'http://127.0.0.1:3000';
export const CDN_ROOT = HOST;
export const API_ROOT = `${HOST}/api/v1`;
export const SiteName = 'CUIT ACM Team';

export const NavbarMenu = [
  {
    to: '/site/main',
    text: '首页',
    children: []
  },
  {
    to: '/site/news',
    text: '新闻',
    children: [
      { to: '/site/news/index', text: '新闻', icon: 'news' },
    ]
  },
  {
    to: '/site/honors',
    text: '荣誉墙',
    children: []
  },
  {
    to: '/meter',
    direct: true,
    text: '水表',
    children: []
  },
  {
    to: '/site/about',
    text: '关于我们',
    children: []
  },
];
