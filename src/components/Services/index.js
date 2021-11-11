import React, { useEffect, useState } from 'react';
import Icon4 from '../../images/regularPass.png';
import Icon5 from '../../images/ogPass.png';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  Btn,
  BtnLink
} from './ServicesElements';
import {useContractCall} from "@usedapp/core";
import { utils, ethers } from "ethers";
import abi from '../abi.json'
import Web3 from 'web3';
import { initWeb3, mintToken } from '../web3Client'

const Services = () => {

  const [minted, setMinted] = useState(false);

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
  
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Get access to the group.</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>Regular Pass</ServicesH2>
          <ServicesP>
            0.08 ETH
          </ServicesP>
          <ServicesP>
            0/105 Minted
          </ServicesP>
          <Btn>
            <BtnLink
            
            >Mint OG Pass</BtnLink>
          </Btn>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon5} />
          <ServicesH2>OG Pass</ServicesH2>
          <ServicesP>
            0.04 ETH
          </ServicesP>
          <ServicesP>
            0/20 Minted 
          </ServicesP>
          <Btn>
            {!minted ? (
              <BtnLink onClick={() => mint()}>Mint Regular Pass</BtnLink>
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
