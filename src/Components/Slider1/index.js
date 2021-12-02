import React, { lazy } from "react";
import styled from "styled-components";
import './CARD';
import Img1 from '../../images/3.jpg'
import Img2 from '../../images/4.jpg'


import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Card = lazy(() => import("../../Components/Slider1/CARD"));

const Section = styled.div`
  background-color: #F2F2F2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3rem 0;
`;

const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem; 
  margin-bottom: -3rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--purple);
  }
`;

const Carousal = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #0a0b10;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #0a0b10;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,

    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section id="testimonials">
      <Title>Few good words about us!</Title>
      <Carousal>
        <Slider {...settings}>
          <Card
            text="Kinga processed my home loan and i successfully got my approval. Without any hesitation, i highly recommend him for any kind of services regarding mortgage and finance."
            name="Bijaya Paudel"
            imgsrc= {Img1}
          />

          <Card
            text="Elite’s IT department has shown their quality in terms of website development. Jeevan Helped me to upgrade my website and got my domain name which i almost lost due to the issues with my previous IT company. I’m so grateful to him for helping me."
            name="Udaya Neupane"
            imgsrc= {Img2}
          />

          <Card
            text="I had a great experience when undergoing the process of University Application. The elite business group was really efficient in quickly processing my application on short notice."
            name="Paul Koirala"
            image="avatar-3"
          />

          <Card
            text="I was having very difficult times with my previous accountants for their services. It was really hard to get them to meet the due dates for my business transactions including taxes. Now I am feeling well looked after for my business and tax. Elite is highly recommended for Business and Tax Advisory services."
            name="Shan"
            image="avatar-4"
          />

          <Card
            text="Elite Business Group are really good in customer service and in terms of tax returns, Sudarshan was so interactive and helpful to get my maximum tax returns."
            name="Sujan Bajgain"
            image="avatar-4"
          />

          <Card
            text="They are so helpful in documentation for my tax returns.I got my maximum returns.  I highly recommend them for Tax returns services."
            name="Kushal Shrestha"
            image="avatar-4"
          />
        </Slider>
      </Carousal>
    </Section>
  );
};

export default Testimonials;