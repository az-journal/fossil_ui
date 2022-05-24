import React from 'react'
import { Column2, ImgWrap, InfoContainer, InfoRow,InfoWrapper,TextWrapper, Heading, Subtitle, Column1, } from './InfoElements'
import { Button } from 'react-scroll';
import {ReactComponent as Coding} from '../../images/coding.svg';
import fossil_api from '../../images/fossil_api.svg';

const InfoSection = ({lightBg,id,imgStart,description,img,alt}) => {
  return (
    <>
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <Heading><img src={fossil_api} style ={{width:'300px', height:'115px'}}/></Heading>
                    <Subtitle>{description}</Subtitle>
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