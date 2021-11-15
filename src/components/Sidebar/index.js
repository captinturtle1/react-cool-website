import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
  NavBtn,
  NavBtnLink,
  NavBtnLinked
} from './SidebarElements';
import {useEthers, shortenAddress} from "@usedapp/core";

const Sidebar = ({ isOpen, toggle }) => {
  
  const { activateBrowserWallet, account, deactivate} = useEthers()

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to='services'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Mint
          </SidebarLink>
          <SidebarLink
            to='signup'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            About
          </SidebarLink>
          <SidebarLink
            to='InfoArtist'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Artist
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            {!account && <SidebarRoute onClick={activateBrowserWallet}> Connect </SidebarRoute>}
            {account && <SidebarRoute onClick={deactivate}>{shortenAddress(account)}</SidebarRoute>}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};



export default Sidebar;
