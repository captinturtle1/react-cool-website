import React, { useState } from 'react';
import { Button } from '../ButtonElements';
import Video from '../../videos/colorshift.mp4';
//import gridExample from '../../images/fronPageCoolPicture.png'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroContent2,
  HeroContent3,
  HeroH1,
  HeroP,
  HeroSB,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Img
} from './HeroElements';

import { currentSeasonNumber, currentSeasonOrdinal } from '../stuffThatChangesEverySeason';

function HeroSection() {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
        <HeroContent>
          <HeroH1>.JPEG Squared Alpha</HeroH1>
          <HeroSB>Season {currentSeasonNumber}</HeroSB>
          <HeroP>
          We are proud to announce our {currentSeasonNumber}{currentSeasonOrdinal} season under the JPEG Squared banner. In order to gain access to our exclusive alpha community you will need to mint a membership pass below by burning a season {currentSeasonNumber - 1} membership pass. These NFT passes grant access to our discord community and serve as a membership pass until the end of the season at which time the collection will be burned to gain access to the following season. Each membership comes with access to our investment community, drop calendar, calls, support, tools, monitors, giveaways and much more. Please not that the royalties on secondary sales go back to the artist who designed the seasonal passes.
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to='services'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              primary='true'
              dark='true'
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Mint your pass {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
