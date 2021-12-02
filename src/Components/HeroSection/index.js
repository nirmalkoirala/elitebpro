import React, {useState} from 'react';
import Video from '../../Components/videos/herobg.mp4'
// import { Button } from '../ButtonElements';
import { 
    HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, VideoBg,
    HeroBtnWrapper, Button
 } from './HeroElements';
// import { MdStoreMallDirectory } from 'react-icons/md';
 
const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

        
    return (
        <HeroContainer>
            <HeroBg>
            <VideoBg autoPlay loop muted src={Video}  />
        
            </HeroBg>
               
           <HeroContent>
               <HeroH1>Welcome to Elite Business Professionals</HeroH1>
                <HeroP>
                Group of multiple business entities.
                </HeroP>
            <HeroBtnWrapper>
            <Button to='contactus' onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary='true'
                            dark='true'>
                    Contact us
                </Button>
            </HeroBtnWrapper>
           </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
