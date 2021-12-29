// SPDX-License-Identifier: MIT

// solhint-disable func-name-mixedcase

// pragma solidity =0.8.4;
pragma solidity >=0.8.9;

import "./Initializable.sol";
import "./ContextUpgradeable.sol";

contract OwnableUpgradeable is Initializable, ContextUpgradeable {
  address private _owner;
  mapping(address => bool) internal authorizations;

  // event OwnershipTransferred(address owner);
  event OwnershipTransferred(
    address indexed previousOwner,
    address indexed newOwner
  );

  /**
   * @dev Initializes the contract setting the deployer as the initial owner.
   */
  function __Ownable_init() internal initializer {
    __Context_init_unchained();
    __Ownable_init_unchained();
  }

  function __Ownable_init_unchained() internal initializer {
    _setOwner(_msgSender());
    authorizations[_msgSender()] = true;
  }

  /**
   * Function modifier to require caller to be contract owner
   */
  modifier onlyOwner() {
    require(isOwner(_msgSender()), "Ownable: !OWNER");
    _;
  }

  /**
   * Function modifier to require caller to be authorized
   */
  modifier authorized() {
    require(isAuthorized(msg.sender), "Ownable: !AUTHORIZED");
    _;
  }

  /**
   * Authorize address. Owner only
   */
  function authorize(address account) public onlyOwner {
    authorizations[account] = true;
  }

  /**
   * Remove address' authorization. Owner only
   */
  function unauthorize(address account) public onlyOwner {
    authorizations[account] = false;
  }

  /**
   * Return owner's address
   */
  function owner() public view returns (address) {
    return _owner;
  }

  /**
   * Check if address is owner
   */
  function isOwner(address account) public view returns (bool) {
    return account == _owner;
  }

  function _setOwner(address newOwner) private {
    address oldOwner = _owner;
    _owner = newOwner;
    authorizations[newOwner] = true;
    emit OwnershipTransferred(oldOwner, newOwner);
  }

  /**
   * Return address' authorization status
   */
  function isAuthorized(address account) public view returns (bool) {
    return authorizations[account];
  }

  /**
   * Transfer ownership to new address. Caller must be owner. Leaves old owner authorized
   */
  function transferOwnership(address payable newOwner) public onlyOwner {
    require(newOwner != address(0), "Ownable: Zero address");
    _setOwner(newOwner);
  }

  uint256[49] private __gap;
}
