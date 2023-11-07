import React from 'react'
import LandingBanner from '../components/LandingBanner'
import Header from '../common components/Header'
import '../css/Navbar.css'
import ServicesHome from '../components/ServicesHome'
import AboutHome from '../components/AboutHome'
import Partners from '../components/Partners'
import KycForm from '../components/KycForm'
import History from '../components/History'
import HeroBanner from '../components/HeroBanner'
import Testimonials from '../components/Testimonials'
import Journey from '../components/Journey'

function HomePage() {
    return (
        <>
            <div className=' header-main-outer'>
                {/* <Header /> */}
                <HeroBanner />
            </div>
            {/* <ServicesHome /> */}
            <AboutHome />
            <ServicesHome />
            <Journey />
            <KycForm />
            <Partners />
            <Testimonials />

        </>
    )
}

export default HomePage