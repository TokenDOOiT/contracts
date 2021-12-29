require("dotenv").config()

const HDWalletProvider = require("@truffle/hdwallet-provider")
const plugins = ["truffle-plugin-verify"]
const compilers = {
  solc: {
    version: "0.8.9",
    // parser: "solcjs",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
}

const networks = {
  dev: {
    host: "127.0.0.1",
    port: 8545,
    network_id: "*",
  },
  bsctest: {
    provider: new HDWalletProvider({
      privateKeys: require("./config/accounts").bsctest,
      providerOrUrl: process.env.TESTNET_BSCSCAN_RPC || "",
      gas: 8500000, // Gas sent with each transaction (default: ~6700000)
      gasPrice: 21000000000, // 20 gwei (in wei) (default: 100 gwei)
    }),
  },
  bscstag: {
    provider: new HDWalletProvider({
      privateKeys: require("./config/accounts").bscstag,
      providerOrUrl: process.env.MAINNET_BSCSCAN_RPC || "",
      gas: 8500000, // Gas sent with each transaction (default: ~6700000)
      gasPrice: 21000000000, // 20 gwei (in wei) (default: 100 gwei)
    }),
  },
  bscprod: {
    provider: new HDWalletProvider({
      privateKeys: require("./config/accounts").bscprod,
      providerOrUrl: process.env.MAINNET_BSCSCAN_RPC || "",
      gas: 8500000, // Gas sent with each transaction (default: ~6700000)
      gasPrice: 21000000000, // 20 gwei (in wei) (default: 100 gwei)
    }),
  },
}

/*
const db = {
  enabled: false,
  host: "127.0.0.1",
  adapter: {
    name: "sqlite",
    settings: {
      directory: ".db",
    },
  },
};
*/

module.exports = {
  plugins,
  // db,
  networks,
  compilers,
  api_keys: {
    etherscan: process.env.BSCSCAN_API,
    bscscan: process.env.BSCSCAN_API,
  },
}
