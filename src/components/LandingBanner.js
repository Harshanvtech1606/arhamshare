import React, { useState, useEffect } from 'react'
import '../css/homePage/LandingSlide.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css'; // Add this for styles
import 'owl.carousel/dist/assets/owl.theme.default.css'; // Add this for styles
// import AOS from 'aos';
// import 'aos/dist/aos.css';

import img from '../images/l3.jpg'

import { motion, useAnimation } from "framer-motion";

function LandingBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const controls = useAnimation();
    const slides = [
        {
            image: img,
            caption: 'Caption for Slide 1',
        },
        {
            image: img,
            caption: 'Caption for Slide 2',

        },
        {
            image: img,
            caption: 'Caption for Slide 3',
        },
        // Add more slides as needed
    ];
    const sliderOptions = {
        items: 1,
        loop: true,
        autoplay: true,
    }

    const animateText = async () => {
        await controls.start({
            opacity: 0,
            x: -500,
        });
        await controls.start({
            opacity: 1,
            x: 0,
        });
    };

    const handleSlideChange = (event) => {
        animateText();
    };

    useEffect(() => {
        // Initialize animation for the first slide
        animateText();
    }, []);
    return (

        <OwlCarousel className="owl-theme" {...sliderOptions}>
            {
                slides.map((slide, index) => (
                    <div className="item" key={index}>
                        <img src={slide.image} alt={`Slide ${index}`} style={{ height: '750px' }} />
                        <div className="carousel-caption">
                            <motion.h2 initial={{ opacity: 0, x: -500 }} animate={{ opacity: 1, x: 0 }}>
                                {slide.caption}
                            </motion.h2>
                            <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
                                <a href="#" className="btn btn-transparent btn-rounded btn-large">
                                    Learn More
                                </a>
                            </motion.p>
                        </div>
                    </div>
                ))
            }
        </OwlCarousel >
    )
}

export default LandingBanner