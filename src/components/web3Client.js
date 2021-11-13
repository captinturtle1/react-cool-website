import Web3 from 'web3';
import NFTContractBuild from './abi.json'

let selectedAccount;

let nftContract;

let isInitialized = false;

const contractAddress = "0x7Feb28A267255754FC06b81fB4886DFce1aFfe9A";

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

export const getCurrentOgMintPassCount = async () => {
    if (!isInitialized) {
        return nftContract.methods.currentOGSupply().call();
    }
};

export const mintToken = async () => {
    if (!isInitialized) {
        await initWeb3();
    }
    return nftContract.methods.mint(1).send({ gasLimit: 285000, from: selectedAccount, value: 80000000000000000 });
};

export const mintTokenOG = async () => {
    if (!isInitialized) {
        await initWeb3();
    }
    return nftContract.methods.mintOG(1).send({ gasLimit: 285000, from: selectedAccount, value: 40000000000000000});
};
