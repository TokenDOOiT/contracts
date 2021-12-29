# Solidity codebase

## Installation

```sh
# module installation
npm install

# environment variables, rpc urls, api keys, etc.
cp .env.example .env
vi .env # edit as you need

# wallet accounts by private key, deployment needs
cp config/accounts.example.js config/accounts.js
vi config/accounts.js # edit as you need
```

## Script runner

```sh
# reformat code
npm run pretty

# compile contract
npm run compile

# build contract
npm run build

# testing contract
npm run test

# deploy contract, using oz a @openzeppelin/cli moudule
npm run deploy

# deploy contract, using oz a @openzeppelin/cli moudule
npm run upgrade

# deploy contract with remix
npm run deploy:remix

# collect .sol file to verification
# don't forget to fill file references in config/contract-map.js
node script/verification.js
```
