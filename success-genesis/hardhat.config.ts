import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "dotenv/config";
import { HardhatUserConfig, task } from "hardhat/config";


const accounts = {
  mnemonic:
    process.env.MNEMONIC ||
    "test test test test test test test test test test test test",
};

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, { ethers }) => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.7"
      }
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 500,
      },
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_APIKEY
  },
  typechain: {
    outDir: 'src/types',
    target: 'ethers-v5',
    alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
    externalArtifacts: ['externalArtifacts/*.json'], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
  },
  abiExporter: {
    path: './data/abi',
    clear: false,
    flat: true,
    spacing: 2
  }
};

if(process.env.MNEMONIC) {
  module.exports.networks = {
    goerli: {
      url: process.env.GOERLI_RPC || "https://eth-goerli.alchemyapi.io/v2/"+process.env.ALCHEMY_KEY,
      accounts,
    }
  };
}