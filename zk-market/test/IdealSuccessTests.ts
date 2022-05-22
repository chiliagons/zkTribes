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

describe("Tribe Token", function () {
  it("Should be able to mint a new token", async function () {
    const [owner] = await ethers.getSigners();

    const SNFT = await ethers.getContractFactory("ZKTribes");

    const sNFT = await SNFT.deploy();

    // const molochTribe = await sNFT.createTribe("Moloch");
    // molochTribe.wait();
    // let balanceOfContract = await sNFT.balanceOf(sNFT.address, 0);
    // console.log(balanceOfContract);

    // const tribeMember = await sNFT.joinTheTribe("Moloch");
    // tribeMember.wait();
    // let balanceOfOwner = await sNFT.balanceOf(owner.address, 0);
    // console.log(balanceOfOwner);


    // expect(await sNFT.totalSupply()).to.equal(ownerBalance);
  });
});