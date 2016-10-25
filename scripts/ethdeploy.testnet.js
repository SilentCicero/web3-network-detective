/* eslint-disable */
const ethdeployBase = require('./ethdeploy.base.js');

// new module
module.exports = Object.assign(ethdeployBase,{
  output: {
    environment: 'testnet',
    path: ethdeployBase.output.path,
  },
  module: function(deploy, contracts, environment){
    deploy(contracts.NetworkSpy, 1).then(function(networkSpyInstance){
      environment.log('Network Testnet Spy Deployed!');
    });
  },
});
