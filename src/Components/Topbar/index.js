import React from 'react'
import Background from "../../images/elitelogo1.jpeg"
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'
import { 
    Top, TopContainer, TopLogo, TopMenu, TopItem, TopLinks,
 } from './TopbarElements'

const Topbar = () => {
    // const [hover, setHover] = useState(false);

    // const onHover = () => {
    //     setHover(!hover);
    // }
    return (
        <>
            <Top id='home'>
                <TopContainer>
                    <TopLogo>
                        <img src={ Background } alt="abc" />
                    </TopLogo>
                    <TopMenu>
                        <TopItem>
                            <TopLinks href="https://www.facebook.com/elitebpro" target="_blank"
                             aria-label="Facebook">
                                <FaFacebook />
                            </TopLinks>
                            <TopLinks href="https://www.instagram.com/elitebusinesspro/" target="_blank"
                             aria-label="Facebook">
                                <FaInstagram />
                            </TopLinks>
                            <TopLinks href="https://www.youtube.com/channel/UCD_FYyjBkQVLXiJG5eDtEsg" target="_blank" aria-label="Youtube">
                                <FaYoutube />                
                            </TopLinks>
                            {/* <TopLinks>
                                <FaTwitter />                
                            </TopLinks> */}
                        </TopItem>
                    </TopMenu>
                </TopContainer>
            </Top>
        </>
    )
}

export default Topbar
