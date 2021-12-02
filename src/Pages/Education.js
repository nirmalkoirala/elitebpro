import React, {useState} from 'react';
import NavbarTeam from '../Components/NavbarTeam';
import Sidebar from '../Components/SideBar';
import Topbar from '../Components/Topbar'
import Mortgage from '../Components/PageSection'
import { MortObjThree } from '../Components/PageSection/data1';
import Footer from '../Components/Footer';



const Education = () => {
    const [isOpen, setIsOpen] = useState(false);

        const toggle = () => {
            setIsOpen(!isOpen);
        };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Topbar />
            <NavbarTeam toggle={toggle}/>
            <Mortgage {...MortObjThree} />
            <Footer />
        </>
    );
};

export default Education;
