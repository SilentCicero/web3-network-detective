# User Guide

All information for developers using web3-network-detective should consult this document.

# To use `web3-network-detective`

1. require the module
2. input the web3 provider object
3. handle the output of the module

Like so:

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
```
