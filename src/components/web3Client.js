import Web3 from 'web3';
import NFTContractBuild from './abi.json'

let selectedAccount;

let nftContract;

let isInitialized = false;

const contractAddress = "0x3F22f2f5397fbb86B14ecA4927410e38B9B12060";

export const initWeb3 = async () => {
  let provider = window.ethereum;

  if (typeof provider !== 'undefined') {
    provider.request({ method: 'eth_requestAccounts' }).then(accounts => {
      selectedAccount = accounts[0];
      console.log(`Selected account is ${selectedAccount}`);
    }).catch(err => {
      console.log(err);
      return;
    })

    window.ethereum.on('accountsChanged', function (accounts){
      selectedAccount = accounts[0];
      console.log(`Selected account changed to ${selectedAccount}`);
    })
  }

  const web3 = new Web3(provider);

  const networkId = await web3.eth.net.getId();
  
  nftContract = new web3.eth.Contract(NFTContractBuild, contractAddress);
  isInitialized = true;
}

export const checkIfPaused = async () => {
  if (!isInitialized) {
    await initWeb3();
  }
  let isPaused = nftContract.methods.hasPrivateSaleStarted().call();
  return isPaused;
};

export const checkIfMintedRegular = async () => {
  if (!isInitialized) {
    await initWeb3();
  }
  let hasMinted = nftContract.methods.balanceOf(selectedAccount, 1).call();
  return hasMinted;
};

export const checkIfMintedOG = async () => {
  if (!isInitialized) {
    await initWeb3();
  }
  let hasMinted = nftContract.methods.balanceOf(selectedAccount, 2).call();
  return hasMinted;
};

export const checkIfIsOG = async () => {
  if (!isInitialized) {
    await initWeb3();
  }
  let isOG = nftContract.methods._ogList(selectedAccount).call();
  return isOG;

};

export const checkIfIsWhitelisted = async () => {
  if (!isInitialized) {
    await initWeb3();
  }
  let isWhitelisted = nftContract.methods._regularList(selectedAccount).call();
  return isWhitelisted;
};

export const getCurrentRegularMintPassCount = async () => {
  if (!isInitialized) {
    await initWeb3();
  }
  let supply = nftContract.methods.CLAIMED_PASSES().call();
  return supply;
};

export const mintToken = async () => {
    if (!isInitialized) {
      await initWeb3();
    }
    return nftContract.methods.regularMint().send({ from: selectedAccount, value: 80000000000000000 });
};

export const mintTokenOG = async () => {
    if (!isInitialized) {
        await initWeb3();
    }
    return nftContract.methods.ogMint().send({ from: selectedAccount, value: 40000000000000000});
};
