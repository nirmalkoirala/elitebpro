import styled from 'styled-components';


export const Top = styled.nav`
    position: relative;
    display: flex;
    justify-content: center;
    height: 1px;

    @media screen and (max-width: 1024px) {
        margin-top: -7px;
        height: 10px;
        width: auto;
    }

    @media screen and (max-width: 768px) {
        height: 1px;
        width: auto;
    }

    @media screen and (max-width: 500px) {
        height: 1px;
        width: auto;
    }
`;


export const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 1;
    width: 100%;
    max-width: 1100px;

    @media screen and (max-width: 960){
        width: auto;
    }
`

export const TopLogo = styled.div`

    justify-content: start;
    cursor: pointer;
    text-decoration: none;
    align-items: center;

    @media screen and (max-width: 1024px) {
    justify-content: start;
    cursor: pointer;
    text-decoration: none;
    align-items: center;
    margin: 10px 0 0 90px;
    }
    
    @media screen and (max-width: 760px) {
        margin: 10px 0 0 50px;
    }
`;

export const TopMenu = styled.div`
    display: grid;
    align-items: center;
    list-style: none; 
    text-align:  center;
    margin-right: 5rem;
    padding-left: 30px;
    padding-right: 50px;
    margin-right: 100px;
`

export const TopItem = styled.div`
    display: flex;
    justify-content: space-between;
    height : 75px;

    @media screen and (max-width: 900px) {
        display: flex;
        justify-content: center;
        margin-left: 5rem;
    }

    @media screen and (max-width: 600px) {
        display: none;
    }
`;

export const TopLinks = styled.a`
    color: #2C3539;
    font-weight: 500;
    font-size: 31px;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0;
    height: 100%;
    cursor: pointer;
    margin: 5px 20px;
    /* margin-right: 10px;
    margin-left: 30px; */

    @media screen and (max-width: 768px) {
    color: #2C3539;
    font-weight: 500;
    font-size: 25px;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0;
    height: 100%;
    cursor: pointer;
    margin: 5px 20px;
    }

    @media screen and (max-width: 468px) {
        display: none;
    }

    &.active {
        border-bottom: 3px solid #786D5F;
    }
`;

export const Button = styled.button`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#497b3f  ' : '#fff')};
    white-space: nowrap;
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