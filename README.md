## web3-network-detective
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
  if (!error) {
    console.log(detectiveResult);
  }
});

/*
example detective result:
{
  network: 'livenet', // or 'testnet' or 'custom'
  isLivenet: true,
  isTestnet: false,
  isCustom: false,
}
*/

```

## API Design

### constructor

[index.js:289-308](https://github.com/ethereum/ethereumjs-block/blob/16fb366efed89b87591c971e86a3bbdc842a13b1/index.js#L289-L308 "Source code on GitHub")

Detects the current network of a web3 provider.

**Parameters**

-   `web3Provider` **Object** the web3 provider you would like to check the nextwork (i.e. 'livenet' or 'testnet') of.

Returns **Object**, example:

```
{
  network: 'livenet',
  isLivenet: true,
  isTestnet: false,
  isCustom: false,
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
