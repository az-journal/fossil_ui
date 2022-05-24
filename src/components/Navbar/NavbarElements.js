import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
    background: #010606;;
    height: 120x;
    display: flex;
    justify-content: center;
    align-items: center;
    

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100px;
    z-index: 1;
    width: 100%;
    padding: 0;
    max-width: 1100px;
`
export const NavLogo = styled.div`
    color: #fff;
    width:600px;
    cursor: pointer;
    display: flex;

  width:100px;
  height: 100px;
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-100%,60%);
    font-size: 1.8rem;
    cursor:pointer;
    color:#fff;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right:-22px;


@media screen and (max-width:768px) {
    display:none;
}
`

export const NavItem=styled.li`
height:80px;
`

export const NavLinks = styled(LinkS)`
color: #fff;
display: flex;
align-items:center;
text-decoration:none;
padding: 0 1rem;
height: 100%;
cursor:pointer;

&.active{
    border-bottom:3px solid #01bf71;
}
`

/*export const NavBtn =styled.nav`
display:flex;
align-items: center;

@media screen and (max-width:768px){
    display:none;
}
`
export const NavBtnLink =styled(LinkR)`
border-radius:50px;
background: #01bf71;
white-space: nowrap;
padding: 10px 22px;
color:#010606;
font-size: 16px;
outline:none;
border: none;
cursor: pointer;
transition: all 0.2 ease-in-out;
text-decoration:none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color:#010606;
}
`*/

export const Paragraph = styled.p`
    color: #fff;
  font-family:'Courier New', Courier, monospace;
  font-size:14px;
  margin-left: 5rem;
`