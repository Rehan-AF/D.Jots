require('@nomicfoundation/hardhat-toolbox');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.17',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/grEQ17GMCBkFgBBG70_LaSpQvlteGsKZ',
      accounts: [
        'dfb307ec4a233d70317c28d16e66224605def1b420c8f14263bc30c138847387',
      ],
    },
  },
};
// 0xbF985c6FC0F5b1710e6d15D6AB7DbC9bc4Ecd195
