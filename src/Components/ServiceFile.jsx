import React from "react"; // Ensure Remix Icons are available
import "./service.css"; // Import CSS file for styling
import { motion } from "framer-motion"; // Import framer-motion for animations
import bgDots from '../assets/bg-dots.png'
import kg1 from "../assets/kg-1.png";
import kg2 from "../assets/kg-2.png";
import plot from "../assets/plot.jpg";

import camm from "../assets/cam.png";



const slides = [
  { id: 1, image: kg1, title: "Investment Strategies", context: "We offer a wide range of investment strategies to help you achieve your real estate goals." },
  { id: 2, image: kg2, title: "Bulk Land Transactions", context: "Our bulk land transactions service provides a convenient and efficient way to purchase land for development projects." },
  { id: 3, image: plot, title: "Plotting Services", context: "Our plotting services allow you to create custom land plots with your desired specifications." },
  { id: 4, image: camm, title: "Land Acquisition", context: "Our land acquisition service connects you with the perfect land for your business." },
];

const ServiceFile = () => {
 
  return (
    <div className="container">
      <div className="destination__container" >
        <img className="bg__img__1" src={bgDots} alt="bg" />
        <div className="content" >
          
          <h1>EXPLORE YOUR DREAM WITH<br /><span >KETHIREDDY GROUP</span></h1>
         
          <p className="text-center">
          Specializing in strategic land acquisitions 
          for corporates and high-net-worth individuals in Hyderabad | Visakhapatnam | Bengaluru.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceFile;
