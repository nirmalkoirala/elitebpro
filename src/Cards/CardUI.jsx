import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";


const Card = props => {
    let navigate=useNavigate();

    function checkRoutes(name) {
        if(name==2){
            navigate('mortgage')
        }else if(name==1){
            navigate('infotech')
        }else if(name==3) {
            navigate('education')
        }else if(name==4) {
            navigate('business')
        }
    };

    return(
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="Image1" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">{props.heading}</p>
                <button onClick={()=>checkRoutes(props.id)} className="btn btn-outline-success">Learn More</button>
            </div>
        </div>
    )
} 

export default Card;