// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
contract App {
    struct Note {
        string name;
        string note;
        uint256 timestemp;
        address from;
        uint256 blockNumber;
    }
    Note[] notes;

    struct Pridiction {
        string name;
        string pridiction;
        uint256 timestemp;
        address from;
        uint256 blockNumber;
    }
    Pridiction[] pridictions;

    struct Article {
        string name;
        string fileName;
        string size;
        string lastModified;
        string hash;
        address sender;
        uint256 timestamp;
        uint256 blockNumber;
    }
    Article[] articles;

    struct Paper {
        string name;
        string fileName;
        string size;
        string lastModified;
        string hash;
        address sender;
        uint256 timestamp;
        uint256 blockNumber;
    }
    Paper[] researchPapers;

    function blockNote(string calldata name, string calldata note) external {
        notes.push(Note(name, note, block.timestamp, msg.sender, block.number));
    }

    function getMemos() public view returns (Note[] memory) {
        return notes;
    }

    function blockPridiction(string calldata name, string calldata pridiction)
        external
    {
        pridictions.push(
            Pridiction(
                name,
                pridiction,
                block.timestamp,
                msg.sender,
                block.number
            )
        );
    }

    function getPridictions() public view returns (Pridiction[] memory) {
        return pridictions;
    }

    function blockArticles(
        string calldata name,
        string calldata fileName,
        string calldata size,
        string calldata lastModified,
        string calldata articleHash
    ) external {
        articles.push(
            Article(
                name,
                fileName,
                size,
                lastModified,
                articleHash,
                msg.sender,
                block.timestamp,
                block.number
            )
        );
    }

    function getArticles() public view returns (Article[] memory) {
        return articles;
    }

    function blockResearchPaper(
        string calldata name,
        string calldata fileName,
        string calldata size,
        string calldata lastModified,
        string calldata paperHash
    ) external {
        researchPapers.push(
            Paper(
                name,
                fileName,
                size,
                lastModified,
                paperHash,
                msg.sender,
                block.timestamp,
                block.number
            )
        );
    }

    function getResearchPaper() public view returns (Paper[] memory) {
        return researchPapers;
    }
}
