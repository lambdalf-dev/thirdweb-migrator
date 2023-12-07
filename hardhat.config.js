require("@nomiclabs/hardhat-solhint")
require("@nomiclabs/hardhat-etherscan")
require("@nomicfoundation/hardhat-chai-matchers")
require("hardhat-gas-reporter")
require("solidity-coverage")
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ process.env.ALCHEMY_API_KEY }`,
      accounts: [ process.env.TEST_DEV_PRIVATE_KEY ],
    },
    // mainnet: {
    //   url: `https://eth-mainnet.g.alchemy.com/v2/${ process.env.ALCHEMY_API_KEY }`,
    //   accounts: [ process.env.MAIN_PRIVATE_KEY ],
    // }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  solidity: {
    compilers: [
      {
        version: "0.8.21",
        settings: {
          viaIR: false,
          optimizer: {
            enabled: true,
            runs: 10000,
          },
          outputSelection: {
            "*": {
              "*": ["evm.assembly", "irOptimized"],
            },
          },
        },
      },
    ],
  }
}
