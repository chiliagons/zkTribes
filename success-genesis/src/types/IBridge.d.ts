/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IBridgeInterface extends ethers.utils.Interface {
  functions: {
    "addCustomToken(address,string,string,uint8,uint8,uint8)": FunctionFragment;
    "addToken(address,uint8,uint8)": FunctionFragment;
    "addTokenBaseCost(uint256,uint8,uint8)": FunctionFragment;
    "deployContractBaseCost(uint256,uint256,uint32,uint32,uint8,uint8)": FunctionFragment;
    "depositBaseCost(uint256,uint8,uint8)": FunctionFragment;
    "depositERC20(address,uint256,address,uint8,uint8)": FunctionFragment;
    "depositETH(uint256,address,uint8,uint8)": FunctionFragment;
    "executeBaseCost(uint256,uint256,uint32,uint8,uint8)": FunctionFragment;
    "requestDeployContract(bytes,bytes,uint256,uint8,uint8)": FunctionFragment;
    "requestExecute(address,bytes,uint256,uint8,uint8)": FunctionFragment;
    "requestWithdraw(address,uint256,address,uint8,uint8)": FunctionFragment;
    "withdrawBaseCost(uint256,uint8,uint8)": FunctionFragment;
    "withdrawPendingBalance(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addCustomToken",
    values: [string, string, string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addToken",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addTokenBaseCost",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deployContractBaseCost",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "depositBaseCost",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositERC20",
    values: [string, BigNumberish, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositETH",
    values: [BigNumberish, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executeBaseCost",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "requestDeployContract",
    values: [BytesLike, BytesLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "requestExecute",
    values: [string, BytesLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "requestWithdraw",
    values: [string, BigNumberish, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawBaseCost",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawPendingBalance",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addCustomToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addTokenBaseCost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployContractBaseCost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositBaseCost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "depositETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeBaseCost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestDeployContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestExecute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawBaseCost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawPendingBalance",
    data: BytesLike
  ): Result;

  events: {
    "NewPriorityRequest(uint64,bytes)": EventFragment;
    "WithdrawPendingBalance(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewPriorityRequest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawPendingBalance"): EventFragment;
}

export type NewPriorityRequestEvent = TypedEvent<
  [BigNumber, string] & { serialId: BigNumber; opMetadata: string }
>;

export type WithdrawPendingBalanceEvent = TypedEvent<
  [string, BigNumber] & { zkSyncTokenAddress: string; amount: BigNumber }
>;

export class IBridge extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IBridgeInterface;

  functions: {
    addCustomToken(
      _token: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addToken(
      _token: string,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addTokenBaseCost(
      _gasPrice: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    deployContractBaseCost(
      _gasPrice: BigNumberish,
      _ergsLimit: BigNumberish,
      _bytecodeLength: BigNumberish,
      _calldataLength: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    depositBaseCost(
      _gasPrice: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    depositERC20(
      _token: string,
      _amount: BigNumberish,
      _zkSyncAddress: string,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositETH(
      _amount: BigNumberish,
      _zkSyncAddress: string,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeBaseCost(
      _gasPrice: BigNumberish,
      _ergsLimit: BigNumberish,
      _calldataLength: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    requestDeployContract(
      _bytecode: BytesLike,
      _calldata: BytesLike,
      _ergsLimit: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestExecute(
      _contractAddressL2: string,
      _calldata: BytesLike,
      _ergsLimit: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestWithdraw(
      _token: string,
      _amount: BigNumberish,
      _to: string,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawBaseCost(
      _gasPrice: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    withdrawPendingBalance(
      _owner: string,
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addCustomToken(
    _token: string,
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    _queueType: BigNumberish,
    _opTree: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addToken(
    _token: string,
    _queueType: BigNumberish,
    _opTree: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addTokenBaseCost(
    _gasPrice: BigNumberish,
    _queueType: BigNumberish,
    _opTree: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  deployContractBaseCost(
    _gasPrice: BigNumberish,
    _ergsLimit: BigNumberish,
    _bytecodeLength: BigNumberish,
    _calldataLength: BigNumberish,
    _queueType: BigNumberish,
    _opTree: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  depositBaseCost(
    _gasPrice: BigNumberish,
    _queueType: BigNumberish,
    _opTree: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  depositERC20(
    _token: string,
    _amount: BigNumberish,
    _zkSyncAddress: string,
    _queueType: BigNumberish,
    _opTree: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositETH(
    _amount: BigNumberish,
    _zkSyncAddress: string,
    _queueType: BigNumberish,
    _opTree: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeBaseCost(
    _gasPrice: BigNumberish,
    _ergsLimit: BigNumberish,
    _calldataLength: BigNumberish,
    _queueType: BigNumberish,
    _opTree: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  requestDeployContract(
    _bytecode: BytesLike,
    _calldata: BytesLike,
    _ergsLimit: BigNumberish,
    _queueType: BigNumberish,
    _opTree: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestExecute(
    _contractAddressL2: string,
    _calldata: BytesLike,
    _ergsLimit: BigNumberish,
    _queueType: BigNumberish,
    _opTree: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestWithdraw(
    _token: string,
    _amount: BigNumberish,
    _to: string,
    _queueType: BigNumberish,
    _opTree: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawBaseCost(
    _gasPrice: BigNumberish,
    _queueType: BigNumberish,
    _opTree: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  withdrawPendingBalance(
    _owner: string,
    _token: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addCustomToken(
      _token: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    addToken(
      _token: string,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    addTokenBaseCost(
      _gasPrice: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deployContractBaseCost(
      _gasPrice: BigNumberish,
      _ergsLimit: BigNumberish,
      _bytecodeLength: BigNumberish,
      _calldataLength: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositBaseCost(
      _gasPrice: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositERC20(
      _token: string,
      _amount: BigNumberish,
      _zkSyncAddress: string,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    depositETH(
      _amount: BigNumberish,
      _zkSyncAddress: string,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    executeBaseCost(
      _gasPrice: BigNumberish,
      _ergsLimit: BigNumberish,
      _calldataLength: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    requestDeployContract(
      _bytecode: BytesLike,
      _calldata: BytesLike,
      _ergsLimit: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    requestExecute(
      _contractAddressL2: string,
      _calldata: BytesLike,
      _ergsLimit: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    requestWithdraw(
      _token: string,
      _amount: BigNumberish,
      _to: string,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawBaseCost(
      _gasPrice: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawPendingBalance(
      _owner: string,
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "NewPriorityRequest(uint64,bytes)"(
      serialId?: null,
      opMetadata?: null
    ): TypedEventFilter<
      [BigNumber, string],
      { serialId: BigNumber; opMetadata: string }
    >;

    NewPriorityRequest(
      serialId?: null,
      opMetadata?: null
    ): TypedEventFilter<
      [BigNumber, string],
      { serialId: BigNumber; opMetadata: string }
    >;

    "WithdrawPendingBalance(address,uint256)"(
      zkSyncTokenAddress?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { zkSyncTokenAddress: string; amount: BigNumber }
    >;

    WithdrawPendingBalance(
      zkSyncTokenAddress?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { zkSyncTokenAddress: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    addCustomToken(
      _token: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addToken(
      _token: string,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addTokenBaseCost(
      _gasPrice: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deployContractBaseCost(
      _gasPrice: BigNumberish,
      _ergsLimit: BigNumberish,
      _bytecodeLength: BigNumberish,
      _calldataLength: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositBaseCost(
      _gasPrice: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositERC20(
      _token: string,
      _amount: BigNumberish,
      _zkSyncAddress: string,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositETH(
      _amount: BigNumberish,
      _zkSyncAddress: string,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeBaseCost(
      _gasPrice: BigNumberish,
      _ergsLimit: BigNumberish,
      _calldataLength: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    requestDeployContract(
      _bytecode: BytesLike,
      _calldata: BytesLike,
      _ergsLimit: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestExecute(
      _contractAddressL2: string,
      _calldata: BytesLike,
      _ergsLimit: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestWithdraw(
      _token: string,
      _amount: BigNumberish,
      _to: string,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawBaseCost(
      _gasPrice: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawPendingBalance(
      _owner: string,
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addCustomToken(
      _token: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addToken(
      _token: string,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addTokenBaseCost(
      _gasPrice: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deployContractBaseCost(
      _gasPrice: BigNumberish,
      _ergsLimit: BigNumberish,
      _bytecodeLength: BigNumberish,
      _calldataLength: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    depositBaseCost(
      _gasPrice: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    depositERC20(
      _token: string,
      _amount: BigNumberish,
      _zkSyncAddress: string,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositETH(
      _amount: BigNumberish,
      _zkSyncAddress: string,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeBaseCost(
      _gasPrice: BigNumberish,
      _ergsLimit: BigNumberish,
      _calldataLength: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    requestDeployContract(
      _bytecode: BytesLike,
      _calldata: BytesLike,
      _ergsLimit: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestExecute(
      _contractAddressL2: string,
      _calldata: BytesLike,
      _ergsLimit: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestWithdraw(
      _token: string,
      _amount: BigNumberish,
      _to: string,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawBaseCost(
      _gasPrice: BigNumberish,
      _queueType: BigNumberish,
      _opTree: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawPendingBalance(
      _owner: string,
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
