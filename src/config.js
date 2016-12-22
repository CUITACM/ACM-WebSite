// api root
const HOST = 'http://127.0.0.1:3000';
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
    children: []
  },
];
