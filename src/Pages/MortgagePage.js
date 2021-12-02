import React, {useState} from 'react';
import NavbarTeam from '../Components/NavbarTeam';
import Sidebar from '../Components/SideBar';
import Topbar from '../Components/Topbar'
import PageSection from '../Components/PageSection'
import { MortObjTwo } from '../Components/PageSection/data1';
import Footer from '../Components/Footer';



const Mortgage = () => {
    const [isOpen, setIsOpen] = useState(false);

        const toggle = () => {
            setIsOpen(!isOpen);
        };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Topbar />
            <NavbarTeam toggle={toggle}/>
            <PageSection {...MortObjTwo} />
            <Footer />
        </>
    );
};

export default Mortgage;
