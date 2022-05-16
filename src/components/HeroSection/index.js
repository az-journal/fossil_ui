import React from 'react';
import { useState } from 'react';
import Video from '../../videos/video.mp4';
import fossil from '../../images/fossil.svg';
import{HeroContainer, HeroBg, VideoBg, HeroContent,Hero,HeroH1,HeroBtnWrapper} from './HeroElements';
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
            <HeroH1>WORKSHOP</HeroH1>
            <HeroBtnWrapper>
                <ButtonReg to='register'onMouseEnter={onHover} onMouseLeave={onHover}
                primary="true">
                    REGISTER
                </ButtonReg>
                <ButtonMore to='learnmore' primary="true">
                    LEARN MORE
                </ButtonMore>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection