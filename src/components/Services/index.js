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
  BtnButNotButton,
  paragraph,
  ghost,
  HeroBg,
  VideoBg
} from './ServicesElements';
import { checkIfPaused, getCurrentOgMintPassCount, getCurrentRegularMintPassCount, checkIfMinted, checkIfIsOG, checkIfIsWhitelisted, mintToken, mintTokenOG } from '../web3Client'
import Video from '../../videos/colorshift.mp4';


const Services = () => {

  const [saleStatus, setSaleStatus] = useState(0);
  const [OGbalance, setOGBalance] = useState(0);
  const [REGULARbalance, setRegularBalance] = useState(0);
  const [hasMinted, setHasMinted] = useState(0);
  const [isAddressOG, setIsAddressOG] = useState(false);
  const [isAddressWhitelisted, setIsAddressWhitelisted] = useState(false);
  


  const isSaleLive = () => {
    checkIfPaused().then(saleStatus => {
      setSaleStatus(saleStatus);
    }).catch((err) => {
      console.log(err);
    })
  }
  isSaleLive();

  const isOG = () => {
    checkIfIsOG().then(isAddressOG => {
      setIsAddressOG(isAddressOG);
    }).catch((err) => {
      console.log(err);
    })
  }
  isOG();

  const isWhitelisted = () => {
    checkIfIsWhitelisted().then(isAddressWhitelisted => {
      setIsAddressWhitelisted(isAddressWhitelisted);
    }).catch((err) => {
      console.log(err);
    })
  }
  isWhitelisted();

  const getHasMinted = () => {
    checkIfMinted().then(hasMinted => {
      setHasMinted(hasMinted);
    }).catch((err) => {
      console.log(err);
    })
  }
  getHasMinted();
  
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

  const fetchOGBalance = () => [
    getCurrentOgMintPassCount().then(OGbalance => {
      setOGBalance(OGbalance);
      console.log("fetchingOGBalance");
    }).catch(err => {
      console.log(err);
    })
  ]
  fetchOGBalance();

  const fetchRegularBalance = () => [
    getCurrentRegularMintPassCount().then(REGULARbalance => {
      setRegularBalance(REGULARbalance);
      console.log("fetchingBalance");
    }).catch(err => {
      console.log(err);
    })
  ]
  fetchRegularBalance();

  

  return (
    <ServicesContainer id='services'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <ServicesH1>Mint your wolf.</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={hiddenOG} />
          <ServicesH2>OG Pass</ServicesH2>
          <ServicesP>
            {OGbalance}/20 Minted 
          </ServicesP>
          {!saleStatus ? (
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
          <ServicesIcon src={hidden} />
          <ServicesH2>Regular Pass</ServicesH2>
          <ServicesP>
            {REGULARbalance}/105 Minted
          </ServicesP>
          {!saleStatus ? (
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
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
    </ServicesContainer>
  );
};

export default Services;
