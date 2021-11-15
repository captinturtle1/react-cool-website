import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const ServicesContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 768px) {
    height: 1000px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #191919;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 40px;
  align-items: center;
  max-height: 800px;
  padding: 50px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 444px) {
    padding-right: 5px;
    padding-left: 5px;
  }
`;

export const ServicesCard2 = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 40px;
  max-height: 800px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
`;

export const ServicesIcon = styled.img`
  padding-top: 0px;
  height: 300px;
  width: 300px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  
  @media screen and (max-width: 444px) {
    height: 200px;
    width: 200px;
  }

  @media screen and (max-width: 333px) {
    height: 150px;
    width: 150px;
  }
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #191919;
  margin-top: 150px;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;

  @media screen and (max-width: 333px) {
    font-size: .8rem;
  }
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  line-break: auto;
  margin-bottom: 10px;
  max-width 200px;

  @media screen and (max-width: 333px) {
    font-size: .6rem;
  }
`;

export const Btn = styled.nav`
  display: flex;
  align-items: center;
  padding: 15px 0px;
`;

export const BtnLink = styled.a`
  border-radius: 50px;
  background: #2986cc;
  white-space: nowrap;
  padding: 10px 22px;
  color: #f3f6f4;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #206BA3;
  }

  @media screen and (max-width: 333px) {
    font-size: .6rem;
  }
`;

export const BtnButNotButton = styled.div`
  background: #2986cc;
  white-space: nowrap;
  padding: 10px 22px;
  color: #f3f6f4;
  font-size: 16px;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`;

export const paragraph = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  max-width: 600px;
  z-index: 3;

  @media screen and (max-width: 768px) {
    font-size: 10;
  }

  @media screen and (max-width: 480px) {
    font-size: 2;
  }
`;

export const ghost = styled.div`

`;