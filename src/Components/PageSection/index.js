import React, {useState} from 'react';
import {
    MortContainer, MortWrapper, 
    Heading, Subtitle, Img, 
} from './MortElements';


const PageSection = ({lightBg, id, lightText, headline,
darkText, description, img, alt,}) => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }
    return (
        <>
            <MortContainer lightBg={lightBg} id={id}>
                <MortWrapper> 
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Img src={img} alt={alt}/>
                    <Subtitle darkText={darkText}>{description[0]}</Subtitle>
                    <Subtitle darkText={darkText}>{description[1]}</Subtitle>
                    <Subtitle darkText={darkText}>{description[2]}</Subtitle>
                    <Subtitle darkText={darkText}>{description[3]}</Subtitle>
                    <Subtitle darkText={darkText}>{description[4]}</Subtitle>
                    <Subtitle darkText={darkText}>{description[5]}</Subtitle>
                    <Subtitle darkText={darkText}>{description[6]}</Subtitle>
                    <Subtitle darkText={darkText}>{description[7]}</Subtitle>
                    <Subtitle darkText={darkText}>{description[8]}</Subtitle>
                    {/* <Button to='contactus' onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary='true'
                            dark='true'>
                    Apply
                </Button> */}
                </MortWrapper>
            </MortContainer>
        </>
    );
};

export default PageSection;
