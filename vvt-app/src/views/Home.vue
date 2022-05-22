<template>
  <div class="flex flex-row" >
  <div class="grow w-14 h-14"></div>
  <div class="grow h-14">
   <div v-if="!mainLoading">
    <h1>🏰🏰🏰 Your Tribes -  {{greeting}} 🏰🏰🏰</h1>
    <div class="main-box">
      <!-- <div>
        Select token for payment: <select v-model="selectedTokenAddress" v-on:change="changeToken">
          <option v-for="token in tokens" v-bind:value="token.address" v-bind:key="token.address" >
            {{ token.symbol }}
          </option>
        </select>
      </div>
      <div class="balance" v-if="selectedToken">
        <p>Balance: <span v-if="retreivingBalance">Loading...</span>
        <span v-else>{{currentBalance}} {{selectedToken.symbol}}</span></p>
        <p>Expected fee: <span v-if="retreivingFee">Loading...</span>
        <span v-else>{{currentFee}} {{selectedToken.symbol}}</span>
        <button class="refresh-button" v-on:click="updateFee">Refresh</button>
        </p>
      </div>
      -->
    </div>
    </div>
    <div v-else>
<button class="inline-flex 
items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:outline-none" v-on:click="connectMetamask">Connect Metamask</button>
  </div>
  </div>
  </div>
  <div class="flex flex-row" >
  <div class="basis-1/4"></div>
  <div class="basis-2/4">
      <div class="content-center w-full max-w-[50] px-2 py-16 sm:px-0">
      <TabGroup>
        <TabList class="flex space-x-1 rounded-xl bg-[#879ED1]/90 p-1">
          <Tab
            v-for="category in Object.keys(categories)"
            as="template"
            :key="category"
            v-slot="{ selected }"
          >
            <button
              :class="[
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
              ]"
            >
              {{ category }}
            </button>
          </Tab>
        </TabList>

        <TabPanels class="mt-2">
          <TabPanel
            v-for="(posts, idx) in Object.values(categories)"
            :key="idx"
            :class="[
              'rounded-xl bg-white p-3',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
            ]"
          >
            <ul>
              <li
                v-for="post in posts"
                :key="post.id"
                class="relative rounded-md p-3 hover:bg-gray-100"
              >
                <h3 class="text-sm font-medium leading-5">
                  {{ post.title }}
                </h3>
                 
                 

                <ul
                  class="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500"
                >
                  <li>{{ post.date }}</li>
                  <li>&middot;</li>
                  <li>{{ post.commentCount }} members</li>
                  <li>&middot;</li>
                  <li>{{ post.shareCount }}$ collateral</li>
                </ul>

                <a
                  href="#"
                  :class="[
                    'absolute inset-0 rounded-md',
                    'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
                  ]"
                  class="text-right rounded-md border border-transparent px-5 py-3 text-base font-medium leading-6 text-blue transition duration-150 ease-in-out "
                  :disabled="!selectedToken || txStatus!=0 || retreivingFee" v-on:click="mintTo"
                >
                <span v-if="selectedToken && !txStatus">Mint & Join Tribe</span>
                                            <!--<span v-else-if="!selectedToken">Select token to pay fee first</span>-->
                                            <span v-else-if="txStatus == 1">Sending tx...</span>
                                            <span v-else-if="txStatus == 2">Waiting until tx is committed...</span>
                                            <span v-else-if="txStatus == 3">Updating the page...</span>
                                            <span v-else-if="retreivingFee">Updating the fee...</span>
                                            </a>
              </li>
            </ul>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
  </div>

  

</template>

<script setup>
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const categories = ref({
  "Recent Tribes": [
    {
      id: 1,
      title: 'Join the Link Marines!!!',
      date: '5h ago',
      commentCount: 5,
      shareCount: 200,
    },
    {
      id: 2,
      title: "Shiba Shiba Shiba! Lets go",
      date: '2h ago',
      commentCount: 3,
      shareCount: 1300,
    },
    {
      id: 3,
      title: "Moloch DAO",
      date: '1h ago',
      commentCount: 0,
      shareCount: 1200,
    },
  ],
  "Popular Quests": [
    {
      id: 1,
      title: 'Beta test Kitty Party Finance!',
      date: '3h ago',
      commentCount: 1,
      shareCount: 100,
    },
    {
      id: 2,
      title: "Join local meetup for zkSync",
      date: '2h ago',
      commentCount: 3,
      shareCount: 1222300,
    },
  ],
  "Next Drops": [
    {
      id: 1,
      title: 'Hope for Hop?',
      date: '2h ago',
      commentCount: 7,
      shareCount: 600,
    },
    {
      id: 2,
      title: "Hidden Hand on ROOK!",
      date: '2h ago',
      commentCount: 3,
      shareCount: 300,
    },
  ],
})
</script>
<script>
import { Contract, Web3Provider, Provider } from "zksync-web3";
import { ethers } from "ethers";

