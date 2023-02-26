#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

rm -rf /c/Users/49592/VSCodeProject/VueProject/gitpage/*
# 进入生成的文件夹
cp -r docs/.vuepress/dist/* /c/Users/49592/VSCodeProject/VueProject/gitpage/
cd /c/Users/49592/VSCodeProject/VueProject/gitpage/
# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:holdonbaby/holdonbaby.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -