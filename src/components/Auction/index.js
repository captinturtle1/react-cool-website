import React, { useEffect, useState } from 'react';
import AuctionIcon from '../../images/AuctionIcon.png';
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
  VideoBg,
  ServicesCard2
} from './ServicesElements';



const Services = () => {

  const options = {method: 'GET'};
  const [topBid, setTopBid] = useState(0);

  const getAuctionBid = () => {
    fetch('https://testnets-api.opensea.io/api/v1/asset/0x79705b87d3f6788cf14b3713db7e0263a433e69d/16', options)
  .then(response => response.json())
  .then(response => setTopBid(response.orders[0].current_price / 1000000000000000000))
  .catch(err => console.error(err));
  }
  getAuctionBid();

  const calculateTimeLeft = () => {
    let year = new Date('November 19, 21 4:51:00');
    const difference = +new Date(`${year}-10-1`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        D: Math.floor(difference / (1000 * 60 * 60 * 24)),
        H: Math.floor((difference / (1000 * 60 * 60)) % 24),
        M: Math.floor((difference / 1000 / 60) % 60),
        S: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{", "}
      </span>
    );
  });
  
  return (
    <ServicesContainer id='Auction'>
      <ServicesH1>Auction</ServicesH1>
      <ServicesCard>
        <ServicesWrapper>
          <ServicesIcon src={AuctionIcon} />
          <ServicesCard2>
            <ServicesH2>Time Left:</ServicesH2>
            <ServicesP>{timerComponents.length ? timerComponents : <span>Auction Over</span>}</ServicesP>
            <ServicesH2>Current Bid:</ServicesH2>
            <ServicesP>{topBid} ETH</ServicesP>
              <Btn>
                  <BtnLink target='_blank' aria-label='Place Bid' href='//testnets.opensea.io/assets/0x0f610844e2224c0b4b2dfbbc2d24ef9c398d7786/16'>Place a bid on OpenSea</BtnLink>
              </Btn>
        </ServicesCard2>
        </ServicesWrapper>
      </ServicesCard>
    </ServicesContainer>
  );
};

export default Services;
