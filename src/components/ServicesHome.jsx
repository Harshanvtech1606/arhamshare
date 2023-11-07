import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "../css/homePage/Service.css";

import ser1 from "../images/services/1.png";
import ser2 from "../images/services/2.png";
import ser3 from "../images/services/3.png";
import ser4 from "../images/services/4.png";
import ser5 from "../images/services/5.png";
import ser6 from "../images/services/6.png";

function ServicesHome() {
  const sliderOptions = {
    items: 3,
    loop: true,
    autoplay: true,
  };
  return (
    <>
      <div className="serviceHome">
        <div className="container">
          <div class="section-title">
            <h1>Our Services</h1>
          </div>
        </div>
        <div className="s-flex">
          <div className="content">
            <a href="">
              <div className="content-overlay"></div>
              <img className="content-image" src={ser1} alt="" />
              <div className="content-details fadeIn-left">
                <h3>Equity & Derivatives</h3>
                <p>This is a short description</p>
              </div>
            </a>
          </div>
          <div className="content">
            <a href="">
              <div className="content-overlay"></div>
              <img className="content-image" src={ser2} alt="" />
              <div className="content-details fadeIn-left">
                <h3>Currency Trading</h3>
                <p>This is a short description</p>
              </div>
            </a>
          </div>
          <div className="content">
            <a href="">
              <div className="content-overlay"></div>
              <img className="content-image" src={ser1} alt="" />
              <div className="content-details fadeIn-left">
                <h3>IPO Trading</h3>
                <p>This is a short description</p>
              </div>
            </a>
          </div>
        </div>
        <div className="s-flex">
          <div className="content">
            <a href="">
              <div className="content-overlay"></div>
              <img className="content-image" src={ser3} alt="" />
              <div className="content-details fadeIn-left">
                <h3>Commodity Trading</h3>
                <p>This is a short description</p>
              </div>
            </a>
          </div>
          <div className="content">
            <a href="">
              <div className="content-overlay"></div>
              <img className="content-image" src={ser4} alt="" />
              <div className="content-details fadeIn-left">
                <h3>Depository Services</h3>
                <p>This is a short description</p>
              </div>
            </a>
          </div>
          <div className="content">
            <a href="">
              <div className="content-overlay"></div>
              <img className="content-image" src={ser6} alt="" />
              <div className="content-details fadeIn-left">
                <h3>Insurance Services</h3>
                <p>This is a short description</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesHome;
