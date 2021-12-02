import React, {useState} from 'react';
import NavbarTeam from '../Components/NavbarTeam';
import Sidebar from '../Components/SideBar';
import Topbar from '../Components/Topbar'
import Mortgage from '../Components/PageSection'
import { MortObjFour } from '../Components/PageSection/data1';
import Footer from '../Components/Footer';



const Business = () => {
    const [isOpen, setIsOpen] = useState(false);

        const toggle = () => {
            setIsOpen(!isOpen);
        };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Topbar />
            <NavbarTeam toggle={toggle}/>
            <Mortgage {...MortObjFour} />
            <Footer />
        </>
    );
};

export default Business;
