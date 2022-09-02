# 本地打包利用 gh-pages 库发布

## 创建 gh-pages 分支

```shell
git checkout --orphan gh-pages
git remote add origin {远程仓} # 添加关联
git push origin gh-pages
```

## gh-pages 安装

```
npm install gh-pages --save
```

## 发布 site-dist 目录

gh-pages

```
npm run release:site
```

## GitHub Pages

GitHub Pages 关联 gh-pages 分支

# GitHub workflow

可以参考我的另一个项目 jxlvuetpl 里面的配置

## img

https://fastly.jsdelivr.net/gh/jxlust/public-assets@v0.1/images/logo.png
https://fastly.jsdelivr.net/npm/@jxlust/assets/logo.png
