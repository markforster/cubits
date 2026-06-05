#!/usr/bin/env bash

set -euo pipefail

rm -rf ./dist

echo "Building with webpack..."
npx webpack
