const assert = require('chai').assert;
const networkDetective = require('../index');
const Web3 = require('web3');

// setup testnet and mainnet provider
const testnetProvider = new Web3.providers.HttpProvider('https://morden.infura.io/');
const mainnetProvider = new Web3.providers.HttpProvider('https://mainnet.infura.io/');

describe('NetworkDetective', () => {
  describe('test networks', () => {
    it('should detect testnet Ethereum network', (done) => {
      networkDetective(testnetProvider, function (testnetError, testnetResult) {
        assert.isNull(testnetError);
        assert.isNotNull(testnetResult);
        assert.equal(testnetResult.network, 'testnet');
        assert.equal(testnetResult.testnet, true);
        assert.equal(testnetResult.custom, false);
        assert.equal(testnetResult.mainnet, false);
        done();
      });
    });

    it('should detect mainnet Ethereum network', (done) => {
      networkDetective(mainnetProvider, function (mainnetError, mainnetResult) {
        assert.isNull(mainnetError);
        assert.isNotNull(mainnetResult);
        assert.equal(mainnetResult.network, 'mainnet');
        assert.equal(mainnetResult.testnet, false);
        assert.equal(mainnetResult.custom, false);
        assert.equal(mainnetResult.mainnet, true);
        done();
      });
    });
  });
});
