import styled from "styled-components";

export const AgendaContainer = styled.div`
height: 500px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #010606;
padding-bottom:200px;


@media screen and (max-width: 768px) {
    height:1100px;
}

@media screen and (max-width: 480px) {
    height:1300px;
}
`

export const AgendaWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 100px;
padding: 0 50px;


@media screen and (max-width: 1000px) {
   
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px) {
  
    grid-template-columns: 1fr;
}
`

export const AgendaCard = styled.div`
background:transparent;
border: 0.1px solid #CE7235;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: left;
border-radius: 10px;
max-height: 440px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover{
    
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 0px 10px #CE7235;
}
`

export const AgendaIcon = styled.img`
height: 40px;
width: 40px;
margin-bottom:10px;
`
export const AgendaH1=styled.h1`
font-size: 2.5rem;
color:#CE7235;
margin-bottom: 30px;

@media screen and (max-width:480px){
    font-size: 2rem;
}
`

export const AgendaH2 = styled.h2`
font-size: 1.5rem;
margin-bottom: 10px;
color:#CE7235;

`

export const AgendaP=styled.p`
font-size: 1rem;
max-width:600px;
text-align: center;
color: #fff;
margin-bottom:40px;
font-family:'Courier New', Courier, monospace;
`
export const AgendaP2=styled.p`
font-size: 1rem;
max-width:600px;
text-align: left;
color: #fff;
margin-bottom:40px;
font-family:'Courier New', Courier, monospace;

`