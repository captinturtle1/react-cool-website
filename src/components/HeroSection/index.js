import React, { useState } from 'react';
import { Button } from '../ButtonElements';
import Video from '../../videos/colorshift.mp4';
import gridExample from '../../images/fronPageCoolPicture.png'
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
      <HeroContent3>
        <HeroContent>
          <HeroH1>The Wolfpack</HeroH1>
          <HeroSB>by PZXworld for .JPEG Season 3</HeroSB>
          <HeroP>
           third collection and the first of our World of Art initiative is “The Wolfpack” by PZXworld. The collection is made up of 125 wolves all with their own different styles and traits and serves as the membership pass for our 3rd season. If you are on the whitelist, you can go ahead and mint a pass starting on Nov. 18th over a 24 hour period.
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
        <HeroContent2>
          <Img src={gridExample}/>
        </HeroContent2>
      </HeroContent3>
    </HeroContainer>
  );
}

export default HeroSection;
