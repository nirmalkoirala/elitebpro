import React, {useState, useEffect } from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { useNavigate } from 'react-router';


import 
{Nav, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn
} from './NavbarElements';

const Navbar = ({toggle}) => {
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

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    let navigate=useNavigate();
    function checkRoute() {
            navigate('ourteam')
        }

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='home' onClick={toggleHome}
                            smooth={true}
                            duration={450}
                            spy={true}
                            exact='true'
                            offset={-80}>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'
                            smooth={true}
                            duration={450}
                            spy={true}
                            exact='true'
                            offset={-80}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='aboutus'
                            smooth={true}
                            duration={450}
                            spy={true}
                            exact='true'
                            offset={-80}>About Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks onClick={()=> checkRoute()}
                            id="123"
                            to='ourteam'
                            smooth={true}
                            duration={450}
                            spy={true}
                            exact='true'
                            offset={-80}>Our Team</NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks to='affiliation'
                            smooth={true}
                            duration={450}
                            spy={true}
                            exact='true'
                            offset={-80}>Affiliations</NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks to='news'
                            smooth={true}
                            duration={450}
                            spy={true}
                            exact='true'
                            offset={-80}>News</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='testimonials'
                            smooth={true}
                            duration={450}
                            spy={true}
                            exact='true'
                            offset={-80}>Testimonials</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contactus'
                            smooth={true}
                            duration={450}
                            spy={true}
                            exact='true'
                            offset={-80}>Get in Touch</NavLinks>
                        </NavItem>
                        
                    
                    </NavMenu>
                    <NavBtn>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
