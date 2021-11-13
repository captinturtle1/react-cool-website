import React, { useState } from 'react';
import { Button } from '../ButtonElements';
//import Video from '../../videos/video.mp4';
import gridExample from '../../images/fronPageCoolPicture.png'
import ReactPlayer from 'react-player'
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
      <ReactPlayer
      width="2560px"
      height="1440px"
      overflow="hidden"
      url='https://colorshiftbackground.s3.us-west-1.amazonaws.com/colorshift.mp4'
      playing={true}
      loop={true}
      muted={true}
      controls={false}
      />
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
