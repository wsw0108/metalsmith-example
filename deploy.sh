#!/usr/bin/env bash

uname -a
pwd
git -C $HOME/site-example add $HOME/site-example/example1
git -C $HOME/site-example commit -m "update example1"
