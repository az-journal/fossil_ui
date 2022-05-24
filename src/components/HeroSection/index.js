import React from 'react';
import { useState } from 'react';
import Video from '../../videos/video.mp4';
import fossil from '../../images/fossil.svg';
import{HeroContainer, HeroBg, VideoBg, HeroContent,Hero,HeroBtnWrapper} from './HeroElements';
import { ButtonMore, ButtonReg } from '../ButtonElement';

const HeroSection = () => {

const [hover, setHover] = useState(false);
const onHover=() => {
    setHover(!hover);
}

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
        <Hero><img src={fossil} alt="fossil_logo"/></Hero>
           
            <HeroBtnWrapper>
            <ButtonReg to='register'onMouseEnter={onHover} onMouseLeave={onHover}
                primary="true" onClick={(e) => {
                    e.preventDefault();
                    window.open('https://docs.oiler.network/oiler-network/products/fossil','_blank');
                    }}>
                    DOCS
                </ButtonReg> 
                <ButtonMore onClick={() => window.location = 'mailto:fossil@oiler.network'}
            primary="true">
                    CONTACT US
                </ButtonMore>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection