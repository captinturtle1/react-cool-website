import React, { useEffect, useState } from 'react';
import hidden from '../../images/mintIcon.gif';
import hidden2 from '../../images/mintIcon2.gif';
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
  BtnButNotButton,
  paragraph,
  ghost,
  HeroBg,
  VideoBg
} from './ServicesElements';
import { checkIfPaused, getCurrentRegularMintPassCount, checkIfMintedRegular, checkIfMintedOG, checkIfIsOG, checkIfIsWhitelisted, mintToken, mintTokenOG } from '../web3Client'


const Services = () => {

  const [saleStatus, setSaleStatus] = useState(0);
  const [REGULARbalance, setRegularBalance] = useState(0);
  const [hasMinted, setHasMinted] = useState(0);
  const [isAddressOG, setIsAddressOG] = useState(false);
  const [isAddressWhitelisted, setIsAddressWhitelisted] = useState(false);
  const [runUpdateFunctions, setRunUpdateFunctions] = useState(true);
  


  const isSaleLive = () => {
    checkIfPaused().then(saleStatus => {
      setSaleStatus(saleStatus);
    }).catch((err) => {
      console.log(err);
    })
  }

  const isOG = () => {
    checkIfIsOG().then(isAddressOG => {
      if (isAddressOG > 0) {
        setIsAddressOG(true);
        console.log(`address is og`);
        return;
      }
      setIsAddressOG(false);
      console.log(`address is not og`);
    }).catch((err) => {
      console.log(err);
    })
  }

  const isWhitelisted = () => {
    checkIfIsWhitelisted().then(isAddressWhitelisted => {
      if (isAddressWhitelisted > 0) {
        setIsAddressWhitelisted(true);
        console.log(`address is whitelisted`);
        return;
      }
      setIsAddressWhitelisted(false);
      console.log(`address is not whitelisted`);
    }).catch((err) => {
      console.log(err);
    })
  }

  const getHasMinted = () => {
    checkIfMintedRegular().then(hasMinted => {
      if (hasMinted > 0) {
        setHasMinted(true);
        console.log(`has minted regular pass`);
        return;
      }
      if (hasMinted > 0) {
        setHasMinted(true);
        console.log(`has minted OG pass`);
        return;
      }
      setHasMinted(false);
      console.log(`has not minted regular pass`);
    }).catch((err) => {
      console.log(err);
    })
  }
  
  const mint = () => {
    mintToken().then(tx => {
      console.log(tx);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const mintOG = () => {
    mintTokenOG().then(tx => {
      console.log(tx);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const fetchRegularBalance = () => {
    getCurrentRegularMintPassCount().then(REGULARbalance => {
      setRegularBalance(REGULARbalance);
    }).catch(err => {
      console.log(err);
    })
  }

  const functionUpdates = () => {
    if (runUpdateFunctions == true) {
      setRunUpdateFunctions(false);
      isSaleLive();
      isOG();
      isWhitelisted();
      getHasMinted();
      fetchRegularBalance();
    }
  }
  functionUpdates();
  console.log("loop!");

  return (
    <ServicesContainer id='services'>
      <ServicesH1>Mint your wolf.</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={hidden} />
          <ServicesH2>OG Mint</ServicesH2>
          <ServicesP>
            {REGULARbalance}/150 Minted 
          </ServicesP>
          {saleStatus ? (
          <ghost>
          {!hasMinted ? (
            <Btn>
              {isAddressOG ? (
                <BtnLink onClick={() => mintOG()}>Mint (0.04)</BtnLink>)
              : (
                <BtnButNotButton>Not OG</BtnButNotButton>
              )}
            </Btn>
          ) : (
            <Btn>
              <BtnButNotButton>Minted</BtnButNotButton>
            </Btn>
          )}
          </ghost>
          ) : (
            <Btn>
              <BtnButNotButton>Not Live</BtnButNotButton>
            </Btn>
          )}
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={hidden2} />
          <ServicesH2>Regular Mint</ServicesH2>
          <ServicesP>
            {REGULARbalance}/150 Minted
          </ServicesP>
          {saleStatus ? (
          <ghost>
          {!hasMinted ? (
            <Btn>
              {isAddressWhitelisted ? (
                <BtnLink onClick={() => mint()}>Mint (0.08)</BtnLink>)
              : (
                <BtnButNotButton>Not Whitelisted</BtnButNotButton>
              )}
            </Btn>
          ) : (
            <Btn>
              <BtnButNotButton>Minted</BtnButNotButton>
            </Btn>
          )}
          </ghost>
          ) : (
            <Btn>
              <BtnButNotButton>Not Live</BtnButNotButton>
            </Btn>
            )}
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
