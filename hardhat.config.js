require("dotenv").config()

require("@nomiclabs/hardhat-ethers")
require("@openzeppelin/hardhat-upgrades")

require("@nomiclabs/hardhat-etherscan")
require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("solidity-coverage")

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const PrivateKeys = require("./config/accounts")

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    dev: {
      url: "http://localhost:8545",
      accounts: PrivateKeys.dev,
    },
    bsctest: {
      url: process.env.TESTNET_BSCSCAN_RPC || "",
      accounts: PrivateKeys.bsctest,
    },
    bscstag: {
      url: process.env.MAINNET_BSCSCAN_RPC || "",
      accounts: PrivateKeys.bscstag,
    },
    bscprod: {
      url: process.env.MAINNET_BSCSCAN_RPC || "",
      accounts: PrivateKeys.bscprod,
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "BNB",
  },
  etherscan: {
    url: process.env.TESTNET_BSCSCAN_URL || "",
    apiKey: process.env.BSCSCAN_API,
  },
}
