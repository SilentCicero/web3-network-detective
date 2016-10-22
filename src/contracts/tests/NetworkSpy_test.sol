pragma solidity ^0.4.2;

import "dapple/test.sol";
import "NetworkSpy.sol";

contract NetworkSpy_test is Test {
    function test_testnet() {
      NetworkSpy target = new NetworkSpy(true);
      assertTrue(target.testnet());
      assertFalse(target.mainnet());
    }

    function test_mainnet() {
      NetworkSpy target = new NetworkSpy(false);
      assertTrue(target.mainnet());
      assertFalse(target.testnet());
    }
}
