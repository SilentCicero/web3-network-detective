/* eslint arrow-body-style: [0] */
/* globals describe, it, before, beforeEach */

const contracts = require('../build/classes.json');
const chaithereum = require('chaithereum');

before(() => chaithereum.promise);

describe('NetworkSpy', () => {
  var networkSpyInstance = null; // eslint-disable-line

  it('successfully instantiates testnet Network spy', () => {
    return chaithereum.web3.eth.contract(JSON.parse(contracts.NetworkSpy.interface)).new.q(true, { data: contracts.NetworkSpy.bytecode }).should.eventually.be.contract.then((_networkSpyInstance) => {
      networkSpyInstance = _networkSpyInstance;
    }).should.be.fulfilled;
  });

  it('should be testnet not mainnet', () => {
    // return all chaithereum tests
    return chaithereum.web3.Q.all([
      networkSpyInstance.testnet.q().should.eventually.be.true,
      networkSpyInstance.mainnet.q().should.eventually.be.false,
    ]);
  });

  it('successfully instantiates mainnet NetworkSpy', () => {
    return chaithereum.web3.eth.contract(JSON.parse(contracts.NetworkSpy.interface)).new.q(false, { data: contracts.NetworkSpy.bytecode }).should.eventually.be.contract.then((_networkSpyInstance) => {
      networkSpyInstance = _networkSpyInstance;
    }).should.be.fulfilled;
  });

  it('should be mainnet not testnet', () => {
    // return all chaithereum tests
    return chaithereum.web3.Q.all([
      networkSpyInstance.testnet.q().should.eventually.be.false,
      networkSpyInstance.mainnet.q().should.eventually.be.true,
    ]);
  });
});
