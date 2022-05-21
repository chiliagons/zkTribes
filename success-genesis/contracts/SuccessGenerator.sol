//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// Importing zkSync contract interface
import "@matterlabs/zksync-contracts/contracts/interfaces/IZkSync.sol";
// Importing `Operations` library which has the `Operations.QueueType` and `Operations.OpTree` types
import "@matterlabs/zksync-contracts/contracts/libraries/Operations.sol";

contract SuccessGenerator {
    event KPIOptionMint(string);

    function callZkSync(
        address zkSyncAddress,
        address contractAddr,
        uint64 ergsLimit,
        uint256 amount
    ) external payable {
        // require(msg.sender == governor, "Only governor is allowed");
        bytes memory data = abi.encodeWithSignature("mintTo(address)",msg.sender); 
        IZkSync zksync = IZkSync(zkSyncAddress);
        emit KPIOptionMint("KPI Option Minted");
        zksync.requestExecute{value: msg.value}(contractAddr, data, ergsLimit, Operations.QueueType.Deque, Operations.OpTree.Full);
    }
}