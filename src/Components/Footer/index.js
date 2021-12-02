import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'
import { animateScroll as scroll} from 'react-scroll'
// import { Link } from 'react-scroll'
import { FooterContainer, FooterWrap, FooterLinksContainer,
FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink,
SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIconLink, SocialIcons
} from './FooterElements'


const Footer = () => {


const toggleHome = () => {
    scroll.scrollToTop();
};
    return (
        <>
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                         <FooterLinkItems>
                             <FooterLinkTitle>Speak To Our Team</FooterLinkTitle>
                                <FooterLink to="">(02) 6156 2625</FooterLink>
                                <FooterLink to="">info@elitebpro.com.au</FooterLink> 
                                <FooterLink to="">Office 9, 7 Beissel Street, Belconnen =, ACT 2617</FooterLink>           
                        </FooterLinkItems> 
                        {/* <FooterLinkItems>
                            <FooterLinkTitle>Apply</FooterLinkTitle>
                                <FooterLink to="/">MORTGAGE Form</FooterLink>
                                <FooterLink to="/">Taxation Form</FooterLink>
                                <FooterLink to="/">Education Form</FooterLink>  
                        </FooterLinkItems> */}
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                         <SocialLogo to="" onClick={toggleHome}>Elite Business Professionals</SocialLogo>
                        <WebsiteRights>Elite © {new Date().getFullYear()}
                         All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/elitebpro" target="_blank"
                             aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/elshaddaihc/" target="_blank"
                             aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.youtube.com/channel/UCD_FYyjBkQVLXiJG5eDtEsg" target="_blank"
                             aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons> 
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
            
        </>
    );
};



export default Footer;
