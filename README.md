## web3-network-detective

[![NPM version](http://img.shields.io/npm/v/web3-network-detective.svg)](https://www.npmjs.org/package/web3-network-detective) [![Build status](https://ci.appveyor.com/api/projects/status/wwajr0886e00g8je/branch/master?svg=true)](https://ci.appveyor.com/project/weifund/web3-network-detective/branch/master) [![Coverage Status](https://coveralls.io/repos/github/weifund/web3-network-detective/badge.svg?branch=master)](https://coveralls.io/github/weifund/web3-network-detective?branch=master) [![NPM Downloads](https://img.shields.io/npm/dm/web3-network-detective.svg)](https://www.npmjs.org/package/web3-network-detective)

A simple module to determine if your web3 provider is on the Ethereum mainnet, (morden) testnet or a custom network.

## Install
```
npm install --save web3-network-detective
```

## Usage
```js
import Web3 from 'web3';
import networkDetective from 'web3-network-detective';

// setup example web3 instance
const web3 = new Web3(new Web3.providers.HttpProvider('https://morden.infura.io/'));

// network detective usage
networkDetective(web3.currentProvider, function(detectiveError, detectiveResult){
  if (!detectiveError) {
    console.log(detectiveResult);
  }
});

/*
example detective result:
{
  network: 'livenet', // or 'testnet' or 'custom'
  livenet: true,
  testnet: false,
  custom: false,
}
*/

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
  network: 'livenet', // or 'testnet' or 'custom'
  livenet: true,
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

## LICENCE
MIT - Yeee boy.
