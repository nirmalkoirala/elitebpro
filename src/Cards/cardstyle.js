import styled from "styled-components";

export const ContactContainer = styled.div`
    background: #fff;
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    
    @media screen and (max-width: 480px) {
    object-fit: contain;
    flex-direction: column;
    padding-bottom: 0;
    }
`