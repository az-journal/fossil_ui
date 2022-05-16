import React from 'react';
import speaker from '../../images/speaker.svg';
import line from '../../images/line.svg';
import { SpeakerContainer,SpeakerH1, SpeakerImg, SpeakerH2, SpeakerP, LineImg, SpeakerP2,SpeakerWrapper } from './SpeakerElements';

const Speaker = () => {
  return (
    <>
    <SpeakerContainer>
        <SpeakerWrapper>
        <SpeakerH1>Who is Speaking? </SpeakerH1>
        <SpeakerImg src = {speaker}/>
            <SpeakerH2>Marcello Bardus </SpeakerH2>
            <a href="https://twitter.com/0xmarcello" style={{ textDecoration: 'none' }}><SpeakerP>@0xMarcello</SpeakerP></a>
            <LineImg src={line}/>
            <SpeakerP2>Backend Developer @ Oiler - Write up a paragraph 'bout Marcello + Fossil</SpeakerP2>
            </SpeakerWrapper>
    </SpeakerContainer>
    </>
  )
}

export default Speaker