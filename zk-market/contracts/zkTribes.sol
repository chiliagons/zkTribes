//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";

contract ZKTribes is ERC1155,Ownable,ERC1155Holder {
    uint256 public currentTokenId;

    mapping(string => uint256) public tribes;

    event TribeCreated(uint256 tokenId, string tribeName);
    event TribeJoined(address tribeMember, string tribeName);

    constructor() ERC1155("") {}

    //@dev This is to be called from across the zkBridge, we leave it unpermissioned for testing, later add onlyExecutor permissions
    function createTribe(string memory tribeName) public{
        uint256 newItemId = ++currentTokenId;
        tribes[tribeName] = newItemId;
        //create a certain number of tribe members, fixed for now can be changed later
        //and proportional to collateral backing
        _mint(address(this), newItemId, 10**3, "");
        emit TribeCreated(newItemId, tribeName);
    }

    //@dev for now transfer NFT when asked by a tribe member, later add fees and make the fees redeemable to original creator
    function joinTheTribe(string memory tribeName) public {
        _safeTransferFrom(address(this), msg.sender, tribes[tribeName], 1, "");
        emit TribeJoined(msg.sender, tribeName);
    }

    /**
    * @dev See {IERC165-supportsInterface}.
    */
    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC1155, ERC1155Receiver) returns (bool) {
        return
            interfaceId == type(IERC1155).interfaceId ||
            interfaceId == type(IERC1155MetadataURI).interfaceId ||
            super.supportsInterface(interfaceId);
    }
}
