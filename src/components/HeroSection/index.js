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
        <HeroContent>
          <HeroH1>Wolves by Georgi</HeroH1>
          <HeroSB> .JPEG Season 4</HeroSB>
          <HeroP>
          Wolves by Georgi is a collection of 125 wolves generated in varying styles. This marks the first NFT collection for GG and is in collaboration with .JPEG for the season 4 membership pass. Each pass grants holders access to the .JPEG community until January 25th, 2022.
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
