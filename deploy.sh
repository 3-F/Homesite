#!/bin/sh
git pull
yarn install
yarn build
rm -rf ~/f
mv ./build ~/f
cd ~/draft/f/f-defi/
./deploy.sh
