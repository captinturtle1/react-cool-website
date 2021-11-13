import React, { useEffect, useState } from 'react';
import Icon4 from '../../images/regularPass.png';
import Icon5 from '../../images/ogPass.png';
import hidden from '../../images/hidden.png';
import hiddenOG from '../../images/hiddenOG.png';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  Btn,
  BtnLink,
  paragraph
} from './ServicesElements';
import {useContractCall} from "@usedapp/core";
import { utils, ethers } from "ethers";
import abi from '../abi.json'
import Web3 from 'web3';
import { initWeb3, mintToken, getCurrentOgMintPassCount, mintTokenOG } from '../web3Client'

const Services = () => {

  const [minted, setMinted] = useState(false);
  const [mintedOG, setMintedOG] = useState(false);
  const {ogBalance} = useState(0);

  //initWeb3();

  const mint = () => {
    mintToken().then(tx => {
      console.log(tx);
      setMinted(true);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const mintOG = () => {
    mintTokenOG().then(tx => {
      console.log(tx);
      setMintedOG(true);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  /*const fetchBalance = () => [
    getCurrentOgMintPassCount().then(balance => {
      ogBalance(balance);
    }).catch(err => {
      console.og(err);
    })
  ]*/
  
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Mint your wolf.</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={hidden} />
          <ServicesH2>Regular Pass</ServicesH2>
          <ServicesP>
            0/105 Minted
          </ServicesP>
          <Btn>
            {!minted ? (
              <BtnLink onClick={() => mint()}>Mint (0.08)</BtnLink>
            ) : (
              <BtnLink>Minted</BtnLink>
            )}
          </Btn>

        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={hiddenOG} />
          <ServicesH2>OG Pass</ServicesH2>
          <ServicesP>
            0/20 Minted 
          </ServicesP>
          <Btn>
          {!mintedOG ? (
              <BtnLink onClick={() => mintOG()}>Mint (0.04)</BtnLink>
            ) : (
              <BtnLink>Minted</BtnLink>
            )}
          </Btn>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
