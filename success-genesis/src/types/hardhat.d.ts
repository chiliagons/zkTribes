/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IBridge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBridge__factory>;
    getContractFactory(
      name: "IDiamondCut",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDiamondCut__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IExecutor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IExecutor__factory>;
    getContractFactory(
      name: "IGetters",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGetters__factory>;
    getContractFactory(
      name: "IGovernance",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGovernance__factory>;
    getContractFactory(
      name: "IPriorityMode",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPriorityMode__factory>;
    getContractFactory(
      name: "IZkSync",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IZkSync__factory>;
    getContractFactory(
      name: "KeysWithPlonkVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KeysWithPlonkVerifier__factory>;
    getContractFactory(
      name: "Diamond",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Diamond__factory>;
    getContractFactory(
      name: "VerifierWithDeserialize",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VerifierWithDeserialize__factory>;
    getContractFactory(
      name: "PriorityModeLib",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PriorityModeLib__factory>;
    getContractFactory(
      name: "Utils",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Utils__factory>;
    getContractFactory(
      name: "Verifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Verifier__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "ERC721TokenReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721TokenReceiver__factory>;
    getContractFactory(
      name: "SuccessGenerator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SuccessGenerator__factory>;

    getContractAt(
      name: "IBridge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBridge>;
    getContractAt(
      name: "IDiamondCut",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDiamondCut>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IExecutor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IExecutor>;
    getContractAt(
      name: "IGetters",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGetters>;
    getContractAt(
      name: "IGovernance",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGovernance>;
    getContractAt(
      name: "IPriorityMode",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPriorityMode>;
    getContractAt(
      name: "IZkSync",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IZkSync>;
    getContractAt(
      name: "KeysWithPlonkVerifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KeysWithPlonkVerifier>;
    getContractAt(
      name: "Diamond",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Diamond>;
    getContractAt(
      name: "VerifierWithDeserialize",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VerifierWithDeserialize>;
    getContractAt(
      name: "PriorityModeLib",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PriorityModeLib>;
    getContractAt(
      name: "Utils",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Utils>;
    getContractAt(
      name: "Verifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Verifier>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "ERC721TokenReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721TokenReceiver>;
    getContractAt(
      name: "SuccessGenerator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SuccessGenerator>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
