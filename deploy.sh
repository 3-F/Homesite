#!/bin/sh
git pull
yarn install
yarn build
mv build ~/f
cd ~/draft/f/f-defi/
./deploy.sh
