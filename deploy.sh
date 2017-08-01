#!/usr/bin/env bash

uname -a
pwd
tree $HOME/site-example
git config --global user.email "deploy@circle-ci.org"
git config --global user.name "Deployment Bot"
git -C $HOME/site-example add $HOME/site-example/example1
git -C $HOME/site-example commit -m "update example1"
git -C $HOME/site-example push