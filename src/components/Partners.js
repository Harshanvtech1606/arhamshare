import React from 'react'
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css'; // Add this for styles
import 'owl.carousel/dist/assets/owl.theme.default.css'; // Add this for styles

import logo1 from '../images/bse.png'
import logo2 from '../images/nse.jpg'
import logo3 from '../images/cdsl.png'
import logo4 from '../images/mcx.png'
import logo5 from '../images/jarvis.png'
import logo6 from '../images/trade.png'

import '../css/homePage/Partner.css'




function Partners() {
    // const splideOptions = {
    //     rewind: true,
    //     gap: '1rem',
    //     perPage: 5,
    //     autoplay: true,
    //     interval: 2000, // Set autoplay interval in milliseconds (2 seconds in this example)
    // };

    const sliderOptions = {
        items: 6,
        loop: true,
        autoplay: true,
        responsive: {
            0: {
                items: 3,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 6,
                nav: true,
                loop: false
            }
        }
    }
    return (
        <>
            {/* <Splide
                options={splideOptions}
                aria-label="My Favorite Images"
            >
                <SplideSlide>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Bombay_Stock_Exchange_logo.svg/2560px-Bombay_Stock_Exchange_logo.svg.png" alt="Image 1" width='150px' />
                </SplideSlide>
                <SplideSlide>
                    <img src="https://logowik.com/content/uploads/images/nse-national-stock-exchange-of-india5651.jpg" alt="Image 2" width='150px' />
                </SplideSlide>
                <SplideSlide>
                    <img src="https://assets.smallcase.com/images/publishers/jarvis-invest/logo.png" alt="Image 3" width='150px' />
                </SplideSlide>
                <SplideSlide>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Central_Depository_Services_%28India%29_Limited.svg/1200px-Central_Depository_Services_%28India%29_Limited.svg.png" alt="Image 4" width='150px' />
                </SplideSlide>
                <SplideSlide>
                    <img src="https://companieslogo.com/img/orig/MCX.NS-4451e614.png?t=1604067039" alt="Image 5" width='150px' />
                </SplideSlide>
                <SplideSlide>
                    <img src="https://file-uploads.teachablecdn.com/ca1c572aa2ac488796edff3e00db8fa1/35258fb054944a5a8a69b1e781c17b27" alt="Image 6" width='150px' />
                </SplideSlide>
            </Splide> */}
            <div className='H-partner'>
                <div className='container'>
                    <div className='H-partner-p'>
                        <div className='H-partner-content'>
                            {/* <div><h6>MEET OUR PARTNERS</h6></div> */}
                            <h1>Our Partners</h1>
                        </div>
                        <div className='H-slider'>
                            <OwlCarousel
                                className="owl-theme"
                                loop
                                nav
                                {...sliderOptions}>
                                <img className="img" src={logo1} style={{ width: "50%" }} />
                                <img className="img" style={{ width: "50%" }} src={logo2} />
                                <img className="img" src={logo3} style={{ width: "50%" }} />
                                <img className="img" src={logo4} style={{ width: "50%" }} />
                                <img className="img" src={logo5} style={{ width: "50%" }} />
                                <img className="img" src={logo6} style={{ width: "50%" }} />
                                <img className="img" src={logo5} style={{ width: "50%" }} />
                                <img className="img" src={logo6} style={{ width: "50%" }} />
                                <img className="img" src={logo5} style={{ width: "50%" }} />
                                <img className="img" src={logo6} style={{ width: "50%" }} />

                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Partners