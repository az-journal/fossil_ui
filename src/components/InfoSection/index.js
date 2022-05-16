import React from 'react'
import { Column2, Img, ImgWrap, InfoContainer, InfoRow,InfoWrapper,TextWrapper,TopLine, Heading, Subtitle, BtnWrap, Column1, Paragraph } from './InfoElements'
import { Button } from 'react-scroll';
import {ReactComponent as Coding} from '../../images/coding.svg';
import matchbox from '../../images/matchbox.png'

const InfoSection = ({lightBg,id,imgStart,topLine,lightText,headline,description,img,alt}) => {
  return (
    <>
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline} </Heading>
                    <Subtitle>{description}</Subtitle>
                   <Paragraph>In collaboration with @matchbox_dao  <a href="https://twitter.com/matchbox_dao/photo" target="_blank" rel="noreferrer"><img  src={matchbox} alt="logo" style={{width:'80px', height:'80px'}}/></a></Paragraph>
                   
                </TextWrapper>
                </Column1>
                <Column2>
                <ImgWrap>
                <Coding width = '100%'/>
                </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default InfoSection