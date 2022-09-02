export default {
  name: 'jxlust-ui',
  build: {
    srcDir: 'src',
    namedExport: true,
    skipInstall: ['lazyload'],
    packageManager: 'pnpm',
    css: {
      base: 'style/base.scss',
      preprocessor: 'sass',
    },
    site: {
      //site 页面的里面的公共目录配置
      publicPath: 'jxlust-ui',
    },
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
