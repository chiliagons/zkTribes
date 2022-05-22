// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.11;

import {IExecutor} from "nxtp/interfaces/IExecutor.sol";
import {IConnextHandler} from "nxtp/interfaces/IConnextHandler.sol";

// Importing zkSync contract interface
import {IZkSync} from "zksync/interfaces/IZkSync.sol";
// Importing `Operations` library which has the `Operations.QueueType` and `Operations.OpTree` types
import {Operations} from  "zksync/libraries/Operations.sol";


/**
 * @title Target
 * @notice A contrived example target contract.
 */
contract Target {
  event UpdateCompleted(address sender, uint256 newValue, bool permissioned);

  uint256 public value;

  // The address of Source.sol
  address public originContract;

  // The origin Domain ID
  uint32 public originDomain;

  // The address of the Connext Executor contract
  address public executor;

  // A modifier for permissioned function calls.
  // Note: This is an important security consideration. If your target
  //       contract function is meant to be permissioned, it must check 
  //       that the originating call is from the correct domain and contract.
  //       Also, check that the msg.sender is the Connext Executor address.
  modifier onlyExecutor() {
    require(
      IExecutor(msg.sender).originSender() == originContract && 
      IExecutor(msg.sender).origin() == originDomain &&
      msg.sender == executor,
      "Expected origin contract on origin domain called by Executor"
    );
    _;
  } 

  constructor(
    address _originContract, 
    uint32 _originDomain, 
    IConnextHandler _connext
  ) {
    originContract = _originContract;
    originDomain = _originDomain;
    executor = IConnextHandler(_connext).getExecutor();
  }

  // Unpermissioned function
  function updateValueUnpermissioned(uint256 newValue) external {
    value = newValue;

    emit UpdateCompleted(msg.sender, newValue, false); 
  }

  function callZkSync(
        address zkSyncAddress,
        address contractAddr,
        uint64 ergsLimit,
        uint256 amount
    ) external onlyExecutor{
        // require(msg.sender == governor, "Only governor is allowed");
        // bytes memory data = abi.encodeWithSignature("mintTo(address)",msg.sender); 
        // IZkSync zksync = IZkSync(zkSyncAddress);
        emit UpdateCompleted(msg.sender, amount, true); 

        // zksync.requestExecute{value: msg.value}(contractAddr, data, ergsLimit, Operations.QueueType.Deque, Operations.OpTree.Full);
    }
}
