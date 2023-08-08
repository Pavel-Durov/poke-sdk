#!/bin/bash

set -euo pipefail

npm run build
npm pack --pack-destination .

rm -fr .build
mkdir -p .build
cd .build
npm init -y
npm install ts-node
npm install file:../poke-sdk-typescript-0.0.4.tgz

# generate index.ts file
{
  echo "import SDK from 'poke-sdk-typescript';"
  echo "(async () => {"
  echo "  const sdk = new SDK();"
  echo "  const pokemon = await sdk.Poke.getPokemon('1');"
  echo "  const nature = await sdk.Poke.getNature('2');"
  echo "  const stat = await sdk.Poke.getStat('3');"
  echo "  console.log({ pokemon, nature, stat });"
  echo "})()"
} > index.ts

# run generated index.ts
./node_modules/.bin/ts-node ./index.ts
