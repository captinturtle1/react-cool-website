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
    fetch('https://api.opensea.io/api/v1/asset/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/9996', options)
  .then(response => response.json())
  .then(response => setTopBid(response.orders[0].current_price / 1000000000000000000))
  .catch(err => console.error(err));
  }
  getAuctionBid();

  const calculateTimeLeft = () => {
    let year = new Date('November 18, 21 00:00:00');
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
                  <BtnLink target='_blank' aria-label='Place Bid' href='//testnets.opensea.io/assets/0xe4a544fa2551f7d3bf5a9ced858b2d81c51fb56a/17'>Place a bid on OpenSea</BtnLink>
              </Btn>
        </ServicesCard2>
        </ServicesWrapper>
      </ServicesCard>
    </ServicesContainer>
  );
};

export default Services;
