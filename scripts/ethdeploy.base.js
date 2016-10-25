/* eslint-disable */

const Tx = require('ethereumjs-tx');
const ethUtil = require('ethereumjs-util');

// import contract
const contracts = require('../src/contracts/build/classes.json');

// setup zero-client provider
const zeroClientProvider = function(host, port) {
  return {
    'type': 'zero-client',
    getAccounts: function(cb) {
      // dont include keys anywhere inside or around repo
      cb(null, [String(require('../../account.json').address)]);
    },
    signTransaction: function(rawTx, cb) {
      // dont include private key info anywhere around repo
      const privateKey = new Buffer(require('../../account.json').privateKey, 'hex');

      // tx construction
      const tx = new Tx(rawTx);
      tx.sign(privateKey);

      console.log(rawTx, ethUtil.bufferToHex(tx.serialize()));

      return;

      // callback with buffered serilized signed tx
      cb(null, ethUtil.bufferToHex(tx.serialize()));
    },
    'host': host,
    'port': port,
  };
};

module.exports = {
  output: {
    path: './src/contracts/build/environments.json',
  },
  entry: {
    testnet: contracts,
    mainnet: contracts,
  },
  config: {
    'defaultAccount': 0,
    'defaultGas': 2183728,
    'environments': {
      'testnet': {
        'provider': zeroClientProvider('https://morden.infura.io', 8545),
      },
      'mainnet': {
        'provider': zeroClientProvider('https://mainnet.infura.io', 8545),
      },
    },
  },
};
