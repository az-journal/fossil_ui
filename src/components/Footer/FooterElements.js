import styled from "styled-components";

export const Footer = styled.div`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    top: 0;
    z-index: 10;
    letter-spacing:0.1em;
    

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`
export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0;
    max-width: 1100px;
`

export const FooterIcons = styled.div`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right:-22px;

@media screen and (max-width:768px) {
    display:none;
}
`
export const FooterItem=styled.div`
height:80px;
`
export const Logo = styled.img`
    justify-content: flex-end;
    cursor: pointer;
    display: flex;
    align-items: center;
    width:100px;
    height: 100px;
`