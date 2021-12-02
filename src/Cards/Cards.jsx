import React, { Component } from 'react';
import Card from './CardUI';
import img1 from "../images/business.png";
import img2 from "../images/education.png";
import img3 from "../images/mortgage.png";
import img4 from "../images/infotech.png"
// import { ContactContainer } from '../Components/Contact/ContactElements';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        return(
            
            <div id="services" className="container-fluid d-grid justify-content-center">
                <div className="heading d-flex justify-content-center">
                    Our Services
                    </div>
                <div className="row">
                    <div className="col-md-3 d-flex justify-content-center" >
                        <Card imgsrc={img4}  title="IT" heading="We stick to the latest industry trends to deliver powerful and secure software that fits corporate..." id="1"/>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center">
                        <Card imgsrc={img2} title="Mortgage" heading="We can help you to choose the best deal. The home loan market can be at times confusing and..." id="2"/>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center">
                        <Card imgsrc={img3} title="Education" heading="Education will always remain the utmost priority to our service. We strive to provide students..." id="3"/>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center">
                        <Card imgsrc={img1} title="Business" heading="Accounting and taxation services are fundamentals of the business world. With the leadership..." id="4"/>
                    </div>
                    
                    </div>                   
                </div>
               
        )
    }
}

export default Cards; 