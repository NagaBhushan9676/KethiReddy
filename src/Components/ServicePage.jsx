import React from 'react';
import kg1 from "../assets/kg-1.png";
import kg2 from "../assets/kg-2.png";
import plot from "../assets/plot.jpg";
import camm from "../assets/cam.png";
import FinisherHeader from './FinisherHeader';
import ContactNavigate from './ContactNavigate';
const slides = [
  { id: 1, image: kg1, title: "Investment Strategies", context: "We offer a wide range of investment strategies to help you achieve your real estate goals." },
  { id: 2, image: kg2, title: "Bulk Land Transactions", context: "Our bulk land transactions service provides a convenient and efficient way to purchase land for development projects." },
  { id: 3, image: plot, title: "Plotting Services", context: "Our plotting services allow you to create custom land plots with your desired specifications." },
  { id: 4, image: camm, title: "Land Acquisition", context: "Our land acquisition service connects you with the perfect land for your business." },
];

const ServicePage = () => {
  return (
    <>
      <div className='text-center p-3' id='finisher-header' >
        
        <h1>Your Trusted Partner in Real Estate Solutions</h1>
      </div>
      <div className="servicepage_container gap-2 grid m-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
        {slides.map((slide, index) => (
          <div key={index} className="m-2 card">
            <img src={slide.image} alt={slide.title} />
            <div className="p-md-4 p-2">
              <h2>{slide.title}</h2>
              <p>{slide.context}</p>
            </div>
          </div>

        ))}
      </div>
      <div className='contact_sp p-3 text-center' >
       
            <h2>Begin your real estate journey today!</h2>
            <p>Our team of experienced real estate professionals is dedicated to helping you achieve your real estate goals. Contact us today to learn more about our services and how we can help you achieve your real estate dreams.</p>
            <button className='btn btn-outline-warning'>< ContactNavigate bText="Get in Touch"/></button>
      </div>
    </>

  );
}

export default ServicePage;
