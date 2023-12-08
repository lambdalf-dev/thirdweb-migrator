const hre = require("hardhat")

async function main() {
  const IMPLEMENTATION_NAME = "Migrated721"
  const FACTORY_NAME = "Migrated721Factory"

  const implementation_artifact = await hre.ethers.getContractFactory(IMPLEMENTATION_NAME)
  const implementation = await implementation_artifact.deploy()
  await implementation.deployed()
  // await implementation.initialize(
  //   hre.ethers.constants.AddressZero,
  //   hre.ethers.constants.AddressZero,
  //   hre.ethers.constants.AddressZero,
  //   0,
  //   0,
  //   "",
  //   "",
  //   ""
  // )
  console.log(`${ IMPLEMENTATION_NAME } deployed to ${ implementation.address }`)

  const factory_artifact = await hre.ethers.getContractFactory(FACTORY_NAME)
  const factory = await factory_artifact.deploy()
  await factory.deployed()
  console.log(`${ FACTORY_NAME } deployed to ${ factory.address }`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
