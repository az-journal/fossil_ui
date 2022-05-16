import styled from "styled-components";
import {Link} from 'react-scroll';


export const ButtonReg = styled(Link)`

border:none;
outline:none;
cursor:pointer;
display:flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
background: ${({primary})=> (primary ? '#E57F3B' : '#fff')};
border-radius: 5px;
letter-spacing: 0.1em;
font-size: ${({fontBig})=>(fontBig ? '20px' : '16px')};
white-space: nowrap;
padding: ${(big)=> (big ? '14px 48px' : '12px 30px')};
margin-right: 15px;


&:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary})=> (primary ? '#fff' : '#E57F3B' )};
    color: #E57F3B;
}
`
export const ButtonMore = styled(Link)`
border: 2px solid #E57F3B;
border-radius: 5px;
background:  ${({primary})=> (primary ? '#000' : '#E57F3B')};
color: #E57F3B;
display: inline-block;
letter-spacing: 0.1em;
font-size: ${({fontBig})=>(fontBig ? '20px' : '16px')};
white-space: nowrap;
padding: ${(big)=> (big ? '12.5px 35px' : '11px 29px')};
outline:none;
cursor:pointer;
display:flex;
justify-content: center;
align-items: center;
margin-left: 15px;

&:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary})=> (primary ? '#E57F3B' : '#000')};
    color: #fff;
}
`