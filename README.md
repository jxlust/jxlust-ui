# jxlust-ui

vue3 ui component

## jxlust UI 组件库

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

## git commit

- fix
- feat
- docs
- perf
- test
- types
- build
- chore
- release
- refactor
- breaking change
- Merge branch 'foo' into 'bar'
- test

> 参考:
