require("@nomiclabs/hardhat-solhint")
require("@nomicfoundation/hardhat-verify")
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
    mainnet: {
      url: `https://eth-mainnet.g.alchemy.com/v2/${ process.env.ALCHEMY_API_KEY }`,
      accounts: [ process.env.MAIN_DEV_PRIVATE_KEY ],
    },
    polygonMumbai: {
      url: `https://rpc-mumbai.maticvigil.com`,
      accounts: [process.env.TEST_DEV_PRIVATE_KEY]
    },
    polygon: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${ process.env.ALCHEMY_API_KEY }`,
      accounts: [ process.env.MAIN_DEV_PRIVATE_KEY ],
    },
    optimism: {
      url: `https://opt-mainnet.g.alchemy.com/v2/${ process.env.ALCHEMY_API_KEY }`,
      accounts: [ process.env.MAIN_DEV_PRIVATE_KEY ],
    },
  },
  etherscan: {
    apiKey: {
      goerli: process.env.ETHERSCAN_API_KEY,
      mainnet: process.env.ETHERSCAN_API_KEY,
      polygonMumbai: process.env.POLYGONSCAN_API_KEY,
      polygon: process.env.POLYGONSCAN_API_KEY,
    },
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
