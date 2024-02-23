set -ex

rm -rf dist
mkdir dist
cp -r ext/* dist
rsync -rv --exclude=.js ext/ dist/
node_modules/.bin/babel ext/ -d dist --source-maps


rm -rf dist_prod
mkdir dist_prod
cp -r ext/* dist_prod
rsync -rv --exclude=.js ext/ dist_prod/
node_modules/.bin/babel ext -d dist_prod


version=`cat version.txt`
zipName=${PWD##*/}_v${version}.zip
cd dist_prod
zip -r -X ${zipName} *
cd ..

awk -F, '{printf("%d\n",$1+1)}' version.txt > tmp.txt && mv tmp.txt version.txt

