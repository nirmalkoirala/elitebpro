import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    /* background: '#C19A6B'; */
    background: ${({scrollNav}) => (scrollNav ? '#10295f' : '#10295f')};
    max-height: 80px;
    margin-top: 80px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.4s all ease;
        margin-top: 100px;
    }
    
    @media screen and (max-width: 960px) {
        transition: 0.4s all ease;
        margin-top: 90px;
    }

`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-weight: bold;

    @media screen and (max-width: 1100px) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 2rem;
    }
    
    @media screen and (max-width: 760px) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 2rem;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: -19px;
        right: 5px;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    list-style: none; 
    text-align:  center;
    padding-left: 10px;
    padding-right: 10px;
    /* margin-right: 100px; */

    @media screen and (max-width: 768px) {
        display: none;
        margin-right: 5rem;
    }
`;

export const NavItem = styled.div`
    height : 75px;
    padding-left: -8px;
    padding-right: -8px;
    margin-left: 1rem;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    font-weight: 500;
    font-size: 15px;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 6px;
    height: 100%;
    cursor: pointer;
    margin: 4px 20px;
    /* margin-right: 10px;
    margin-left: 30px; */

    /* &.active {
        border-bottom: 3px solid #786D5F;
    } */
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;


    @media screen and (max-width: 760px) {
        display: none;
    }
`;

// export const NavBTnLink = styled.div`
//     border-radius: 50px;
//     background: #010606;
//     white-space: nowrap;
//     color: #010606;
//     font-size: 16px;
//     outline: none;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;
//     text-decoration: none;
//     padding : 10px 22px;
//     border-radius: 5px;
//     margin : 10px 60px;

//     &:hover {
//         transition: all 0.2s ease-in-out;
//         background: #fff;
//         color: #786D5F;
//     }
// `;