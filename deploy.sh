#!/usr/bin/env sh
 
# 确保脚本抛出遇到的错误
set -e
 
# 生成静态文件 , yarn docs:build
npm run docs:build
# rm -rf ../blog2/dist/*

# 将build生成的dist目录拷贝至上一层目录中
# cp -rf dist ../blog2/

# 进入生成的文件夹
# cd ../blog2/dist

# git初始化，每次初始化不影响推送
git init
git add README.md
git add -A
git commit -m 'deploy'
git branch -M main

# 如果你想要部署到 https://USERNAME.github.io
#git@github.com:xiao-yu-yu/xiao-yu-yu.github.io.git
git push -f git@github.com:xiao-yu-yu/xiao-yu-yu.github.io.git main
