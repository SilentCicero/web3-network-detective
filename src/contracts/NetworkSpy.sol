pragma solidity ^0.4.2;

contract NetworkSpy {
  function NetworkSpy(bool _testnet) {
    // if testnet
    if (_testnet == true) {
      testnet = true;
      network = "testnet";
    }

    // if mainnet
    if (_testnet == false) {
      mainnet = true;
      network = "mainnet";
    }
  }

  string public network;
  bool public testnet;
  bool public mainnet;
}
