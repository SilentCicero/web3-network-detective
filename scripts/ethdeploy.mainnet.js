/* eslint-disable */
const ethdeployBase = require('./ethdeploy.base.js');

// new module
module.exports = Object.assign(ethdeployBase, {
  output: {
    environment: 'mainnet',
    path: ethdeployBase.output.path,
  },
  module: function(deploy, contracts, environment){
    deploy(contracts.NetworkSpy, 0).then(function(networkSpyInstance){
      environment.log('Network Mainnet Spy Deployed!');
    });
  },
});
