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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IGettersInterface extends ethers.utils.Interface {
  functions: {
    "getGovernor()": FunctionFragment;
    "getPendingBalance(address,address)": FunctionFragment;
    "getTotalBlocksCommitted()": FunctionFragment;
    "getTotalBlocksExecuted()": FunctionFragment;
    "getTotalBlocksVerified()": FunctionFragment;
    "getTotalPriorityRequests()": FunctionFragment;
    "getVerifier()": FunctionFragment;
    "isValidator(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getGovernor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPendingBalance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalBlocksCommitted",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalBlocksExecuted",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalBlocksVerified",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalPriorityRequests",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getVerifier",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isValidator", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "getGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPendingBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalBlocksCommitted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalBlocksExecuted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalBlocksVerified",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalPriorityRequests",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVerifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidator",
    data: BytesLike
  ): Result;

  events: {};
}

export class IGetters extends BaseContract {
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

  interface: IGettersInterface;

  functions: {
    getGovernor(overrides?: CallOverrides): Promise<[string]>;

    getPendingBalance(
      _address: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTotalBlocksCommitted(overrides?: CallOverrides): Promise<[number]>;

    getTotalBlocksExecuted(overrides?: CallOverrides): Promise<[number]>;

    getTotalBlocksVerified(overrides?: CallOverrides): Promise<[number]>;

    getTotalPriorityRequests(overrides?: CallOverrides): Promise<[BigNumber]>;

    getVerifier(overrides?: CallOverrides): Promise<[string]>;

    isValidator(
      _address: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  getGovernor(overrides?: CallOverrides): Promise<string>;

  getPendingBalance(
    _address: string,
    _token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTotalBlocksCommitted(overrides?: CallOverrides): Promise<number>;

  getTotalBlocksExecuted(overrides?: CallOverrides): Promise<number>;

  getTotalBlocksVerified(overrides?: CallOverrides): Promise<number>;

  getTotalPriorityRequests(overrides?: CallOverrides): Promise<BigNumber>;

  getVerifier(overrides?: CallOverrides): Promise<string>;

  isValidator(_address: string, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    getGovernor(overrides?: CallOverrides): Promise<string>;

    getPendingBalance(
      _address: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalBlocksCommitted(overrides?: CallOverrides): Promise<number>;

    getTotalBlocksExecuted(overrides?: CallOverrides): Promise<number>;

    getTotalBlocksVerified(overrides?: CallOverrides): Promise<number>;

    getTotalPriorityRequests(overrides?: CallOverrides): Promise<BigNumber>;

    getVerifier(overrides?: CallOverrides): Promise<string>;

    isValidator(_address: string, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    getGovernor(overrides?: CallOverrides): Promise<BigNumber>;

    getPendingBalance(
      _address: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalBlocksCommitted(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalBlocksExecuted(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalBlocksVerified(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalPriorityRequests(overrides?: CallOverrides): Promise<BigNumber>;

    getVerifier(overrides?: CallOverrides): Promise<BigNumber>;

    isValidator(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getGovernor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPendingBalance(
      _address: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalBlocksCommitted(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalBlocksExecuted(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalBlocksVerified(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalPriorityRequests(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVerifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isValidator(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
