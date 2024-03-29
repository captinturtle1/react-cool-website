import React from 'react';
import { Button } from '../ButtonElements';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  SocialIconLink
} from './InfoElements';

const InfoSection = ({}) => {
  return (
    <>
      <InfoContainer lightBg={true} id={'signup'}>
        <InfoWrapper>
          <InfoRow imgStart={false}>
            <Column1>
              <TextWrapper>
                <TopLine>Join the Pack</TopLine>
                <Heading lightText={false}>Community First</Heading>
                <Subtitle darkText={true}>Our group is made up of members from all around the world who work together to ensure everyone is successful. In only a short period of time we have been able to amass over 5 million dollars in profit as well as fund numerous community driven projects like a DAO and the WOA initiative which helps up and coming artists.</Subtitle>
                <BtnWrap>
                  <SocialIconLink
                    target='_blank' aria-label='Our Medium' href='//jpegsquared.medium.com'>
                    Learn More
                  </SocialIconLink>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={require('../../images/jpeg2Fancy.png')} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
