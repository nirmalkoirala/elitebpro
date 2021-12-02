import React, {useState, useEffect} from 'react';
import {scroll} from 'react-scroll';
import { useNavigate } from 'react-router';
import { 
    SidebarContainer, SidebarWrapper, SidebarMenu, SidebarLink,
    SideBtnWrap,
 } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {

        const [scrollNav, setScrollNav] = useState(false);
    
        const changeNav = () => {
            if(window.scrollY >=80) {
                setScrollNav(true);
            } else{
                setScrollNav(false);
            }
        }
        useEffect(() => {
            window.addEventListener('scroll', changeNav)
        }, [])
    

        let navigate=useNavigate();
        function checkRoute() {
                navigate('ourteam')
            }

    // const toggleHome = () => {
    //     scroll.scrollToTop();
    // };

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            {/* <Icon onClick={toggle}>
                <CloseIcon />
            </Icon> */}
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
                {/* <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap> */}
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
