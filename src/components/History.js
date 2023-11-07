import React from 'react'
// import '../css/style.css'

function History() {
    return (
        <section id="our-life-sotry" className="ts-block ts-separate-bg-element ts-background-repeat" data-bg-image-opacity=".1" data-bg-image="assets/img/bg-pattern-dot.png">
            <div className="text-center ts-title">
                <h2>Our Life Story</h2>
            </div>
            <div className="ts-time-line__horizontal">
                <ul className="pt-5 owl-carousel" data-owl-items="99" data-owl-auto-width="1">
                    <li className="ts-time-line__item ts-time-line__milestone">
                        <div className="ts-box">
                            <h5>Company Founded</h5>
                        </div>
                        <figure>
                            <small>Sep</small>
                            <h6>2016</h6>
                        </figure>
                    </li>

                    <li className="ts-time-line__item">
                        <div className="ts-box">
                            <h5>Solution for slow money transfers</h5>
                            <p>
                                Phasellus in iaculis ante. Fusce odio justo, pulvinar sit amet nisl sed, lacinia laoreet
                                augue. Integer eu ultrices lacus, at laoreet
                            </p>
                            <a href="#" className="btn btn-dark btn-sm">Read More</a>
                        </div>
                        <figure>
                            <small>Mar</small>
                            <h6>2017</h6>
                        </figure>
                    </li>

                    <li className="ts-time-line__item">
                        <div className="ts-box">
                            <h5>Funding campaign launched</h5>
                            <p>
                                Phasellus in iaculis ante. Fusce odio justo, pulvinar sit amet nisl
                            </p>
                            <a href="#" className="btn btn-dark btn-sm">Read More</a>
                        </div>
                        <figure>
                            <small>Apr</small>
                            <h6>2017</h6>
                        </figure>
                    </li>

                    <li className="ts-time-line__item ts-time-line__milestone">
                        <div className="ts-box">
                            <h5>Funded $300,000</h5>
                        </div>
                        <figure>
                            <small>Jun</small>
                            <h6>2017</h6>
                        </figure>
                    </li>

                    <li className="ts-time-line__item">
                        <div className="ts-box">
                            <h5>Development started with 10 team members</h5>
                            <p>
                                Pulvinar sit amet nisl sed, lacinia laoreet augue. Integer eu ultrices lacus, at laoreet nunc.
                            </p>
                            <a href="#" className="btn btn-dark btn-sm">Read More</a>
                        </div>
                        <figure>
                            <small>Jul</small>
                            <h6>2017</h6>
                        </figure>
                    </li>

                    <li className="ts-time-line__item">
                        <div className="ts-box">
                            <h5>Next 8 developers join our team</h5>
                            <p>
                                Integer eu ultrices lacus, at laoreet nunc. In tincidunt
                            </p>
                            <a href="#" className="btn btn-dark btn-sm">Read More</a>
                        </div>
                        <figure>
                            <small>Aug</small>
                            <h6>2017</h6>
                        </figure>
                    </li>

                    <li className="ts-time-line__item">
                        <div className="ts-box">
                            <h5>First Prototype is here</h5>
                            <p>
                                Integer eu ultrices lacus, at laoreet nunc. In tincidunt nisi lorem, eu tempor ligula pulvinar at.
                            </p>
                            <a href="#" className="btn btn-dark btn-sm">Read More</a>
                        </div>
                        <figure>
                            <small>Oct</small>
                            <h6>2017</h6>
                        </figure>
                    </li>

                    <li className="ts-time-line__item">
                        <div className="ts-box">
                            <h5>Solution for slow money transfers</h5>
                            <p>
                                Phasellus in iaculis ante. Fusce odio justo, pulvinar sit amet nisl sed, lacinia laoreet
                                augue. Integer eu ultrices lacus, at laoreet
                            </p>
                            <a href="#" className="btn btn-dark btn-sm">Read More</a>
                        </div>
                        <figure>
                            <small>Nov</small>
                            <h6>2017</h6>
                        </figure>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default History