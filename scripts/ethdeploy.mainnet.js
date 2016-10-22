/* eslint-disable */
const ethdeployBase = require('./ethdeploy.base.js');

// new module
module.exports = Object.assign(ethdeployBase, {
  output: {
    environment: 'mainnet',
  },
  module: function(deploy, contracts, environment){
    deploy(contracts.NetworkSpy, 0).then(function(networkSpyInstance){
      environment.log('Network Testnet Spy Deployed!');
    });
  },
});
