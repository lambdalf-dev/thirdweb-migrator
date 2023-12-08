# Thirdweb Migrator

A tool for people to cheaply migrate out of their vulnerable Thirdweb NFT contract.

[Frontend repo](https://github.com/smitch88/thirdweb-migration-fe/tree/main)

## Instructions

1. Start by locking your old contract with [Thirdweb mitigation tool](https://mitigate.thirdweb.com/)
2. Deploy the following contract with the address of your old contract as parameter.
3. Don't forget to navigate to the contract and propagate token indexing with one or more calls to `indexTokens()` for the new collection to appear on marketplaces.

## Running the repo

Here's a brief guide as to how run this repo.

First, you make sure you have [foundry](https://github.com/foundry-rs/foundry) on your machine.
Then clone the repo and run:
```
yarn install
forge install
```

### Running the tests

To run the tests, you can run either of the following commands:

- `yarn test` runs the full test suite
- `yarn test:verbose` runs the full test suite, displaying all internal calls, etc...
- `forge test -vvvv --match-test <test case name>` runs a given test case, displaying all internal calls, etc...

### Linting the contracts with forge fmt

To run a linter check, you can run:

- `forge fmt <directory name>` runs forge fmt on the target directory

### Test coverage

To run coverage, run the following commands:

- `yarn coverage` runs a coverage report and generates an html coverage report

### Deployment

To deploy, run the following:

- `yarn deploy:goerli` deploys on Goerli testnet, this will also deploy a mock Thirdweb contract and a first clone targeting that mock contract
- `yarn deploy:mainnet` deploys on Ethereum mainnet, this will only deploy the Migrated721 implementation and factory

## Contents

- `src`: The list of contracts included in the library.
- `lib`: A list of libraries necessary to run forge test suite.
- `test`: The foundry test suite for the repository.

## Testnet deployment

- [Migrated721 implementation](https://goerli.etherscan.io/address/0xF1736E762F7f58D518693E1CdE5111Bbf626dDb3#code)
- [Migrated721 factory](https://goerli.etherscan.io/address/0xC535B94088df301288747d630AF8a346D2f5390D#code)