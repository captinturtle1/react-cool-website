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
          <HeroH1>Metapack by Liam</HeroH1>
          <HeroSB>.JPEG Season 6</HeroSB>
          <HeroP>
          .JPEG Squared is excited to announce our fourth collaborative partnership under the World Of Art umbrella. We decided to work with an up and coming artist out of The Netherlands on a piece that would represent our sixth season. Deviating from the norm, this collection will be one single NFT dubbed "Metapack" and will represent the membership pass for season 6 along with a rendition created by the artist with inspiration taken from the Metakeys collections. Each NFT grants the owner access to our discord community and serves as a membership pass until the end of the season at which time the collection will transition from a membership pass to its own standalone collection. Each membership comes with access to our investment community, drop schedules, calls, support, giveaways, monitors and more. Please note that the royalties on all secondary sales go directly to the artist.
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
