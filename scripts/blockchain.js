require("dotenv").config()

const ganache = require("ganache-cli")
const { toBN } = require("web3").utils

const port = process.env.FORKING_BSCSCAN_RPC_PORT
const fork = `${process.env.FORKING_BSCSCAN_RPC}@${process.env.FORKING_BSCSCAN_RPC_BLOCKNUM}`
const accounts = require("../config/accounts.js").dev.map((account) => {
  return { secretKey: "0x" + account, balance: 10000000000000000000000 }
})
const server = ganache.server({
  fork,
  accounts,
  debug: true,
})

server.listen(port, function (_err, blockchain) {
  const opts = {}

  Object.keys(blockchain.options).forEach(
    (el) => el !== "accounts" && (opts[el] = blockchain.options[el])
  )
  console.log(opts)
  Object.values(blockchain.unlocked_accounts).forEach((el) => {
    console.log({
      address: el.address,
      balance: toBN(el.account.balance.toString("hex")).toString(),
      secretKey: el.secretKey.toString("hex"),
    })
  })
})
