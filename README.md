# poke.sdk.ts

[PokeAPI](https://pokeapi.co/) SDK written in Typescript.

Supported endpoints:
- `GET https://pokeapi.co/api/v2/pokemon/{id or name}`
- `GET https://pokeapi.co/api/v2/nature/{id or name}`
- `GET https://pokeapi.co/api/v2/stat/{id or name}`

## SDK Installation

### Installing via npm
```shell
$ npm install poke-sdk-typescript
```
### Installing from source
```shell
$ git clone https://github.com/Pavel-Durov/poke-sdk-typescript.git
$ cd poke-sdk-typescript
$ npm run build
$ npm pack --pack-destination .
$ npm install file:/path/to/poke-sdk-typescript-0.0.1.tgz # execute in the target project
```

## SDK Example Usage
```typescript
import SDK from 'poke-sdk-typescript';

(async () => {
  const sdk = new SDK();
  const pokemon = await sdk.Poke.getPokemon('1');
  const nature = await sdk.Poke.getNature('2');
  const stat = await sdk.Poke.getStat('3');
  console.log({ pokemon, nature, stat });
})()
```

## SDK Errors

In case of an API error, a generic error with an appropriate error message and HTTP status cade will be produced. 
Example:

```shell
const sdk = new SDK();
const pokemon = await sdk.Poke.getPokemon('pavelchu');
...
(node:171922) UnhandledPromiseRejectionWarning: NetworkError: Request failed with status code 404
    at Poke.<anonymous> (/home/kimchi/git-repos/Pavel-Durov/poke.sdk.ts/.build/node_modules/poke-sdk-typescript/dist/poke.js:37:23)
    at Generator.throw (<anonymous>)
    at rejected (/home/kimchi/git-repos/Pavel-Durov/poke.sdk.ts/.build/node_modules/poke-sdk-typescript/dist/poke.js:6:65)
    at processTicksAndRejections (internal/process/task_queues.js:95:5
```


## Tests

```shell
$ npm run test # run unit tests
$ npm run test:integration # run integration tests
$ ./scripts/e2e.sh # end-to-end tests
```

## Lint

```shell
$ npm run lint # check linting errors
$ npm run lint:fix # fix linting errors
```

## Build

```
$ npm run build
```