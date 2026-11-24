#!/bin/bash
set -e
R=/home/user/lulu-adventure
L=/home/user/lulu
mkdir -p $R/src $R/fonts $R/icons $R/tools $R/audio
cp $L/src/{main,engine,characters,props,worlds,audio,data,store,icons}.js $L/src/lines.json $L/src/style.css $R/src/
cp $L/fonts/* $R/fonts/; cp $L/icons/* $R/icons/; cp $L/tools/* $R/tools/
cp $L/build.mjs $L/package.json $L/.gitignore $L/README.md $L/publish.sh $R/
rm -f $R/audio/*; cp /home/user/tts/out/*.mp3 $R/audio/
ln -sfn $L/node_modules $R/node_modules
cd $R && node build.mjs
