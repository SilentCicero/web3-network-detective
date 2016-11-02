# Developer Guide

All information regarding contributing to and progressing web3-network-detective can be found in this document.

# Scripts

All necessary deployment and build scripts can be found in the [scripts](../../../blob/master/scripts) directory.

# Folder Layout

All main applicaiton source code (src) can be found in the [src](../../../blob/master/src) directory.

```
./web3-network-detective
  ./dist
  ./scripts
  ./src
    ./.dapple
    ./contracts
    ./tests
```

## API Design

### constructor

[index.js:34-78](https://github.com/SilentCicero/web3-network-detective/blob/master/src/index.js#L34-L78 "Source code on GitHub")

Detects the current network of a web3 provider.

**Parameters**

-   `web3Provider` **Object** the web3 provider you would like to check the nextwork (i.e. 'livenet' or 'testnet') of.

Returns **Object**, example:

```
{
  network: 'mainnet', // or 'testnet' or 'custom'
  mainnet: true,
  testnet: false,
  custom: false,
}
```


## Deployment
  1. Make sure you have an `account.json` file outside this repo, that contains one JSON object with two properties `address` and `privateKey`, like so: `{"address": "0x000...", "privateKey": "000..."}`.
  2. Run `npm run deploy`

```
npm run deploy
```

## Tests
```
npm test
```

# Contributing

Please consult the [contributing document](../../../blob/master/CONTIRBUTING.md) before contributing any code to this repository.
