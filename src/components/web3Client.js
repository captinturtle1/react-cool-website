import Web3 from 'web3';
import NFTContractBuild from './abi.json'
import OldNFTContractBuild from './oldAbi.json'
import { contractAddress, oldContractAddress } from './stuffThatChangesEverySeason';

let selectedAccount;

let nftContract;
let oldNftContract;

let isInitialized = false;

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
  oldNftContract = new web3.eth.Contract(OldNFTContractBuild, oldContractAddress);
  isInitialized = true;
}



export const checkIfPaused = async () => {
  if (!isInitialized) {
    await initWeb3();
  }
  let isPaused = nftContract.methods.hasPrivateSaleStarted().call();
  return isPaused;
};

export const checkIfClaimSaleStarted = async () => {
  if (!isInitialized) {
    await initWeb3();
  }
  let claimSaleStarted = nftContract.methods.hasClaimSaleStarted().call();
  return claimSaleStarted;
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

export const checkIfMintedRegularOLD = async () => {
  if (!isInitialized) {
    await initWeb3();
  }
  let hasMinted = oldNftContract.methods.balanceOf(selectedAccount, 1).call();
  return hasMinted;
};


export const checkIfMintedOGOLD = async () => {
  if (!isInitialized) {
    await initWeb3();
  }
  let hasMinted = oldNftContract.methods.balanceOf(selectedAccount, 2).call();
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

export const getCurrentOGMintPassCount = async () => {
  if (!isInitialized) {
    await initWeb3();
  }
  let supply = nftContract.methods.CLAIMED_OG_PASSES().call();
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

export const mintWithPass = async () => {
  if (!isInitialized) {
    await initWeb3();
  }
  return nftContract.methods.mintWithPass().send({ from: selectedAccount, value: 80000000000000000 });
};

export const mintWithPassOG = async () => {
  if (!isInitialized) {
      await initWeb3();
  }
  return nftContract.methods.mintWithPassOG().send({ from: selectedAccount, value: 40000000000000000});
};