// eslint-disable-next-line
const GREETER_CONTRACT_ADDRESS = '0x313cA394dCf517711e001bc5cFEC036348B9512F'; // TODO: Add smart contract address
// eslint-disable-next-line
const GREETER_CONTRACT_ABI = 
[
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        }
      ],
      "name": "TransferBatch",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "TransferSingle",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "tribeName",
          "type": "string"
        }
      ],
      "name": "TribeCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "tribeMember",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "tribeName",
          "type": "string"
        }
      ],
      "name": "TribeJoined",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "value",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "URI",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "balanceInNative",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "accounts",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        }
      ],
      "name": "balanceOfBatch",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "tribeName",
          "type": "string"
        }
      ],
      "name": "createTribe",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "currentTokenId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "tribeName",
          "type": "string"
        }
      ],
      "name": "joinTheTribe",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeBatchTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "tribes",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "uri",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
const allowedTokens = 
[
    {
      "address": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      "decimals": 18,
      "name": "ETH",
      "symbol": "ETH"
    },
    {
      "address": "0xd35CCeEAD182dcee0F148EbaC9447DA2c4D449c4",
      "decimals": 6,
      "name": "USD Coin (goerli)",
      "symbol": "USDC"
    }
];
const syncProvider = new Provider("https://zksync2-testnet.zksync.dev");
let signer;
let myContract;
export default {
  name: 'App',
  data() {
    return {
      newGreeting: "",
      greeting: "unknown",
      tokens: allowedTokens,
      selectedToken: null,
      selectedTokenAddress: "",
      mainLoading: true,
      provider: null,
      signer: null,
      contract: null,
      canSubmit: true,
      // 0 stands for no status, i.e no tx has been sent
      // 1 stands for tx is beeing submitted to the operator
      // 2 stands for tx awaiting commit
      // 3 stands for updating the balance and greeting on the page
      txStatus: 0,
      retreivingFee: false,
      retreivingBalance: false,

      currentBalance: "",
      currentFee: ""
    }
  },
  methods: {
    initializeProviderAndSigner() {
    
    // Note that we still need to get the Metamask signer
    signer = (new Web3Provider(window.ethereum)).getSigner();

    console.log(GREETER_CONTRACT_ADDRESS, GREETER_CONTRACT_ABI)
    myContract = new Contract(
        GREETER_CONTRACT_ADDRESS,
        GREETER_CONTRACT_ABI,
        signer
    );  
    },
    async getGreeting() {
      return await myContract.balanceOf(signer.getAddress(),1);
    },
    async getFee() {
      // Getting the amount of gas (ergs) needed for one transaction
      const feeInGas = await myContract.estimateGas.joinTheTribe("Moloch",
          {
      value:ethers.utils.parseEther("0.000001")
      });
      // Getting the gas price per one erg. For now, it is the same for all tokens.
      const gasPriceInUnits = await syncProvider.getGasPrice();

      // To display the number of tokens in the human-readable format, we need to format them,
      // e.g. if feeInGas*gasPriceInUnits returns 500000000000000000 wei of ETH, we want to display 0.5 ETH the user
      return ethers.utils.formatUnits(feeInGas.mul(gasPriceInUnits), this.selectedToken.decimals);
    },
    async getBalance() {
      // Getting the balance for the signer in the selected token
      const balanceInUnits = await signer.getBalance(this.selectedToken.address);
      // To display the number of tokens in the human-readable format, we need to format them,
      // e.g. if balanceInUnits returns 500000000000000000 wei of ETH, we want to display 0.5 ETH the user
      return ethers.utils.formatUnits(balanceInUnits, this.selectedToken.decimals);
    },
    async mintTo() {
      console.log("Lets mint");
      this.txStatus = 1;
      try {
        const txHandle = await myContract.joinTheTribe("Moloch");
      console.log("Lets txHandle");

        // TODO: Submit the transaction
        this.txStatus = 2;

        await txHandle.wait();
        this.txStatus = 3;

        // Update greeting
        this.greeting = await this.getGreeting();

        this.retreivingFee = true;
        this.retreivingBalance = true;
        // Update balance and fee
        this.currentBalance = await this.getBalance();
        this.currentFee = await this.getFee();
      } catch (e) {
        alert(JSON.stringify(e));
      }

      this.txStatus = 0;
      this.retreivingFee = false;
      this.retreivingBalance = false;
    },

    updateFee() {
      this.retreivingFee = true;
      this.getFee().then((fee) => {
        this.currentFee = fee;
      })
      .catch(e => console.log(e))
      .finally(() => {
        this.retreivingFee = false;
      });
    },
    updateBalance() {
      this.retreivngBalance = true;
      this.getBalance().then((balance) => {
        this.currentBalance = balance;
      })
      .catch(e => console.log(e))
      .finally(() => {
        this.retreivngBalance = true;
      });
    },
    changeToken() {
      this.selectedToken = this.tokens.filter(t => t.address == this.selectedTokenAddress)[0];

      this.updateFee();
      this.updateBalance();
    },
    loadMainScreen() {
      this.initializeProviderAndSigner();

      if(!syncProvider || !signer) {
        alert("Follow the tutorial to learn how to connect to Metamask!");
        return;
      }
    console.log("Load Main screen called");
      this.getGreeting().then((greeting) => {
        this.greeting = greeting;
        this.mainLoading = false;
      });
    },  
    connectMetamask() {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(() => {
          if (+window.ethereum.networkVersion == 280) {
            this.loadMainScreen();
          } else {
            alert("Please switch network to zkSync!");
          }
        })
        .catch((e) => console.log(e)); 
    }
  }
}
</script>
