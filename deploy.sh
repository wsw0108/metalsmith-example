#!/usr/bin/env bash

uname -a
pwd
cd $HOME/site-example
tree .
git config --global user.email "$GH_EMAIL"
git config --global user.name "$GH_NAME"
git add example1
git commit -m "update example1"
git push --force origin gh-pages