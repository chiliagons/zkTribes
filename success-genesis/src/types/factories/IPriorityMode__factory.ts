/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPriorityMode, IPriorityModeInterface } from "../IPriorityMode";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum Operations.OpTree",
        name: "opTree",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint96",
        name: "bidAmount",
        type: "uint96",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "complexity",
        type: "uint256",
      },
    ],
    name: "NewPriorityModeAuctionBid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum PriorityModeLib.Epoch",
        name: "subEpoch",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "subEpochEndTimestamp",
        type: "uint128",
      },
    ],
    name: "NewPriorityModeSubEpoch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "PriorityModeActivated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_ethExpirationBlock",
        type: "uint32",
      },
    ],
    name: "activatePriorityMode",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint112",
        name: "_complexityRoot",
        type: "uint112",
      },
      {
        internalType: "enum Operations.OpTree",
        name: "_opTree",
        type: "uint8",
      },
    ],
    name: "placeBidForBlocksProcessingAuction",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "updatePriorityModeSubEpoch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IPriorityMode__factory {
  static readonly abi = _abi;
  static createInterface(): IPriorityModeInterface {
    return new utils.Interface(_abi) as IPriorityModeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPriorityMode {
    return new Contract(address, _abi, signerOrProvider) as IPriorityMode;
  }
}