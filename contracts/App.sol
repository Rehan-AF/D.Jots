// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;
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
        string artileTitle;
        string hash;
        address sender;
        uint256 timestamp;
        uint256 blockNumber;
    }
    Article[] articles;
    struct Paper {
        string name;
        string artileTitle;
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
        string calldata artileTitle,
        string calldata articleHash
    ) external {
        articles.push(
            Article(
                name,
                artileTitle,
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
        string calldata researchPaperTitle,
        string calldata paperHash
    ) external {
        researchPapers.push(
            Paper(
                name,
                researchPaperTitle,
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