#!/usr/bin/env bash

uname -a
pwd

git config --global user.email "$GH_EMAIL" > /dev/null 2>&1
git config --global user.name "$GH_NAME" > /dev/null 2>&1

cd $HOME/site-example
tree .

if git rev-parse --verify origin/gh-pages > /dev/null 2>&1
then
    git checkout gh-pages
else
    git checkout --orphan gh-pages
fi

git add example1
git commit -m "update example1"
git push --force origin gh-pages