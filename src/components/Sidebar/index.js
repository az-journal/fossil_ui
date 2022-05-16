import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper,SidebarLink,SidebarRoute,SideBtnWrap,SidebarMenu } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
    <Icon onClick={toggle}>
       <CloseIcon/>
    </Icon>
    <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
              About
            </SidebarLink>
            <SidebarLink to="agenda" onClick={toggle}>
              Agenda
            </SidebarLink>
            <SidebarLink to="speaker" onClick={toggle}>
              Speaker
            </SidebarLink>
            <SidebarLink to="contactus" onClick={toggle}>
              Contact Us
            </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to='/register'>
                Register
            </SidebarRoute>
        </SideBtnWrap>
    </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar