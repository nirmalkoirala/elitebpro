import React, {useState, useEffect, Link} from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Navigate, useNavigate } from 'react-router';


import 
{Nav, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn
} from './NavbarTeamElements';

const NavbarTeam = props => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >=80) {
            setScrollNav(true);
        } else{
            setScrollNav(false);
        }
    }

    let navigate=useNavigate();
    function checkRoute(){
        navigate('ourteam')
    }

    function goHome(){
        navigate('/');
    }

    // let navigate=useNavigate();
    // function checkRoute() {
    //         navigate('ourteam')
    //     }



    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    {/* <NavLogo to='/' onClick={toggleHome}>
                    Car Detail
                    </NavLogo> */}
                    <MobileIcon onClick={goHome}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                        <NavLinks onClick={() => goHome()}>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks onClick={() => goHome()}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks onClick={() => goHome()}>About Us</NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks>Our Team</NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks onClick={() => goHome()}>Affiliations</NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks onClick={() => goHome()}>News</NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks onClick={() => goHome()}>Testimonials</NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks onClick={() => goHome()}>Get in Touch</NavLinks>
                        </NavItem>
                        {/* <NavItem>
                            <NavLinks to='home' 
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
                        </NavItem> */}
                        
                    
                    </NavMenu>
                    <NavBtn>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    );
};

export default NavbarTeam;
