import React from "react";
import "../css/homePage/Kyc.css";

function KycForm() {
  return (
    <>
      <div className="kyc-outer">
        <div className="kyc-item">
          <div className="img-block">
            <img src="assets/image/kyc/kyc-1.webp" alt="kyc" />
            <div className="kyc-content">
              <div className="title">
                JOIN <span> US NOW</span>
              </div>
              <p>
                Perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudanti, totam rem aperiam, eaque ipsa
                quae so some thing new for tax calculation
              </p>
            </div>
          </div>
          <div className="bg-block">
            <form action="">
              <div className="form-outer">
                <div className="form-item">
                  <div className="input-form">
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      id="name"
                      required
                    />
                    <i class="fa-solid fa-user icon"></i>
                  </div>
                  <div className="input-form">
                    <input
                      type="email"
                      placeholder="Email Id"
                      name="Email"
                      id="Email"
                      required
                    />
                    <i class="fa-solid fa-envelope"></i>
                  </div>
                </div>
                <div className="form-item">
                  <div className="input-form">
                    <input
                      type="text"
                      placeholder="Mobile NO"
                      name="mobile no"
                      id="mobile no"
                      required
                    />
                    <i class="fa-solid fa-phone"></i>
                  </div>
                  <div className="input-form">
                    <input
                      type="text"
                      placeholder="City"
                      name="city"
                      id="city"
                      required
                    />
                    <i class="fa-solid fa-location-dot"></i>
                  </div>
                </div>
                <div className="input-btn">
                  <input type="submit" value="GET STARTED" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default KycForm;
