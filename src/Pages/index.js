import React, {useState} from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/SideBar';
import Topbar from '../Components/Topbar'
import HeroSection from '../Components/HeroSection'; 
import Slider1 from '../Components/Slider1';
import InfoSection from '../Components/InfoSection';
import { homeObjOne, homeObjTwo } from '../Components/InfoSection/Data';
import Card from '../Cards/Cards'
import Resizable from '../Components/Affiliation/Affiliation'
import Footer from '../Components/Footer';
// import Team from '../Components/Myteam/Team';
import Contact from '../Components/Contact'



const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

        const toggle = () => {
            setIsOpen(!isOpen);
        };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Topbar />
            <Navbar toggle={toggle}/>
            <HeroSection />
            <Card />
            <InfoSection {...homeObjOne} />
            <Resizable />
            <InfoSection {...homeObjTwo} /> 
            <Slider1 />    
            <Contact />
            <Footer /> 
        </>
    );
};

export default Home;
