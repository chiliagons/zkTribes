import { BigNumber, Contract, ethers, Wallet } from 'ethers';
import { Provider, utils } from 'zksync-web3';

const SUCCESSGENERARATOR_ABI = require('./successgenerator.json');
const SUCCESSGENERARATOR_ADDRESS = '0x4504E7d55B5AE7770b6157aE7f3bFE561e0514f7';
const SUCCESSNFT_ABI = require('./successnft.json');
const SUCCESSNFT_ADDRESS = '0x4504E7d55B5AE7770b6157aE7f3bFE561e0514f7';

async function main() {
    // Ethereum L1 provider
    const l1Provider = ethers.providers.getDefaultProvider('https://eth-goerli.alchemyapi.io/v2/nBgem7bIo0kuJ4dORiaiE_EMFKQgeETg');

    // Governor wallet
    const wallet = new Wallet('8ebf2ba719caf65e1c91ae8210b5d1b31bdc6a990581c5526f0081f27d43ffd4', l1Provider);

    const govcontract = new Contract(
        SUCCESSGENERARATOR_ADDRESS,
        SUCCESSGENERARATOR_ABI,
        wallet
    );

    // Getting the current address of the zkSync L1 bridge
    const l2Provider = new Provider('https://zksync2-testnet.zksync.dev');
    const zkSyncAddress = await l2Provider.getMainContractAddress();
    // Getting the `Contract` object of the zkSync bridge
    const zkSyncContract = new Contract(
        zkSyncAddress,
        utils.ZKSYNC_MAIN_ABI,
        wallet
    );

    // Encoding the tx data the same way it is done on Ethereum.
    const successNFTInterface = new ethers.utils.Interface(SUCCESSNFT_ABI);
    const data = successNFTInterface.encodeFunctionData("mintTo", [SUCCESSNFT_ADDRESS]);

    // The price of the L1 transaction requests depends on the gas price used in the call
    const gasPrice = await l1Provider.getGasPrice();

    // Here we define the constant for ergs limit .
    const ergsLimit = BigNumber.from(100);
    // Getting the cost of the execution.
    const baseCost = await zkSyncContract.executeBaseCost(
        gasPrice,
        ergsLimit,
        ethers.utils.hexlify(data).length,
        0,
        0
    );

    // Calling the L1 SUCCESSGENERARATOR contract.
    const tx = await govcontract.callZkSync(
        zkSyncAddress, 
        SUCCESSNFT_ADDRESS, 
        // data,
        ergsLimit,
        100,
        {
            // Passing the necessary ETH `value` to cover the fee for the operation
            value: baseCost,
            gasPrice
        }
    );

    // Waiting until the L1 tx is complete.
    await tx.wait();

    // Getting the TransactionResponse object for the L2 transaction corresponding to the 
    // execution call
    const l2Response = await l2Provider.getL2TransactionFromPriorityOp(tx);

    // The receipt of the L2 transaction corresponding to the call to the Increment contract
    const l2Receipt = await l2Response.wait();
    console.log(l2Receipt);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});