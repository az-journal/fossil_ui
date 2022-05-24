import React from 'react';
import twitter from '../../images/twitter.svg';
import discord from '../../images/discord.svg';
import telegram from '../../images/telegram.svg';
import { Link } from 'react-router-dom';
import { Nav,NavbarContainer,MobileIcon,NavLogo,NavMenu,NavItem,NavLinks,Paragraph} from './NavbarElements';


const Navbar = ({toggle}) => {
  return (
   <>
<Nav>
    <NavbarContainer>
    <NavMenu>
            <NavItem>
                <NavLinks onClick={(e) => {
                    e.preventDefault();
                    window.open('https://twitter.com/OilerNetwork','_blank');
                    }} ><img src={twitter} alt="twitter" style={{ width: '35px', height:'35px' }}/></NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks onClick={(e) => {
                    e.preventDefault();
                    window.open('https://discord.gg/6rS3rdUfqJ','_blank');
                    }}><img src={discord} alt="discord" style={{ width: '35px', height:'35px' }}/></NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks onClick={(e) => {
                    e.preventDefault();
                    window.open('https://t.me/oiler_official','_blank');
                    }}><img src={telegram} alt="telegram" style={{ width: '25px', height:'25px' }}/></NavLinks>
            </NavItem>
            <Paragraph>© Copyright 2022 by Oiler | Terms of Service | Legal Notice | Risk Disclosure | Privacy Policy</Paragraph>
            
        </NavMenu>
    </NavbarContainer>
</Nav>

   </>
  )
}

export default Navbar;