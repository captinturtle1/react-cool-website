import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const ServicesContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #191919;

  @media screen and (max-height: 800px) {
    height: 800px;
  }

  @media screen and (max-width: 768px) {
    height: 1350px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;
  padding: 0px 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
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
  height: 325px;
  width: 300px;
  margin-bottom: 10px;
  
  @media screen and (max-width: 379px) {
    height: 243.75px;
    width: 225px;
  }

  @media screen and (max-width: 320px) {
    height: 162.5px;
    width: 150px;
  }
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-top: 150px;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const Btn = styled.nav`
  display: flex;
  align-items: center;
  padding: 15px 0px;
`;

export const BtnLink = styled(LinkR)`
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
  min-width: 600px;
  z-index: 3;

  @media screen and (max-width: 768px) {
    font-size: 10;
    min-width: 300px;
  }

  @media screen and (max-width: 480px) {
    font-size: 2;
  }
`;

export const ghost = styled.div`

`;