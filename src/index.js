#!/usr/bin/env node

const Web3 = require('web3');
const web3 = new Web3();

// default module export
function networkDetective(web3Provider) {
  // set the current provider
  web3.setProvider(web3Provider);
}

// export default object
module.exports = networkDetective;
