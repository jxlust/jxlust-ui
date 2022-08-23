# jxlust-ui-vant

vue3 ui component

## 如果需要管理多项目

新建 pnpm-workspace.yaml

```yaml
packages:
  - 'packages/*'
```

## package.json

```json
  "nano-staged": {
    "*.md": "prettier --write",
    "*.{ts,tsx,js,vue,less,scss}": "prettier --write",
    "*.{ts,tsx,js,vue}": "eslint --fix",
    "*.{vue,css,less,scss}": "stylelint --fix"
  },
```

> 参考:
> vant-cli: *https://github.com/vant-ui/vant/tree/dev/packages/vant-cli*
