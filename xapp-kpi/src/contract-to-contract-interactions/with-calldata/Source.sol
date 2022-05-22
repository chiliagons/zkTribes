// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity ^0.8.10;

import {IConnextHandler} from "nxtp/interfaces/IConnextHandler.sol";

/**
 * @title Source 
 * @notice Example contract for cross-domain calls (xcalls).
 */
contract Source {
  event UpdateInitiated(address to, uint256 newValue, bool permissioned);

  IConnextHandler public immutable connext;

  constructor(IConnextHandler _connext) {
    connext = _connext;
  }

  /**
   * Cross-domain update of a value on a target contract.
   @dev Initiates the Connext bridging flow with calldata to be used on the target contract.
   */
  function updateValue(
    address to,
    address asset,
    uint32 originDomain,
    uint32 destinationDomain,
    address zkSyncAddress,
    address contractAddr,
    uint64 ergsLimit,
    uint256 amount,
    bool permissioned
  ) external payable {

    bytes4 selector;
    bool forceSlow;
    bytes memory callData;

    // Encode function of the target contract (from Target.sol)
    if (permissioned) {
      selector = bytes4(keccak256("callZkSync(address,address,uint64,uint256)"));
      forceSlow = true;
      callData = abi.encodeWithSelector(selector, zkSyncAddress, contractAddr, ergsLimit, amount);
    } else {
      selector = bytes4(keccak256("updateValueUnpermissioned(uint256)"));
      forceSlow = false;
      callData = abi.encodeWithSelector(selector, 1);
    }

    IConnextHandler.CallParams memory callParams = IConnextHandler.CallParams({
      to: to,
      callData: callData,
      originDomain: originDomain,
      destinationDomain: destinationDomain,
      forceSlow: forceSlow,
      receiveLocal: false
    });

    IConnextHandler.XCallArgs memory xcallArgs = IConnextHandler.XCallArgs({
      params: callParams,
      transactingAssetId: asset,
      amount: 0,
      relayerFee: 0
    });

    connext.xcall(xcallArgs);

    emit UpdateInitiated(to, amount, permissioned);
  }
}
