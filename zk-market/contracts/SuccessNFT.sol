//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./ERC721.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract SuccessNFT is ERC721 {
    uint256 public currentTokenId;
    // create a public mapping between 
    // token id --> keccak256(amount of success token, address of underlying, other success token params)
    mapping(uint256 => bytes32) public successHashOfToken;
    mapping(uint256 => uint256) public tokenPrice;

    event MarketOrder(uint256 tokenId, uint256 price);

    constructor() ERC721("Uma Success", "SUMA") {}

    //TODO: Add ownership related modifier 
    function mintTo(address recipient) public returns (uint256) {
        uint256 newItemId = ++currentTokenId;
        _mint(recipient, newItemId);
        tokenPrice[newItemId] = 100;// in future pass this as an argument calculated from the data
        return newItemId;
    }

    function tokenURI(uint256 id) public view virtual override returns (string memory) {
        return Strings.toString(id);
    }

    //naive marketplace
    function purchaseHigher(uint256 itemId) public payable returns (bool success)
    {
        // reject payments of 0 ETH
        require(msg.value == 0, "Not enuf eth");
        // Buy at a higher price then the last price
        if(msg.value > tokenPrice[itemId]) {
            _transfer(ownerOf(itemId), msg.sender, itemId);
            emit MarketOrder(itemId, msg.value);
            return true;
        }
        else 
        return false;
    }
}
