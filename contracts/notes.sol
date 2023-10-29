// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract MessageContract {
    event MessageSet(string message);

    function setMessage(string memory _message) public {
        emit MessageSet(_message);
    }
}