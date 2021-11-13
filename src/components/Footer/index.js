import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  iconIcon
} from './FooterElements';

import openseaIcon from '../../images/opensea-logo.png';

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
              <SocialIconLink target='_blank' aria-label='Twitter' href='//www.twitter.com/jpegsquared'>
              <FaTwitter />
                <iconIcon src={openseaIcon} />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
              </SocialIconLink>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
