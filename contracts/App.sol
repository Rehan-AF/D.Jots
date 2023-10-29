// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;
contract App {
    struct Note {
        string name;
        string note;
        uint256 timestemp;
        address from;
        uint blockNumber;
    }
    Note[] notes;

    function blockNote(string calldata name, string calldata note)external {
        notes.push(Note(name,note,block.timestamp,msg.sender,block.number));
    }
    function getMemos()public view returns (Note[] memory){
        return notes;
    }
}