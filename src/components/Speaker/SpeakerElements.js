import styled from "styled-components";

export const SpeakerContainer = styled.div`
 background : #CE7235;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 padding: 0 30px;
 height: 600px;
 position: relative;
 z-index: 1;
 
`
export const SpeakerH1 = styled.h1`
font-size: 2rem;
color:#000;


@media screen and (max-width:480px){
    font-size: 2rem;
}
`

export const SpeakerImg =styled.img`
height: 150px;
width: 150px;
margin-bottom:40px;
margin-top:30px;
`

export const SpeakerH2 = styled.h2`
font-size: 1.7rem;
margin-bottom: 20px;
color:#000;
`

export const SpeakerP = styled.p`
font-size: 20px;
margin-bottom: 10px;
letter-spacing:5px;
color:#fff;
font-family:'Courier New', Courier, monospace;
`
export const LineImg = styled.img`
width:184px;
margin-top: 30px;
margin-bottom: 20px;
`

export const SpeakerP2 = styled.p`
font-size: 18px;
line-height: 24px;
font-family:'Courier New', Courier, monospace;
`

export const SpeakerWrapper = styled.div`
max-width: 400px;
display: flex;
flex-direction: column;
justify-content: center;
 align-items: center;
`