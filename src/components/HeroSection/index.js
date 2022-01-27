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
          <HeroH1>Pixel Wolves by Skylar</HeroH1>
          <HeroSB> .JPEG Season 5</HeroSB>
          <HeroP>
          Pixel Wolves by Skylar is a collection of generative wolves made up of varying traits and rarities. Each trait was hand drawn by the artist and was made in collaboration with .JPEG Squared for their season 5 membership pass. Each wolf grants access to the .JPEG Squared community until February 28, 2022.
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
