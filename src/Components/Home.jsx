import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });}, []);
    return (
        <div className='home_container'>
           
                <h1 data-aos="fade-in">
                    Your Trusted Land Investment <br /> <span className='text-right'>Partner</span>
                </h1>
            
            <p>Specializing in strategic land acquisitions for corporates and high-net-worth individuals in Hyderabad and Visakhapatnam.</p>
        </div>
    );
}

export default Home;
