import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css'; // Add this for styles
import 'owl.carousel/dist/assets/owl.theme.default.css'; // Add this for styles

import '../css/homePage/HeroBanner.css'
import img from '../images/l3.jpg'

function HeroBanner() {
    const sliderOptions = {
        items: 1,
        loop: true,
        autoplay: true,

    }
    return (
        <>

            <OwlCarousel
                className="owl-theme "
                loop
                nav
                {...sliderOptions}
            >
                <div className=''>
                    <img className="Img" src={img} />
                    <div className="text-overlay">
                        <h1>Financial Freedom</h1>
                        <p>Empowering Your Financial Success through Personalised</p>
                        <div className='learnBtn'>
                            <button className='btn btn-sm Btn'>Learn More</button>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <img className="Img" src={img} />
                    <div className="text-overlay">
                        <h1>Financial Freedom</h1>
                        <p>Empowering Your Financial Success through Personalised</p>
                        <div className='learnBtn'>
                            <button className='btn btn-sm Btn'>Learn More</button>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <img className="Img" src={img} />
                    <div className="text-overlay">
                        <h1>Financial Freedom</h1>
                        <p>Empowering Your Financial Success through Personalised</p>
                        <div className='learnBtn'>
                            <button className='btn btn-sm Btn'>Learn More</button>
                        </div>
                    </div>
                </div>


            </OwlCarousel>
        </>
    )
}

export default HeroBanner