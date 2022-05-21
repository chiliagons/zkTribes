import { expect } from "chai";
import { Wallet, utils  } from 'ethers'
import { Contract } from "@ethersproject/contracts";
import { 
  ethers, 
  network
} from "hardhat";
import { 
  describe, 
  before, 
  beforeEach, 
  it 
} from "mocha";

describe("Success Token", function () {
  it("Should be able to mint a new token", async function () {
    const [owner] = await ethers.getSigners();

    const SNFT = await ethers.getContractFactory("SuccessNFT");

    const sNFT = await SNFT.deploy("umaSuccess", "muah");

    // const ownerBalance = await sNFT.mintTo(owner.address, "0x00");
    // expect(await sNFT.totalSupply()).to.equal(ownerBalance);
  });
});