import React from 'react';
import {
  FaTwitter,
  FaMedium
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

import openseaIcon from '../../images/openseaIcon.png';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              .JPEG
            </SocialLogo>
            <WebsiteRights>.JPEG © 2021 ALL RIGHTS RESERVED.</WebsiteRights>
            <SocialMediaWrap>
              <SocialIcons>
                <SocialIconLink target='_blank' aria-label='Twitter' href='//www.twitter.com/jpegsquared'>
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink target='_blank' aria-label='Opensea' href='//opensea.io/collection/jpegmp7'>
                  <img src={openseaIcon} />
                </SocialIconLink>
                <SocialIconLink target='_blank' aria-label='Medium' href='//jpegsquared.medium.com/'>
                  <FaMedium />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
