# Thirdweb Migrator

A tool for people to cheaply migrate out of their vulnerable Thirdweb NFT contract.

## Instructions

1. Start by locking your old contract with [Thirdweb mitigation tool](https://mitigate.thirdweb.com/)
2. Deploy the following contract with the address of your old contract as parameter.

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

## Contents

- `src`: The list of contracts included in the library.
- `lib`: A list of libraries necessary to run forge test suite.
- `test`: The foundry test suite for the repository.
