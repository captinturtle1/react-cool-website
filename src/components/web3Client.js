import Web3 from 'web3';
import NFTContractBuild from './abi.json'

let selectedAccount;

let nftContract;

let isInitialized = false;

const contractAddress = "0x0f96Cb47A5D4C083D2341C455A249e4a7e4E8Fab";

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

export const mintToken = async () => {
    if (!isInitialized) {
        await initWeb3();
    }
    return nftContract.methods.mint(selectedAccount).send({ from: selectedAccount});
};
