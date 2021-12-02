import styled from "styled-components";

export const InfoContainer = styled.div`
    color: #fff;
    /* background: ${({ lightBg }) => ( lightBg ? '#E5E4E2' : '#1C1C1C')}; */
    background: '#fff';

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    column-gap: 100px;
    height: 800px;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) =>
     ( imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 1100px){
        column-gap: 1px;
    }

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => 
        ( imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15x;
    margin-top: 2rem;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    background: #F2F3F4 ;
    margin-top: 80px;
    padding: 0 15px;
    grid-area: col2;
    height: 700px;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

// export const TopLine = styled.p`
//     color: #01bf71;
//     font-size: 16px;
//     line-height: 16px;
//     font-weight: 700;
//     letter-spacing: 1.4px;
//     text-transform: uppercase;
//     margin-bottom: 16px;
// `;


export const Heading = styled.h1`
    margin-top: 1rem;    
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 500;
    color: ${({ lightText }) => ( lightText ? '#f7f8fa' : '#010606' )};

    @media screen and (max-width: 768px) {
        font-size: 30px;
        margin-top: -4rem;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#000')};
    
    @media screen and (max-width: 480px) {
        font-size: 14px;
    }
`;

export const Descrip = styled.p`
    max-width: 440px;
    margin-bottom: px;
    font-size: 18px;
    line-height: 24px;
  ;  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`

export const BtnWrap = styled.div`
    display: flex;
  ;  justify-content: flex-start;
`

export const ImgWrap = styled.div`
    margin: 0 1rem 3rem 1rem;
    max-width: 555px;
    height: 100%;
    align-items: center;
`

export const Img = styled.img`
    height: 300px;
    align-items: center;
    width: 400px;
    margin: 20px 0 30px 5px;
    padding-right: 0;

    @media screen and (max-width: 667px) {
        width: 300px;
        margin: 20px 0 30px 5px;
    }

    @media screen and (max-width: 405px) {
        width: 250px;
        margin: 20px 0 30px -20px;
    }
`;