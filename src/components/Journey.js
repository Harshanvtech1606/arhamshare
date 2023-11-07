import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css"; // Add this for styles
import "owl.carousel/dist/assets/owl.theme.default.css"; // Add this for styles

import '../css/homePage/Journey.css'

function Journey() {
    const options = {
        items: 5, 
        loop: true, 
        nav: true,
        dots: true, 
        autoplay: true, 
        autoplayTimeout: 5000,
    };
    return (
        <>

            <section
                id="our-life-sotry"
                className="ts-block ts-separate-bg-element ts-background-repeat"
                data-bg-image-opacity=".1"
                data-bg-image="assets/img/bg-pattern-dot.png"
            >
                <div className="text-center ts-title">
                    <h2>Our Life Story</h2>
                </div>
                <div className="ts-time-line__horizontal">
                    <OwlCarousel className="owl-theme" {...options}>
                        <div className="item" style={{ width: 'fit-content' }}>
                            <li className="ts-time-line__item ts-time-line__milestone" >
                                <div className="ts-box" >
                                    <h5>Company Founded</h5>
                                </div>
                                <figure>
                                    <small>Sep</small>
                                    <h6>2016</h6>
                                </figure>
                            </li>
                        </div>

                        <div className="item">
                            <li className="ts-time-line__item">
                                <div className="ts-box">
                                    <h5>Solution for slow money transfers</h5>
                                    <p>
                                        Phasellus in iaculis ante. Fusce odio justo, pulvinar
                                        sit amet nisl sed, lacinia laoreet augue. Integer eu
                                        ultrices lacus, at laoreet
                                    </p>
                                    <a href="#" className="btn btn-dark btn-sm">
                                        Read More
                                    </a>
                                </div>
                                <figure>
                                    <small>Mar</small>
                                    <h6>2017</h6>
                                </figure>
                            </li>
                        </div>

                        <div className="item">
                            <li className="ts-time-line__item">
                                <div className="ts-box">
                                    <h5>Solution for slow money transfers</h5>
                                    <p>
                                        Phasellus in iaculis ante. Fusce odio justo, pulvinar
                                        sit amet nisl sed, lacinia laoreet augue. Integer eu
                                        ultrices lacus, at laoreetPhasellus in iaculis ante. Fusce odio justo, pulvinar
                                        sit amet nisl sed, lacinia laoreet augue. Integer eu
                                        ultrices lacus, at laoreetPhasellus in iaculis ante. Fusce odio justo, pulvinar
                                        sit amet nisl sed, lacinia laoreet augue. Integer eu
                                        ultrices lacus, at laoreet
                                    </p>
                                    <a href="#" className="btn btn-dark btn-sm">
                                        Read More
                                    </a>
                                </div>
                                <figure>
                                    <small>Mar</small>
                                    <h6>2017</h6>
                                </figure>
                            </li>
                        </div>

                        {/* Add more timeline items here as separate <div> elements */}
                    </OwlCarousel>
                </div>
                <div className="ts-background">
                    <div className="ts-background-image"></div>
                </div>
            </section >
        </>
    );
}

export default Journey;
