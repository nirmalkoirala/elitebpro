import React, {useState} from 'react';
import NavbarTeam from '../Components/NavbarTeam';
import Sidebar from '../Components/SideBar';
import Topbar from '../Components/Topbar'
import Cardss from '../Components/Cards2/Cardss';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';



const OurTeam = () => {
    const [isOpen, setIsOpen] = useState(false);

        const toggle = () => {
            setIsOpen(!isOpen);
        };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Topbar />
            <NavbarTeam />
            <Cardss />
            <Contact />
            <Footer />
        </>
    );
};

export default OurTeam;
