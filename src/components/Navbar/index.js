import React from 'react';
import {FaBars} from 'react-icons/fa';
import twitter from '../../images/twitter.svg';
import discord from '../../images/discord.svg';
import telegram from '../../images/telegram.svg';
import oiler from '../../images/oiler.svg';
import { Link } from 'react-router-dom';
import { Nav,NavbarContainer,MobileIcon,NavLogo,NavMenu,NavItem,NavLinks} from './NavbarElements';

const Navbar = ({toggle}) => {
  return (
   <>
<Nav>
    <NavbarContainer>
    <NavMenu>
            <NavItem>
                <NavLinks to="https://twitter.com/OilerNetwork"><img src={twitter} alt="twitter" style={{ width: '50px', height:'50px' }}/></NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="https://discord.gg/6rS3rdUfqJ"><img src={discord} alt="discord" style={{ width: '50px', height:'50px' }}/></NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="https://t.me/oiler_official"><img src={telegram} alt="telegram" style={{ width: '40px', height:'40px' }}/></NavLinks>
            </NavItem>
        </NavMenu>
        <NavLogo to="https://www.oiler.network/"> <img src={oiler} alt="oiler" style={{ width: '200px', height:'50px' }}/></NavLogo>
    </NavbarContainer>
</Nav>
   </>
  )
}

export default Navbar;