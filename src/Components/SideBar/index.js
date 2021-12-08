import React from 'react';
import { useNavigate } from 'react-router';
import { 
    SidebarContainer, SidebarWrapper, SidebarMenu, SidebarLink,
   
 } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {


    

        let navigate=useNavigate();
        function checkRoute() {
                navigate('ourteam')
            }

            return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="aboutus" onClick={toggle}>About Us</SidebarLink>
                    <SidebarLink  onClick={()=> checkRoute()} to="ourteam">OurTeam</SidebarLink>
                    <SidebarLink to="affiliation" onClick={toggle}>Affiliations</SidebarLink>
                    <SidebarLink to="news" onClick={toggle}>News</SidebarLink>
                    <SidebarLink to="testimonials" onClick={toggle}>Testimonials</SidebarLink>
                    <SidebarLink to="contactus" onClick={toggle}>Get in Touch</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
