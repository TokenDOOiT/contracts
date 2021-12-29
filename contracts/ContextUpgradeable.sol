// solhint-disable no-empty-blocks

// SPDX-License-Identifier: MIT
// Dependency file: @openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol

pragma solidity >=0.8.9;

// import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "./Initializable.sol";

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract ContextUpgradeable is Initializable {
  // solhint-disable-next-line func-name-mixedcase
  function __Context_init() internal initializer {
    __Context_init_unchained();
  }

  // solhint-disable-next-line func-name-mixedcase
  function __Context_init_unchained() internal initializer {}

  function _msgSender() internal view virtual returns (address) {
    return msg.sender;
  }

  function _msgData() internal view virtual returns (bytes calldata) {
    return msg.data;
  }

  uint256[50] private __gap;
}
