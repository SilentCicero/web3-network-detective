/* eslint-disable */
const ethdeployBase = require('./ethdeploy.base.js');

// new module
module.exports = Object.assign(ethdeployBase, {
  output: {
    environment: 'testnet',
  },
  module: function(deploy, contracts, environment){
    deploy(contracts.NetworkSpy, true).then(function(networkSpyInstance){
      environment.log('Network Testnet Spy Deployed!');
    });
  },
});
