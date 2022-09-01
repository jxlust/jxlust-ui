export default {
  name: 'jxlust-ui',
  build: {
    css: {
      base: 'style/base.scss',
      preprocessor: 'sass',
    },
    site: {
      publicPath: '/jxlust-ui/',
    },
    packageManager: 'pnpm',
  },
  site: {
    title: 'jxlust-ui',
    logo: 'https://xxxxxx/assets/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'demo-button',
            title: 'DemoButton 按钮',
          },
          {
            path: 'my-text',
            title: 'text 文本展示',
          },
          {
            path: 'trigger-input',
            title: '触发文本框',
          },
          {
            path: 'style',
            title: 'Built-in style',
          },
        ],
      },
    ],
  },
};
