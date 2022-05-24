import React from 'react'
import {InfoContainer, InfoRow,InfoWrapper,TextWrapper,TopLine, Heading, Subtitle, Column1,Paragraph } from './SpeakerElements';
import medium from '../../images/medium.svg';
import fossil from '../../images/fossil.svg';

const InfoSection = ({lightBg,id,imgStart,topLine,bottomLine,lightText,headline,description,img,alt}) => {
  return (
    <>
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline} </Heading>
                    <Subtitle>Fossil is a set of smart contracts on both Starknet and Ethereum L1 that allow Starknet smart contracts to read anything ever committed to Ethereum L1 and any of it’s EVM based L2s.</Subtitle>
                </TextWrapper>
               <Paragraph onClick={(e) => {
                    e.preventDefault();
                    window.open('https://medium.com/oiler-network/introducing-fossil-ce4c23ad17c4','_blank');
                    }}><img src={medium} alt="articler" style={{ width: '50px', height:'50px', cursor:"pointer" }}/></Paragraph>
                </Column1>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default InfoSection