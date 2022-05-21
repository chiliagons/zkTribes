pragma solidity ^0.8.0;

// SPDX-License-Identifier: MIT OR Apache-2.0



import "./libraries/Auction.sol";
import "./libraries/Operations.sol";
import "./libraries/PriorityQueue.sol";
import "./libraries/PriorityModeLib.sol";
import "./libraries/CheckpointedPrefixSum.sol";

import "./Verifier.sol";

/// @dev expiration block counters for priority operations
/// @param heap Mapping from expiration block to the count of priority operations that are on heap.
/// @param bufferHeap Mapping from expiration block to the count of priority operations that are on **buffer** heap.
struct ExpiringOps {
    mapping(uint32 => uint256) heap;
    mapping(uint32 => uint256) bufferHeap;
}

struct DiamondCutStorage {
    bytes32 proposedDiamondCutHash;
    uint256 proposedDiamondCutTimestamp;
    uint256 lastDiamondFreezeTimestamp;
    uint256 currentProposalId;
    mapping(address => bool) securityCouncilMembers;
    mapping(address => uint256) securityCouncilMemberLastApprovedProposalId;
    uint256 securityCouncilEmergencyApprovals;
}

/// @dev storing all storage variables for zkSync facets
/// NOTE: It is used in a proxy, so it is possible to add new variables to the end
/// NOTE: but NOT to modify already existing variables or change their order
struct AppStorage {
    /// @notice Address which will exercise governance over the network i.e. add tokens, change validator set, conduct upgrades
    address networkGovernor;
    /// @notice List of permitted validators
    mapping(address => bool) validators;
    /// @dev Verifier contract. Used to verify aggregated proof for blocks
    Verifier verifier;
    /// @dev Root-chain balances (per owner and token address) to withdraw
    mapping(address => mapping(address => uint256)) pendingBalances;
    /// @notice Total number of executed blocks i.e. blocks[totalBlocksExecuted] points at the latest executed block (block 0 is genesis)
    uint32 totalBlocksExecuted;
    /// @notice Total number of proved blocks i.e. blocks[totalBlocksProved] points at the latest proved block
    uint32 totalBlocksVerified;
    /// @notice Total number of committed blocks i.e. blocks[totalBlocksCommitted] points at the latest committed block
    uint32 totalBlocksCommitted;
    /// @notice Total number of priority requests
    uint64 totalPriorityRequests;
    /// @dev Stored hashed StoredBlock for some block number
    mapping(uint32 => bytes32) storedBlockHashes;
    /// @dev History of processed priority operations complexity calculations
    CheckpointedPrefixSum.PrefixSum processedComplexityHistory;
    /// @dev History of spent amount of gas to move priority operations
    CheckpointedPrefixSum.PrefixSum movementOperationsGasUsage;
    /// @dev Priority Requests mapping (request id -> operation)
    Operations.StoredOperations storedOperations;
    /// @dev Common and Rollup priority queues
    mapping(Operations.OpTree => PriorityQueue.Queue) priorityQueue;
    /// @dev expiration block counters for priority operations
    ExpiringOps expiringOpsCounter;
    /// @dev current highest auction bid
    Auction.Bid currentMaxAuctionBid;
    /// @dev All the variables needed to control the contract in priority mode
    PriorityModeLib.State priorityModeState;
    /// @dev Storage of variables needed for diamond cut facet
    DiamondCutStorage diamondCutStorage;
}
