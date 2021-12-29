// SPDX-License-Identifier: MIT
pragma solidity >=0.8.9;

interface IDOOiTToken {
  function initialize(
    address owner_,
    string memory name_,
    string memory symbol_,
    uint256 totalSupply_,
    address router_,
    uint16 maxTxBps_,
    uint16 taxFeeBps_,
    uint16 liquidityFeeBps_,
    uint16 charityFeeBps_,
    address charityAddress_,
    address pinkAntiBot_
  ) external;
}
