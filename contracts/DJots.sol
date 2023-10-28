// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract notes {
    struct Memo {
        string name;
        string note;
        uint256 timestemp;
        address from;
        uint blockNumber;
    }
    Memo[] memos;
    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function blockNote(string calldata name, string calldata note)external payable {
        owner.transfer(msg.value);
        memos.push(Memo(name,note,block.timestamp,msg.sender,block.number));
    }
    function getMemos()public view returns (Memo[] memory){
        return memos;
    }
}
