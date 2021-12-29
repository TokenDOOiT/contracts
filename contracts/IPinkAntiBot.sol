// SPDX-License-Identifier: MIT
// Dependency file: contracts/interfaces/IPinkAntiBot.sol

// pragma solidity >=0.5.0;
pragma solidity >=0.8.9;

interface IPinkAntiBot {
  function setTokenOwner(address owner) external;

  function onPreTransferCheck(
    address from,
    address to,
    uint256 amount
  ) external;
}
