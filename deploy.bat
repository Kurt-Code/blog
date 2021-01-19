@echo off

echo building-complete.

git init
git add -A
git commit -m 'auto-deploy'
git remote add origin git@gitee.com:luna_nov/blog.git
git remote add github git@github.com:czy1024/blog.git

git pull
git push  origin HEAD:gh-pages
git push  github HEAD:gh-pages

echo Auto-Deploy-Complete!
pause