import React from 'react';


import Home from './Home'
// import Navbar from './Navbar'
// import Projects from './Projects'

import Footer from './Footer'
import Testimonials from './Testimonials'
import WhyChooseus from './WhyChooseus'
import Portifolio from './Portifolio'
import Introduction from './Introduction'
import SwiperCarousel from './SwiperCarousel'
import ServiceFile from './ServiceFile'
import ProjectCarouse from './ProjectCarouse;'

const MainHome = () => {
    return (
        <div>
            <ServiceFile />
            <Introduction />
            <Home />
            <SwiperCarousel />
            <Portifolio />
            <WhyChooseus />
            <ProjectCarouse />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default MainHome;
