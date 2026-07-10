import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import HeroSection from '../components/heroSection'
import AboutUs from '../components/aboutUsSection'
import Products from '../components/products'
import Testimonials from '../components/testimonials'

const Home = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const section = document.getElementById(location.state.scrollTo);
            if (section) {
                setTimeout(() => {
                    section.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, [location]);
    return (
        <React.Fragment>
            <HeroSection />
            <AboutUs />
            <Products />
            <Testimonials />
        </React.Fragment>
    )
}

export default Home