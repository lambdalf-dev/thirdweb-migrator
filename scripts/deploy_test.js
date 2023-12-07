const hre = require("hardhat")

async function main() {
  const THIRDWEB_TOKEN_NAME = "TokenERC721"
  const IMPLEMENTATION_NAME = "Migrated721"
  const FACTORY_NAME = "Migrated721Factory"

  const ADMIN_ADDRESS     = process.env.TEST_DEV_ADDRESS                 // Address of the deployer
  const ROYALTY_RECIPIENT = ADMIN_ADDRESS                                // Address receiving royalties
  const ROYALTY_RATE      = 500                                          // Royalty rate, in bps (1% = 100)
  const SUPPLY            = 10                                           // Collection total supply
  const NAME              = "NFT Collection"                             // Collection name
  const SYMBOL            = "NFT"                                        // Collection symbol
  const BASE_URI          = "https://api.example.com/metadata/"          // Collection base metadata URI

  const thirdweb_token_artifact = await hre.ethers.getContractFactory(THIRDWEB_TOKEN_NAME)
  const thirdweb_token = await thirdweb_token_artifact.deploy(
    ADMIN_ADDRESS,
    NAME,
    SYMBOL,
    BASE_URI,
    [ADMIN_ADDRESS],
    ADMIN_ADDRESS,
    ROYALTY_RECIPIENT,
    ROYALTY_RATE,
    ADMIN_ADDRESS,
    ROYALTY_RATE
  )

  const implementation_artifact = await hre.ethers.getContractFactory(IMPLEMENTATION_NAME)
  const implementation = await implementation_artifact.deploy()
  await implementation.deployed()
  await implementation.initialize(
    hre.ethers.constants.AddressZero,
    hre.ethers.constants.AddressZero,
    hre.ethers.constants.AddressZero,
    0,
    0,
    "",
    "",
    ""
  )
  console.log(`${ IMPLEMENTATION_NAME } deployed to ${ implementation.address }`)

  const factory_artifact = await hre.ethers.getContractFactory(FACTORY_NAME)
  const factory = await factory_artifact.deploy()
  await factory.deployed()
  console.log(`${ FACTORY_NAME } deployed to ${ factory.address }`)

  const clone = await factory.deployClone(
    implementation.address,
    ADMIN_ADDRESS,
    thirdweb_token.address,
    ROYALTY_RECIPIENT,
    ROYALTY_RATE,
    SUPPLY,
    NAME,
    SYMBOL,
    BASE_URI
  )
  await clone.deployed()
  console.log(`Clone deployed to ${ clone.address }`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
