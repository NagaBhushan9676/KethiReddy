import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
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

const SwiperCarousel = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto mt-10 px-4">
      <h1 id="sub_title"> Our Services</h1>
      <hr id="title_hr"/>
      <Swiper
        modules={[Navigation, EffectCoverflow]}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        spaceBetween={10}
        navigation={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 10,
          stretch: 40,
          depth: 900,
          modifier: 2.5,
          slideShadows: false,
        }}
        className="h-[500px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative group flex justify-center">
            <div className="relative overflow-hidden rounded-xl">
              {/* Slide Image */}
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="w-[800px] h-[400px] object-cover rounded-xl shadow-sm transition-all duration-700 group-hover:scale-101"
              />
              
              {/* Hover Effect - Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center text-white  opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="px-6">{slide.context}</p>
              </div>
            </div>
            
            {/* Slide Title (Always Visible) */}
            <h2 className="text-2xl font-bold text-white  mt-4">{slide.title}</h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
