import React, { Component } from 'react';
import Card from './CardUI';
import img4 from "../../images/Kunga.jpeg";
import img2 from "../../images/Pratik.jpeg";
import img3 from "../../images/Sudarshan.jpeg";
import img1 from "../../images/Nirmal.jpeg";
import img5 from "../../images/Chintan.jpeg"
import img6 from "../../images/Rajan.jpeg"
import img7 from "../../images/Sagar.jpeg"
import img9 from "../../images/Pema.jpeg"
import img10 from "../../images/Supreeya.jpeg"

// import { ContactContainer } from '../Components/Contact/ContactElements';

class Cardss extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        return(
            
            <div id="myTeam" className="container-fluid d-grid justify-content-center">
                <div className="heading d-flex justify-content-center">
                    Our Team
                    </div>
                <div className="row">
                    <div className="col-md-3 d-flex justify-content-center" >
                        <Card imgsrc={img4}  title="Finance and Mortgage" heading="Kunga will tell, how you can become mortgage-free, and you can increase your assets and create a multiple property portfolio."/>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center">
                        <Card imgsrc={img2} title="Education Counsellor" heading="Pratik is a highly approachable and knowledgeable education agent who strives in providing students with excellent guidance."/>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center">
                        <Card imgsrc={img3} title="Business Advisor and Tax Accountant" heading="Sudarshan is a highly knowledgeable, experienced, and qualified Business and Tax accountant."/>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center">
                        <Card imgsrc={img1} title="IT Project Lead" heading="Nirmal engages the team, motivating them, taking care of their needs and maintaining a friendly and productive work environment."/>
                    </div>
                
                    <div className="col-md-3 d-flex justify-content-center" >
                        <Card imgsrc={img5}  title="IT" heading="Chintan is a well reputed and Qualified Education Agent Counsellor. Over the time his skills, experience and dedication have been highly valuable to help clients in achieving desired education outcomes."/>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center">
                        <Card imgsrc={img6} title="Mortgage" heading="Rajan bears a versatile personality with proven excellent coordination and administrative skill. He is well experienced in coordinating universities and colleges to best fit the needs of our student client."/>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center">
                        <Card imgsrc={img7} title="Education" heading="As a qualified Chartered Accountant, Sagar has over a decade of experience in providing taxation, accounting and consulting services for a range of businesses, sole traders, high net-wealth individuals/contractors and self managed super fund (SMSF)."/>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center">
                        <Card imgsrc={img9} title="Web Designer" heading="Pema is responsible for designing and building the interface, navigation and aesthetic of websites for businesses and clients."/>
                    </div>  
                    <div className="col-md-3 d-flex justify-content-center">
                        <Card imgsrc={img10} title="Network Engineer" heading="Supreeya is responsible for setting up, developing and maintaining computer networks within an organisation or between organisations."/>
                    </div>  
                </div>             
            </div>
               
        )
    }
}

export default Cardss; 