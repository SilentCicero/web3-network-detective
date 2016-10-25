#!/usr/bin/env node

const Web3 = require('web3');
const web3 = new Web3();
const contracts = require('./contracts/build/environments.json');

// base callback return object
const baseCallbackResult = {
  network: null,
  testnet: false,
  mainnet: false,
  custom: false,
};

// testnet result
const testnetObjectResult = Object.assign({}, baseCallbackResult, {
  testnet: true,
  network: 'testnet',
});

// testnet result
const mainnetObjectResult = Object.assign({}, baseCallbackResult, {
  mainnet: true,
  network: 'mainnet',
});

// custom result
const customObjectResult = Object.assign({}, baseCallbackResult, {
  custom: true,
  network: 'custom',
});

// default module export
function networkDetective(web3Provider, callback) {
  // set the current provider
  web3.setProvider(web3Provider);

  // NetworkSpy factory object
  const networkSpy = web3.eth.contract(JSON.parse(contracts.testnet.NetworkSpy.interface));

  // check testnet
  const testnetNetworkSpy = networkSpy.at(contracts.testnet.NetworkSpy.address);

  // check mainnet
  const mainnetNetworkSpy = networkSpy.at(contracts.mainnet.NetworkSpy.address);

  // testnet spy first
  testnetNetworkSpy.testnet((testnetError, testnetResult) => {
    if (testnetError) {
      return callback(testnetError, null);
    }

    // check if testnet
    if (testnetResult === true) {
      callback(null, testnetObjectResult);
    } else {
      // testnet spy first
      mainnetNetworkSpy.mainnet((mainnetError, mainnetResult) => {
        if (mainnetError) {
          return callback(mainnetError, null);
        }

        // check if mainnet or just custom
        if (mainnetResult === true) {
          callback(null, mainnetObjectResult);
        } else {
          callback(null, customObjectResult);
        }

        // consitent return
        return null;
      });
    }

    // consitent return
    return null;
  });
}


// export default object
module.exports = networkDetective;
