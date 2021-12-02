import styled from "styled-components";

export const MortContainer = styled.div`
    color: #fff;
    height: 1200px;
    background: ${({ lightBg }) => ( lightBg ? '#566D7E' : '#E5E4E2')};
    /* background: linear-gradient(#10295f, #497b3f); */

    @media screen and (max-width: 768px) {
        padding: 100px 0;
        height: 1200px;
    }
`;

export const MortWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 560px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    /* margin-right: 3rem;
    margin-left: 2rem; */
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width: 768px) {
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const MortRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) =>
     ( imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => 
        ( imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15x;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15x;
    padding: 0 15px;
    grid-area: col2;
`;

export const MortTextWrapper = styled.div`
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
    margin-top: 5rem;    
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 500;
    color: ${({ lightText }) => ( lightText ? '#f7f8fa' : '#010606' )};

    @media screen and (max-width: 768px) {
        font-size: 30px;
        margin-top: -2rem;
    }
`;

export const Subtitle = styled.p`
    max-width: 100%;
    margin-bottom: 21px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
    
    @media screen and (max-width: 768px) {
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
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 800px;
    height: 400px;
    margin: 0 0 50px 0;
    padding-right: 0;

    @media screen and (max-width: 768px) {
        width: 500px;
        display: flex;
        justify-content: center;
    }

    @media screen and (max-width: 458px) {
        width: 300px;
        height: 200px;
        display: flex;
        justify-content: center;
    }
`;

export const Button = styled.button`
    width: 150px;
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#497b3f  ' : '#fff')};
    white-space: nowrap;
    /* padding-top: 20px; */
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fff' : '#fff')};
    font-size: ${({fontBig}) => (fontBig? '20px' : '16px')};
    outline:none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#c43817' : '#c43817')       
    };
}
`