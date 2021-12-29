require("dotenv").config()

const ganache = require("ganache-cli")
const { toBN } = require("web3").utils

const fork = `${process.env.TESTNET_BSCSCAN_RPC}@${process.env.TESTNET_BSCSCAN_BLOCK_NUMBER}`
const accounts = require("../config/accounts.js").map((account) => {
  return { secretKey: "0x" + account, balance: 10000000000000000000000 }
})
const server = ganache.server({
  fork,
  accounts,
  debug: true,
})

server.listen(8545, function (_err, blockchain) {
  console.log(blockchain.options)
  console.log(
    Object.values(blockchain.unlocked_accounts).map((el) => {
      return {
        address: el.address,
        balance: toBN(el.account.balance.toString("hex")).toString(),
        secretKey: el.secretKey.toString("hex"),
      }
    })
  )
})
