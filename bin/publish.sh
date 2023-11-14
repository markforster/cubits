rm -r ./dist
tsc
# chmod +x ./dist/bin.js
npm publish --dry-run
# npm publish --access public
