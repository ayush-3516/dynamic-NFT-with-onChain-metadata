// Contract deployed to: 0x2eC683BD60598e88829fc61Be7B0f7CC23e0f693

const main = async () => {
  try {
    const nftContractFactory = await hre.ethers.getContractFactory("ChainBattles")
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();

    console.log("Contract Deployed to: ", nftContract.address);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

main();

