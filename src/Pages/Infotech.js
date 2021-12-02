import React, {useState} from 'react';
import NavbarTeam from '../Components/NavbarTeam';
import Sidebar from '../Components/SideBar';
import Topbar from '../Components/Topbar'
import PageSection from '../Components/PageSection'
import { MortObjOne } from '../Components/PageSection/data1';
import Footer from '../Components/Footer';



const Infotech = () => {
    const [isOpen, setIsOpen] = useState(false);

        const toggle = () => {
            setIsOpen(!isOpen);
        };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Topbar />
            <NavbarTeam toggle={toggle}/>
            <PageSection {...MortObjOne} />
            <Footer />
        </>
    );
};

export default Infotech;
