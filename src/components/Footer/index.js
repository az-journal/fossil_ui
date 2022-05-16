import React from 'react';
import twitter from '../../images/twitter.svg';
import discord from '../../images/discord.svg';
import telegram from '../../images/telegram.svg';
import oiler from '../../images/oiler.svg';
import { FooterContainer,FooterIcons,FooterItem,Logo } from './FooterElements';



const Footer = () => {
  return (
      <Footer>
    <FooterContainer>
    <FooterIcons>
            <FooterItem>
                <a href='https://twitter.com/OilerNetwork'><img src={twitter} alt="twitter"/></a>
            </FooterItem>
            <FooterItem>
                <a href='https://discord.gg/6rS3rdUfqJ'><img src={discord} alt="discord"/></a>
            </FooterItem>
            <FooterItem>
                <a href='https://t.me/oiler_official'><img src={telegram} alt="telegram"/></a>
            </FooterItem>
        </FooterIcons>

        <Logo>
        <a href='https://oiler.network'><img src={oiler} alt="oiler"/></a>
        </Logo>
    </FooterContainer>
    </Footer>
  )
}

export default Footer