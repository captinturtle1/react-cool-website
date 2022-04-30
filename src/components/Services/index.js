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
import {
  checkIfPaused,
  checkIfClaimSaleStarted,
  getCurrentRegularMintPassCount,
  getCurrentOGMintPassCount,
  checkIfMintedRegular,
  checkIfMintedOG,
  checkIfMintedRegularOLD,
  checkIfMintedOGOLD,
  checkIfIsOG,
  checkIfIsWhitelisted,
  mintToken,
  mintTokenOG,
  mintWithPass,
  mintWithPassOG
} from '../web3Client'


const Services = () => {

  const [saleStatus, setSaleStatus] = useState(false);
  const [claimStatus, setClaimStatus] = useState(false);
  const [REGULARbalance, setRegularBalance] = useState(0);
  const [OGbalance, setOGBalance] = useState(0);
  const [hasMinted, setHasMinted] = useState(false);
  const [hasMintedOG, setHasMintedOG] = useState(false);
  const [hasMintedOLD, setHasMintedOLD] = useState(false);
  const [hasMintedOGOLD, setHasMintedOGOLD] = useState(false);
  const [isAddressOG, setIsAddressOG] = useState(false);
  const [isAddressWhitelisted, setIsAddressWhitelisted] = useState(false);
  const [runUpdateFunctions, setRunUpdateFunctions] = useState(true);
  const [isClaimTabOpen, setIsClaimTabOpen] = useState(true);
  const [isApprovalSet, setIsApprovalSet] = useState(false);
  


  const isSaleLive = () => {
    checkIfPaused().then(saleStatus => {
      setSaleStatus(saleStatus);
    }).catch((err) => {
      console.log(err);
    })
  }

  const isClaimLive = () => {
    checkIfClaimSaleStarted().then(claimStatus => {
      setClaimStatus(claimStatus);
    }).catch((err) => {
      console.log(err);
    })
  }

  const isOG = () => {
    checkIfIsOG().then(isAddressOG => {
      if (isAddressOG > 0) {
        setIsAddressOG(true);
        setIsClaimTabOpen(false);
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
        setIsClaimTabOpen(false);
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
      console.log(`has minted ${hasMinted} regular pass`);
      if (hasMinted > 0) {
        setHasMinted(true);
        return;
      }
      setHasMinted(false);
    }).catch((err) => {
      console.log(err);
    })
  }

  const getHasMintedOG = () => {
    checkIfMintedOG().then(hasMintedOG => {
      console.log(`has minted ${hasMintedOG} OG pass`);
      if (hasMintedOG > 0) {
        setHasMintedOG(true);
        return;
      }
      setHasMinted(false);
    }).catch((err) => {
      console.log(err);
    })
  }

  const getHasMintedOLD = () => {
    checkIfMintedRegularOLD().then(hasMintedOLD => {
      console.log(`has minted ${hasMintedOLD} OLD regular pass`);
      if (hasMintedOLD > 0) {
        setHasMintedOLD(true);
        return;
      }
      setHasMintedOLD(false);
    }).catch((err) => {
      console.log(err);
    })
  }

  const getHasMintedOGOLD = () => {
    checkIfMintedOGOLD().then(hasMintedOGOLD => {
      console.log(`has minted ${hasMintedOGOLD} OLD OG pass`);
      if (hasMintedOGOLD > 0) {
        setHasMintedOGOLD(true);
        return;
      }
      setHasMintedOGOLD(false);
    }).catch((err) => {
      console.log(err);
    })
  }
  
  const mint = () => {
    mintToken().then(tx => {
      console.log(tx);
      setRunUpdateFunctions(true);
      functionUpdates();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const mintOG = () => {
    mintTokenOG().then(tx => {
      console.log(tx);
      setRunUpdateFunctions(true);
      functionUpdates();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const mintWPass = () => {
    mintWithPass().then(tx => {
      console.log(tx);
      setRunUpdateFunctions(true);
      functionUpdates();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const mintWPassOG = () => {
    mintWithPassOG().then(tx => {
      console.log(tx);
      setRunUpdateFunctions(true);
      functionUpdates();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const fetchRegularBalance = () => {
    getCurrentRegularMintPassCount().then(REGULARbalance => {
      getCurrentOGMintPassCount().then(OGbalance => {
        setRegularBalance(REGULARbalance - OGbalance);
      }).catch(err => {
        console.log(err);
      })
    }).catch(err => {
      console.log(err);
    })
  }

  const fetchOGBalance = () => {
    getCurrentOGMintPassCount().then(OGbalance => {
      setOGBalance(OGbalance);
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
      getHasMintedOG();
      getHasMintedOLD();
      getHasMintedOGOLD();
      fetchRegularBalance();
      fetchOGBalance();
      isClaimLive();
    }
  }
  functionUpdates();
  console.log("loop!");

  return (
    <ServicesContainer id='services'>
      <ServicesH1>Mint your wolf.</ServicesH1>
      {isClaimTabOpen ? (
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={hidden} />
          <ServicesH2>OG Mint</ServicesH2>
          <ServicesP>
            {OGbalance}/16 Minted 
          </ServicesP>
          {claimStatus ? (
            <ghost>
              {hasMintedOGOLD ? (
                <Btn>
                  <BtnLink onClick={() => mintWPassOG()}>Mint (0.04)</BtnLink>
                </Btn>
              ) : (
                <Btn>
                  <BtnButNotButton>No pass to burn</BtnButNotButton>
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
            {REGULARbalance}/134 Minted
          </ServicesP>
          {claimStatus ? (
            <ghost>
              {hasMintedOLD ? (
                <Btn>
                  <BtnLink onClick={() => mintWPass()}>Mint (0.08)</BtnLink>
                </Btn>
              ) : (
                <Btn>
                  <BtnButNotButton>No pass to burn</BtnButNotButton>
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
      ) : (
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={hidden} />
          <ServicesH2>OG Mint</ServicesH2>
          <ServicesP>
            {OGbalance}/16 Minted 
          </ServicesP>
          {saleStatus ? (
            <ghost>
              {!hasMinted ? (
                <Btn>
                  {isAddressOG ? (
                    <BtnLink onClick={() => mintOG()}>Mint (0.04)</BtnLink>
                  ) : (
                    <BtnButNotButton>Not on Whitelist</BtnButNotButton>
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
              {!hasMintedOG ? (
                <Btn>
                  {isAddressWhitelisted ? (
                    <BtnLink onClick={() => mint()}>Mint (0.08)</BtnLink>
                  ) : (
                    <BtnButNotButton>Not on Whitelist</BtnButNotButton>
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
      )}
    </ServicesContainer>
  );
};

export default Services;
