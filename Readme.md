## zkTribe - create mini guild's tribes backed by success tokens - hack.money submission 2022

Every project needs its tribe, zkTribe creation backed by collateral on L1, allows a project to create success tokens on L1 for a fixed period of time. During this period, investors can buy success tokens from the project and then convert them to a NFT tribe on zkSync. A tribe then has to choose when they want to foreclose their options contract and take profit as a group.

#### Status
1. Able to create the tribes on zkSync based on a call from Goerli (zkSync Bridge)
2. Able to create the success tokens for a project (need to whitelist with UMA first) on Kovan
3. Able to create source and target contracts for Kovan -> Goerli Success token movement (In Progress using connext)


#### TODO's
1. Create a polished UI for the tribes
2. Create the reverse flow out of zkSync and redeem the success tokens
3. Create a form for the projects DAO to create the success token buying interface
4. Create a form for a buyer/guardian to bridge and create the tribe

#### Lessons Learned
1. Learnt to use the zk Bridge and understand some nuances in the zk solidity structure
2. Learnt to get a hang of foundry ! YAY!
3. Understood great amount of financial creation options in UMA
4. Getting a hang of Amarok from connext


Testing
1. Create a token and whitelist with UMA
2. Navigate to launch-lsp and create a success token by calling index.js with following code (yarn install first)
node index.js --gasprice 80 --url https://kovan.infura.io/v3/ --mnemonic "" --pairName "LINK \$12 Success Token Pair August 2022" --expirationTimestamp 1661983200 --collateralPerPair 1000000000000000000 --priceIdentifier LINKUSD --longSynthName "LINK \$12 Success Token August 2022" --longSynthSymbol LINK-0822 --shortSynthName "LINK \$12 Success Short Token August 2022" --shortSynthSymbol LINK-0822s --collateralToken 0xa36085F69e2889c224210F603D836748e7dC0088 --fpl SimpleSuccessToken --strikePrice 12000000000000000000 --proposerReward 2000000000000000000 --optimisticOracleProposerBond 4000000000000000000
2a. Give approval to the contract 0x24e8ea057175ba92caffa6a7d6ca28c868efbe48
3. Goto xapp-api contract https://kovan.etherscan.io/address/0x24e8ea057175ba92caffa6a7d6ca28c868efbe48 on etherscan and call the update value (This will lock the tokens and then call the init tribe option on Goerli and in the next step it should call the zkSync)
4. Goto zkSync and users can mint tokens for paying a fee
5. Great you are now part of the tribe 