import React, { Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Back1 from "../../images/tax.png"
import Back2 from "../../images/ca.png"
import Back3 from "../../images/finance.png"
import Back4 from "../../images/pier.png"
import Back5 from "../../images/fbaa.png"
import Back6 from "../../images/xero.png"
import "./aff.css"

export default class CenterMode extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className="affiliation">
        <h2 className="AffName">Our Affiliations</h2>
        <Slider {...settings}>
          <div>
            <img className="Image" src={ Back1 } alt="alt"/>
          </div>
          <div>
          <img className="Image" src={ Back2 } alt="alt"/>
          </div>
          <div>
          <img className="Image" src={ Back3 } alt="alt"/>
          </div>
          <div>
          <img className="Image" src={ Back4 } alt="alt"/>
          </div>
          <div>
          <img className="Image" src={ Back5 } alt="alt"/>
          </div>
          <div>
          <img className="Image" src={ Back6 } alt="alt"/>
          </div>
        </Slider>
      </div>
    );
  }
}