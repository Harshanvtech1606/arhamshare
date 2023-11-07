import React from "react";

function AboutHome() {
  return (
    <>
      <div className="about-outer">
        <div className="container">
          <div className="about-inner">
            <div className="about-item row">
              <div className=" col-lg-6 about-left-item d-flex">
                <div className="about-item-btn">
                  <div className="item-left">10</div>
                  <div className="item-right">Year Of Experiance</div>
                </div>
                <div className="img-1">
                  <img src="assets/image/about/about-1.jpg" alt="about-image" />
                </div>
                <div className="img-2">
                  <img src="assets/image/about/about-2.jpg" alt="about-image" />
                </div>
              </div>
              <div
                className="col-lg-6 about-right-item"
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                <div className="about-top">
                  <div className="btn">Wo WE Are</div>
                </div>
                <div className="about-title">
                  We Provide the <br />
                  Solution to grow <br />
                  Business.
                </div>
                <div className="text">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliquat enim ad minim veniam nostrud exercitation ullamco sed
                  do eiusmod tempor incid idunt.
                </div>
                <div className="about-service">
                  <div className="about-service-item">
                    <div className="icon">
                      <img src="assets/image/about/ab-1.png" alt="about" />
                    </div>
                    <div className="content">
                      <div className="text-1">Market Research </div>
                      <div className="text-2">
                        Consectetur adipiscing elit sed do eiusm onse ctetur
                        adipiscing elit.
                      </div>
                    </div>
                  </div>
                  <div className="about-service-item">
                    <div className="icon">
                      <img src="assets/image/about/ab-2.png" alt="about" />
                    </div>
                    <div className="content">
                      <div className="text-1"> Sales Increase </div>
                      <div className="text-2">
                        Consectetur adipiscing elit sed do eiusm onse ctetur
                        adipiscing elit.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-btn">Learn More</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutHome;
