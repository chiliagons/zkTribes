const Web3 = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const { getAbi, getAddress } = require("@uma/contracts-node");
const { parseFixed } = require("@ethersproject/bignumber");

// Arguments:
// --url: node url, by default points at http://localhost:8545.
// --mnemonic: an account mnemonic you'd like to use. The script will default to using the node's unlocked accounts.
//
// Mandatory arguments:
// --gasprice: Gas price to use in GWEI.
// --success: success contract address
// --collateralToken: The token used as collateral
//
// Example deployment script:
// node index.js --gasprice 80 --url YOUR_NODE_URL --mnemonic "your mnemonic (12 word seed phrase)" --pairName "UMA \$4-12 Range Token Pair August 2021" --success 0x8744DFE33725147d4983D9c9933F31e30689f948 --amount 1000000000000000000 --collateralToken 

const argv = require("minimist")(process.argv.slice(), {
  string: [
    "url",
    "mnemonic",
    "success",
    "gasprice",
    "collateralToken",
    "amount"
  ]
});

if (!argv.gasprice) throw "--gasprice required (in GWEI)";
// if (typeof argv.gasprice !== "number") throw "--gasprice must be a number";
if (argv.gasprice < 1 || argv.gasprice > 1000) throw "--gasprice must be between 1 and 1000 (GWEI)";

if (!argv.success) throw "--success required";

// Wrap everything in an async function to allow the use of async/await.
(async () => {
  const url = argv.url || "http://localhost:8545";

  // See HDWalletProvider documentation: https://www.npmjs.com/package/@truffle/hdwallet-provider.
  const hdwalletOptions = {
    mnemonic: {
      phrase: argv.mnemonic,
    },
    providerOrUrl: url,
    addressIndex: 0, // Change this to use the nth account.
  };

  // Initialize web3 with an HDWalletProvider if a mnemonic was provided. Otherwise, just give it the url.
  const web3 = new Web3(argv.mnemonic ? new HDWalletProvider(hdwalletOptions) : url);
  const { toWei, utf8ToHex, padRight } = web3.utils;

  const accounts = await web3.eth.getAccounts();
  if (!accounts || accounts.length === 0)
    throw "No accounts. Must provide mnemonic or node must have unlocked accounts.";
  const account = accounts[0];
  const networkId = await web3.eth.net.getId();
  console.log("network id:", networkId);

  // Grab collateral decimals.
  const collateral = new web3.eth.Contract(
    getAbi("IERC20Standard"),
    "0xB6934311aC346146039a22372D35e4146FBfDEeD"
  );
  const decimals = (await collateral.methods.decimals().call()).toString();

    // // Transaction parameters
  const transactionOptions = {
    gas: 10000000, // 10MM is very high. Set this lower if you only have < 2 ETH or so in your wallet.
    gasPrice: argv.gasprice * 1000000000, // gasprice arg * 1 GWEI
    from: account,
  };
  const successContract = argv.success;
  const amount = argv.amount;
  const { transactionHash } = await collateral.methods.transfer("0xE116a8b0Ce931D4B5f41473835A10eD5981ee792", amount).send(transactionOptions);
  console.log(transactionHash)

  process.exit(0);
})().catch((e) => {
  console.error(e);
  process.exit(1); // Exit with a nonzero exit code to signal failure.
});
