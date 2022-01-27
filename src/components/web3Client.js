import Web3 from 'web3';
import NFTContractBuild from './abi.json'

let selectedAccount;

let nftContract;

let isInitialized = false;

const contractAddress = "0x188D180E8eC95f8250696F236235a539c38A2766";

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
  let isPaused = nftContract.methods.paused().call();
  return isPaused;
};

export const checkIfMinted = async () => {
  if (!isInitialized) {
    await initWeb3();
  }
  let hasMinted = nftContract.methods.alreadyMinted(selectedAccount).call();
  return hasMinted;
};

export const checkIfIsOG = async () => {
  if (!isInitialized) {
    await initWeb3();
  }
  let isOG = nftContract.methods.isOG(selectedAccount).call();
  return isOG;

};

export const checkIfIsWhitelisted = async () => {
  if (!isInitialized) {
    await initWeb3();
  }
  let isWhitelisted = nftContract.methods.isWhitelisted(selectedAccount).call();
  return isWhitelisted;
};

export const getCurrentOgMintPassCount = async () => {
    if (!isInitialized) {
      await initWeb3();
    }
    let supply = nftContract.methods.currentOGSupply().call();
    return supply;
};

export const getCurrentRegularMintPassCount = async () => {
  if (!isInitialized) {
    await initWeb3();
  }
  let supply = nftContract.methods.currentRegularSupply().call();
  return supply;
};

export const mintToken = async () => {
    if (!isInitialized) {
      await initWeb3();
    }
    return nftContract.methods.mint(1).send({ from: selectedAccount, value: 80000000000000000 });
};

export const mintTokenOG = async () => {
    if (!isInitialized) {
        await initWeb3();
    }
    return nftContract.methods.mintOG(1).send({ from: selectedAccount, value: 40000000000000000});
};
